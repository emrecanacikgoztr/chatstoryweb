/**
 * ChatStory Engine v5
 * + Dev mode (başlığa 3x tıkla)
 * + Prev / Next navigation
 * + Inline dialog editor (dev only)
 * + Channel switching (group/dm)
 * + Player state tracking & dynamic photos (v5)
 */

const ChatStory = (() => {

  let _msgs=[], _idx=0, _paused=false, _timer=null, _typingEl=null;
  let _config={}, _total=0, _devMode=false, _rendered=[];
  let _currentChannel='group';
  let _state={};  // Player choices state (e.g., {dress:'navy', shoe:'flat', earring:'pearl'})
  const CIRC = 2 * Math.PI * 11;
  let feed, ringEl, pctEl, ctaEl, pausePill, tintEl;
  let chNameEl, chAvatarEl, chHeaderEl;

  // ── CHANNEL SWITCHING ──
  function hexToRgba(hex, alpha){
    hex=hex.replace('#','');
    if(hex.length===3) hex=hex.split('').map(c=>c+c).join('');
    const r=parseInt(hex.substr(0,2),16), g=parseInt(hex.substr(2,2),16), b=parseInt(hex.substr(4,2),16);
    return `rgba(${r},${g},${b},${alpha})`;
  }

  function clearFeedForChannelSwitch(){
    if(!feed) return;
    // Fade out all existing children, then remove them so they're truly gone.
    // User cannot scroll back to old channel messages.
    const children = Array.from(feed.children);
    children.forEach(ch => {
      ch.style.transition = 'opacity .4s ease, transform .4s ease';
      ch.style.opacity = '0';
      ch.style.transform = 'translateY(-8px)';
    });
    // After fade completes, remove them from the DOM
    setTimeout(() => {
      children.forEach(ch => { if(ch.parentNode) ch.remove(); });
    }, 450);
    // Clear the rendered-list tracker too (used for dev mode prev)
    _rendered = [];
    // Scroll back to top for the fresh screen
    setTimeout(() => {
      const sc = document.getElementById('feed-scroll');
      if(sc) sc.scrollTop = 0;
    }, 460);
  }

  function applyChannel(channelId){
    if(!_config.channels) return;
    const ch=_config.channels[channelId]; if(!ch) return;
    _currentChannel=channelId;
    if(chNameEl) chNameEl.textContent=ch.name||'';
    if(chAvatarEl){
      if(ch.avatar){
        chAvatarEl.textContent='';
        chAvatarEl.style.backgroundImage=`url(${ch.avatar})`;
        chAvatarEl.style.backgroundSize='cover';
        chAvatarEl.style.backgroundPosition='center';
        chAvatarEl.style.color='transparent';
        chAvatarEl.style.background=`url(${ch.avatar}) center/cover`;
      } else {
        chAvatarEl.style.backgroundImage='';
        chAvatarEl.textContent=ch.initial||'?';
        chAvatarEl.style.color=ch.color||_config.accent||'#d4845a';
        chAvatarEl.style.background=ch.avatarBg||ch.bgColor||'rgba(255,255,255,.1)';
      }
    }
    if(chHeaderEl){
      const tint=ch.headerTint||(ch.color?hexToRgba(ch.color,0.14):null);
      chHeaderEl.style.transition='background .35s ease';
      chHeaderEl.style.background=tint||'';
    }
    // Feed background tint — smooth transition between channels
    if(tintEl){
      const bgTint = ch.bgTint || (ch.color ? `radial-gradient(ellipse 90% 55% at 50% 0%, ${hexToRgba(ch.color, 0.08)}, transparent 70%)` : '');
      tintEl.style.transition = 'opacity .5s ease, background .5s ease';
      tintEl.style.background = bgTint || '';
    }
  }

  // ── WAVEFORM ──
  function waveform() {
    const h=[7,13,19,15,9,21,17,11,19,7,15,21,13,9,17,7,15,11,19,9];
    return h.map(x=>`<span style="height:${x}px"></span>`).join('');
  }

  // ── PROGRESS ──
  function setProgress(pct) {
    const offset = CIRC - (pct/100)*CIRC;
    if (ringEl) { ringEl.style.strokeDashoffset=offset; ringEl.style.stroke=_config.accent||'#d4845a'; }
    if (pctEl) pctEl.textContent = Math.round(pct)+'%';
  }

  // ── CLOCK ──
  function updateClock() {
    const el=document.getElementById('sb-time'); if(!el) return;
    const now=new Date(); let h=now.getHours(), m=now.getMinutes();
    const ampm=h>=12?'PM':'AM'; h=h%12||12;
    el.textContent=`${h}:${String(m).padStart(2,'0')} ${ampm}`;
  }

  // ── TYPING ──
  function removeTyping() { if(_typingEl){_typingEl.remove();_typingEl=null;} }

  function showTyping(who, duration, cb) {
    removeTyping();
    const cfg=_config.characters[who]||{};
    const d=document.createElement('div'); d.className='typing-row';
    d.innerHTML=`<div class="typing-av" style="background:${cfg.bgColor||'rgba(255,255,255,.1)'};color:${cfg.color||'#fff'}">${cfg.initial||'?'}</div><span class="typing-name" style="color:${cfg.color||'var(--smoke)'}">${cfg.name||who} yazıyor</span><div class="dots"><div class="dot"></div><div class="dot"></div><div class="dot"></div></div>`;
    feed.appendChild(d); _typingEl=d;
    requestAnimationFrame(()=>requestAnimationFrame(()=>{d.classList.add('show');d.scrollIntoView({behavior:'smooth',block:'nearest'});}));
    // Use _timer so it can be cancelled on pause
    if(_timer){clearTimeout(_timer);_timer=null;}
    _timer=setTimeout(()=>{_timer=null;removeTyping();cb();},duration);
  }

  // ── SCHEDULE ──
  function schedule(delay) {
    if(_paused) return;
    _timer=setTimeout(()=>{_timer=null;next();},delay);
  }

  // ─────────────────────────────────────
  // DEV MODE
  // ─────────────────────────────────────

  function enterDevMode() {
    _devMode=true; _paused=true;
    if(_timer){clearTimeout(_timer);_timer=null;}
    removeTyping();
    document.getElementById('dev-bar').style.display='flex';
    if(pausePill) pausePill.style.opacity='0';
    // Transform progress pct into download button
    if(pctEl){
      pctEl.textContent='⬇ Senaryo';
      pctEl.style.cssText='font-family:var(--mono);font-size:9px;color:rgba(100,220,130,.9);cursor:pointer;white-space:nowrap;border:1px solid rgba(100,220,130,.3);padding:3px 8px;border-radius:10px;background:rgba(100,220,130,.1);';
      pctEl.onclick=(e)=>{e.stopPropagation();downloadScript();};
    }
    // Update info button text to current episode
    const infoBtn=document.getElementById('dev-info');
    if(infoBtn && _config.episode){
      const current=EPISODE_REGISTRY.find(x=>x.slug==='ep'+_config.episode);
      if(current) infoBtn.textContent=`EP${current.num} · ${current.title}`;
    }
    refreshDevHandlers();
    showDevToast('Geliştirici modu açık 🛠');
  }

  function exitDevMode() {
    _devMode=false;
    document.getElementById('dev-bar').style.display='none';
    const panel=document.getElementById('dev-ep-panel'); if(panel) panel.classList.remove('open');
    closeEditor();
    feed.querySelectorAll('.bubble[data-msg-idx]').forEach(b=>{b.style.cursor='';b.onclick=null;});
    // Restore progress pct
    if(pctEl){
      const pct=Math.round((_idx/_total)*100);
      pctEl.textContent=pct+'%';
      pctEl.style.cssText='';
      pctEl.onclick=null;
    }
    showDevToast('Geliştirici modu kapatıldı');
  }

  function showDevToast(msg) {
    const t=document.getElementById('dev-toast'); if(!t) return;
    t.textContent=msg; t.style.opacity='1';
    setTimeout(()=>t.style.opacity='0',2000);
  }

  // ── EPISODE REGISTRY ──
  // Yeni bir bölüm yazıldığında "done: true" yap. Listenin sırası bölüm sırası.
  const EPISODE_REGISTRY = [
    { num:'01', slug:'ep01', title:"O Sadece Meşgul",        done:true  },
    { num:'02', slug:'ep02', title:"Açıklaması Var",          done:false },
    { num:'03', slug:'ep03', title:"Date",                    done:false },
    { num:'04', slug:'ep04', title:"Sara",                    done:false },
    { num:'05', slug:'ep05', title:"Çok Tatlı",               done:false },
    { num:'06', slug:'ep06', title:"Fotoğraf",                done:false },
    { num:'07', slug:'ep07', title:"İş Seyahati",             done:false },
    { num:'08', slug:'ep08', title:"Dönüş",                   done:false },
    { num:'09', slug:'ep09', title:"Lena'nın Sorusu",         done:false },
    { num:'10', slug:'ep10', title:"Her Şey Yolunda",         done:false },
    { num:'11', slug:'ep11', title:"Ekran Görüntüsü",         done:false },
    { num:'12', slug:'ep12', title:"Sorma Bana",              done:false },
    { num:'13', slug:'ep13', title:"Marc Çok Tatlı",          done:false },
    { num:'14', slug:'ep14', title:"Son İpucu",               done:false },
    { num:'15', slug:'ep15', title:"Biliyordum",              done:false },
  ];

  function renderEpisodePanel(){
    const list=document.getElementById('dev-ep-list'); if(!list) return;
    const currentSlug=(_config.episode ? 'ep'+_config.episode : null);
    list.innerHTML=EPISODE_REGISTRY.map(ep=>{
      const isCurrent=ep.slug===currentSlug;
      const cls=['dev-ep-item'];
      if(!ep.done) cls.push('locked');
      if(isCurrent) cls.push('current');
      return `<div class="${cls.join(' ')}" data-slug="${ep.slug}">
        <span class="dev-ep-num">EP ${ep.num}</span>
        <span class="dev-ep-title">${ep.title}</span>
        <span class="dev-ep-status">${isCurrent?'▸ şimdi':(ep.done?'hazır':'—')}</span>
      </div>`;
    }).join('');
    // Click handlers
    list.querySelectorAll('.dev-ep-item').forEach(el=>{
      el.onclick=(e)=>{
        e.stopPropagation();
        const slug=el.getAttribute('data-slug');
        const ep=EPISODE_REGISTRY.find(x=>x.slug===slug);
        if(!ep || !ep.done){ showDevToast('Bu bölüm henüz yazılmadı'); return; }
        if(slug===currentSlug){ showDevToast('Zaten bu bölümdesin'); return; }
        // Navigate to episode
        window.location.href=`../../episodes/${slug}/index.html`;
      };
    });
    // Update dev-info button text
    const infoBtn=document.getElementById('dev-info');
    if(infoBtn){
      const current=EPISODE_REGISTRY.find(x=>x.slug===currentSlug);
      if(current){
        infoBtn.textContent=`EP${current.num} · ${current.title}`;
      }
    }
  }

  function toggleEpisodePanel(){
    const panel=document.getElementById('dev-ep-panel'); if(!panel) return;
    const isOpen=panel.classList.contains('open');
    if(isOpen){
      panel.classList.remove('open');
    } else {
      renderEpisodePanel();
      panel.classList.add('open');
    }
  }

  function refreshDevHandlers() {
    if(!_devMode) return;
    feed.querySelectorAll('.bubble[data-msg-idx]').forEach(b=>{
      b.style.cursor='pointer';
      b.onclick=(e)=>{
        e.stopPropagation();
        openEditor(parseInt(b.getAttribute('data-msg-idx')),b);
      };
    });
  }

  // ── LOCALSTORAGE ──
  function lsKey() { return 'chatstory_edits_'+(window.location.pathname||'ep01'); }

  function loadSavedEdits() {
    try {
      const saved=JSON.parse(localStorage.getItem(lsKey())||'{}');
      Object.keys(saved).forEach(idx=>{
        if(_msgs[idx]&&_msgs[idx].t==='msg') _msgs[idx].txt=saved[idx];
      });
    } catch(e){}
  }

  function saveEdit(msgIdx, newTxt) {
    try {
      const saved=JSON.parse(localStorage.getItem(lsKey())||'{}');
      saved[msgIdx]=newTxt;
      localStorage.setItem(lsKey(),JSON.stringify(saved));
    } catch(e){}
  }

  // ── DOWNLOAD SCRIPT ──
  function downloadScript() {
    const lines=['const MESSAGES = [',''];
    _msgs.forEach((m)=>{
      if(m.t==='msg'){
        const safeTxt=(m.txt||'').replace(/\\/g,'\\\\').replace(/'/g,"\\'");
        const gap=m.gap?', gap:true':'';
        lines.push(`  { t:'msg', f:'${m.f}', at:'${m.at}'${gap}, txt:'${safeTxt}' },`);
      } else {
        lines.push('  '+JSON.stringify(m)+',');
      }
    });
    lines.push('','];');
    const blob=new Blob([lines.join('\n')],{type:'text/javascript'});
    const a=document.createElement('a');
    a.href=URL.createObjectURL(blob); a.download='script.js'; a.click();
    showDevToast('Senaryo indirildi ✓');
  }

  // ── EDITOR ──
  function openEditor(msgIdx, bubbleEl) {
    closeEditor();
    const m=_msgs[msgIdx];
    if(!m||m.t!=='msg') return;
    const editor=document.getElementById('dev-editor');
    editor.style.display='flex';
    document.getElementById('dev-editor-who').textContent=(m.f||'').toUpperCase();
    document.getElementById('dev-editor-time').textContent=m.at||'';
    const ta=document.getElementById('dev-editor-txt');
    ta.value=m.txt||''; ta.focus();
    feed.querySelectorAll('.bubble').forEach(b=>b.classList.remove('editing'));
    bubbleEl.classList.add('editing');

    document.getElementById('dev-editor-save').onclick=()=>{
      const newTxt=ta.value.trim(); if(!newTxt) return;
      _msgs[msgIdx].txt=newTxt;
      saveEdit(msgIdx, newTxt);
      const metaEl=bubbleEl.querySelector('.bubble-meta');
      Array.from(bubbleEl.childNodes).forEach(node=>{if(node!==metaEl) node.remove();});
      bubbleEl.insertBefore(document.createTextNode(newTxt), metaEl);
      bubbleEl.classList.remove('editing');
      closeEditor();
      showDevToast('Kaydedildi ✓');
    };
    document.getElementById('dev-editor-cancel').onclick=()=>{
      bubbleEl.classList.remove('editing'); closeEditor();
    };
  }

  function closeEditor() {
    document.getElementById('dev-editor').style.display='none';
    feed.querySelectorAll('.bubble').forEach(b=>b.classList.remove('editing'));
  }

  // ── PREV / NEXT ──
  function recalcChannel(){
    // Walk through msgs[0.._idx-1] and find last channel message
    if(!_config.channels) return;
    let ch=_config.initialChannel||'group';
    for(let i=0;i<_idx;i++){
      if(_msgs[i]&&_msgs[i].t==='channel'&&_msgs[i].id) ch=_msgs[i].id;
    }
    applyChannel(ch);
  }

  function devPrev() {
    if(_idx<=0) return;
    _idx--;
    const last=_rendered.pop();
    if(last&&last.parentNode) last.remove();
    recalcChannel();
    setProgress((_idx/_total)*100);
    showDevToast(`← ${_idx}/${_total}`);
  }

  function devNext() {
    if(_idx>=_total){ showDevToast('Son mesaj'); return; }
    const m=_msgs[_idx]; _idx++;
    const el=buildEl(m);
    if(el){
      feed.appendChild(el);
      _rendered.push(el);
      requestAnimationFrame(()=>requestAnimationFrame(()=>{
        el.classList.add('show');
        scrollToBottom();
      }));
    }
    setProgress((_idx/_total)*100);
    refreshDevHandlers();
    showDevToast(`→ ${_idx}/${_total}`);
  }

  // ─────────────────────────────────────
  // BUILD ELEMENT
  // ─────────────────────────────────────

  function buildEl(m) {
    const cfg=m.f?(_config.characters[m.f]||{}):{};
    const isRight=m.f==='you'||cfg.side==='right';
    const side=isRight?'right':'left';

    if(m.t==='date'){
      const d=document.createElement('div'); d.className='date-chip';
      d.innerHTML=`<span>${m.x}</span>`; return d;
    }
    if(m.t==='sys'){
      const d=document.createElement('div'); d.className='sys-msg';
      d.textContent=m.x; return d;
    }
    if(m.t==='silence'){
      const d=document.createElement('div'); d.className='silence-row';
      d.innerHTML=`<div class="sil-line"></div><span class="sil-text">${m.x}</span><div class="sil-line"></div>`; return d;
    }
    if(m.t==='channel'){
      // Channel switch is handled specially in render() — buildEl just prepares
      // the divider element (if any) and applyChannel is called in render to
      // orchestrate the correct sequence (clear → switch → divider).
      if(m.divider){
        const d=document.createElement('div'); d.className='silence-row channel-divider';
        d.innerHTML=`<div class="sil-line"></div><span class="sil-text">${m.divider}</span><div class="sil-line"></div>`;
        return d;
      }
      return null;
    }

    // ── CHOICE — show bottom panel ──
    if(m.t==='choice'){
      showChoicePanel(m);
      return null;
    }

    // ── MSG WITH SENDER ──
    const row=document.createElement('div');
    row.className=`msg-row ${side}${m.gap?' gap':''}`;

    function metaEl(time){
      const e=document.createElement('div'); e.className='bubble-meta';
      const tick=isRight?`<span class="meta-tick" style="color:${cfg.color||'rgba(74,222,128,.5)'}">✓✓</span>`:'';
      e.innerHTML=`<span class="meta-time">${time}</span>${tick}`; return e;
    }

    if(m.t==='emoji'){
      const bw=document.createElement('div'); bw.className='bwrap';
      const b=document.createElement('div'); b.className='bubble emoji-only';
      b.textContent=m.txt; bw.appendChild(b); bw.appendChild(metaEl(m.at));
      row.appendChild(bw); return row;
    }
    if(m.t==='voice'){
      const outer=document.createElement('div'); outer.className='voice-outer';
      const vb=document.createElement('div'); vb.className='voice-bubble';
      vb.style.background=isRight?'var(--ink2)':'var(--ink)';
      vb.style.border='1px solid rgba(255,255,255,.07)';
      if(isRight) vb.style.borderRight=`2.5px solid ${cfg.color||'#fff'}`;
      else vb.style.borderLeft=`2.5px solid ${cfg.color||'#fff'}`;
      vb.innerHTML=`<div class="v-play" style="background:${cfg.bgColor||'rgba(255,255,255,.1)'};color:${cfg.color||'#fff'}">▶</div><div class="waveform">${waveform()}</div><span class="v-dur">${m.dur}</span>`;
      const desc=document.createElement('div'); desc.className='voice-desc'; desc.textContent=m.desc;
      outer.appendChild(vb); outer.appendChild(desc); outer.appendChild(metaEl(m.at));
      row.appendChild(outer); return row;
    }
    if(m.t==='photo'){
      const outer=document.createElement('div'); outer.className='photo-outer';
      const card=document.createElement('div'); card.className='photo-card';
      // Resolve dynamic URL: replace {state.X} placeholders with current state values
      let url = m.url || '';
      if(url.indexOf('{') !== -1){
        url = url.replace(/\{([a-z_]+)\}/g, (match, key) => _state[key] || match);
      }
      // Build caption only if tag or cap exists
      let captionHtml = '';
      if(m.tag || m.cap){
        const tagPart = m.tag ? `<div class="photo-tag">${m.tag}</div>` : '';
        const capPart = m.cap ? `<div class="photo-cap-txt">${m.cap}</div>` : '';
        captionHtml = `<div class="photo-caption">${tagPart}${capPart}</div>`;
      }
      card.innerHTML=`<img src="${url}" alt="" loading="lazy">${captionHtml}`;
      outer.appendChild(card); outer.appendChild(metaEl(m.at));
      row.appendChild(outer); return row;
    }
    if(m.t==='ss'){
      const outer=document.createElement('div'); outer.className='ss-outer';
      const card=document.createElement('div'); card.className='ss-card';
      const lines=(m.msgs||[]).map(l=>`<div class="ss-line"><span class="ss-who" style="color:${l.color||'var(--fog2)'}">${l.who}</span><div class="ss-text">${l.txt}</div></div>`).join('');
      card.innerHTML=`<div class="ss-topbar"><div class="ss-dots"><div class="ss-dot" style="background:#ff5f57"></div><div class="ss-dot" style="background:#ffbd2e"></div><div class="ss-dot" style="background:#28c840"></div></div><span class="ss-from">${m.from_label||''}</span></div><div class="ss-body">${lines}<div class="ss-footer">${m.footer||''}</div></div>`;
      outer.appendChild(card); outer.appendChild(metaEl(m.at));
      row.appendChild(outer); return row;
    }

    // regular msg
    const msgIdx=_msgs.indexOf(m);

    // Avatar — show on every message (Duskwood style)
    if(!isRight && m.f){
      const cfg2=_config.characters[m.f]||{};
      const av=document.createElement('div');
      av.className='msg-avatar';
      if(cfg2.avatar){
        av.innerHTML=`<img src="${cfg2.avatar}" alt="${cfg2.name||m.f}">`;
      } else {
        av.classList.add('placeholder');
        av.style.background=cfg2.bgColor||'rgba(255,255,255,.1)';
        av.style.color=cfg2.color||'#fff';
        av.textContent=cfg2.initial||'?';
      }
      row.appendChild(av);
    }

    const bw=document.createElement('div'); bw.className='bwrap';
    if(m.f&&m.f!=='you'){
      const lbl=document.createElement('div'); lbl.className='sender-lbl';
      lbl.style.color=cfg.color||'var(--smoke)'; lbl.textContent=cfg.name||m.f;
      bw.appendChild(lbl);
    }
    if(m.f==='you'){
      const lbl=document.createElement('div'); lbl.className='sender-lbl';
      lbl.style.color=cfg.color||'#a0c4a0'; lbl.textContent='sen';
      bw.appendChild(lbl);
    }
    const b=document.createElement('div'); b.className='bubble';
    b.setAttribute('data-msg-idx',msgIdx);
    b.style.background=isRight?(cfg.bubbleBg||'var(--ink2)'):(cfg.bubbleBg||'var(--ink)');
    b.style.border='1px solid rgba(255,255,255,.07)';
    if(isRight) b.style.borderRight=`2.5px solid ${cfg.color||'rgba(255,255,255,.2)'}`;
    else b.style.borderLeft=`2.5px solid ${cfg.color||'rgba(255,255,255,.2)'}`;
    b.textContent=m.txt;
    b.appendChild(metaEl(m.at));
    bw.appendChild(b); row.appendChild(bw); return row;
  }

  // ── SCROLL ──
  function scrollToBottom() {
    const sc = document.getElementById('feed-scroll');
    if (sc) sc.scrollTop = sc.scrollHeight;
  }

  // ── CHOICE PANEL ──
  function showChoicePanel(m) {
    const panel = document.getElementById('choice-panel');
    const opts  = document.getElementById('choice-options');
    opts.innerHTML = '';

    m.options.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.className = 'choice-panel-btn';
      btn.innerHTML = `<span class="choice-panel-key">${opt.label}</span><span class="choice-panel-txt">${opt.txt}</span>`;
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        if(_devMode) return;

        // Set state if defined: opt.set = {dress:'navy'} etc.
        if(opt.set){
          Object.assign(_state, opt.set);
        }

        // Reset panel to empty state
        panel.classList.remove('show');
        setTimeout(() => { opts.innerHTML = ''; }, 350);

        // Show YOU message in feed
        setTimeout(() => {
          const youEl = buildEl({t:'msg', f:'you', at:m.at||'', gap:true, txt:opt.txt});
          feed.appendChild(youEl); _rendered.push(youEl);
          requestAnimationFrame(()=>requestAnimationFrame(()=>{
            youEl.classList.add('show');
            youEl.scrollIntoView({behavior:'smooth', block:'nearest'});
          }));

          // Run reply chain
          const chain = opt.replies || [];
          function runChain(ci) {
            if(_paused) {
              // Re-try on resume: pause handler will call schedule which eventually resumes
              if(_timer){clearTimeout(_timer);_timer=null;}
              _timer = setTimeout(()=>{_timer=null; runChain(ci);}, 400);
              return;
            }
            if(ci >= chain.length) {
              if(_timer){clearTimeout(_timer);_timer=null;}
              _timer = setTimeout(()=>{_timer=null; schedule(1200);}, 600);
              return;
            }
            const r = chain[ci];
            if(_timer){clearTimeout(_timer);_timer=null;}
            _timer = setTimeout(()=>{
              _timer = null;
              const td = r.t==='photo' ? 1400 : (r.txt && r.txt.length > 60 ? 1400 : 950);
              showTyping(r.f, td, () => {
                // Build reply with original type (msg, photo, etc.)
                const replyData = Object.assign({}, r, {at: r.at||m.at, gap: ci===0});
                if(!replyData.t) replyData.t = 'msg';
                const rEl = buildEl(replyData);
                feed.appendChild(rEl); _rendered.push(rEl);
                requestAnimationFrame(()=>requestAnimationFrame(()=>{
                  rEl.classList.add('show');
                  const sb = (replyData.t === 'photo' || replyData.t === 'ss') ? 'end' : 'nearest';
                  rEl.scrollIntoView({behavior:'smooth', block: sb});
                }));
                if(_devMode) refreshDevHandlers();
                runChain(ci+1);
              });
            }, ci===0 ? 800 : 1800);
          }
          runChain(0);
        }, 300);
      });
      opts.appendChild(btn);
    });

    // Show panel with animation then scroll
    requestAnimationFrame(()=>requestAnimationFrame(()=>{
      panel.classList.add('show');
      setTimeout(()=>scrollToBottom(), 350);
    }));
  }

  // ── RENDER ──
  function render(m) {
    // ── CHANNEL SWITCH — orchestrate cleanly ──
    // Sequence: fade out old messages → switch channel colors → drop divider in
    if(m.t==='channel'){
      clearFeedForChannelSwitch();
      // Wait for fade-out to complete before switching channel & dropping divider
      setTimeout(() => {
        applyChannel(m.id);
        if(m.divider){
          const d=document.createElement('div'); d.className='silence-row channel-divider';
          d.innerHTML=`<div class="sil-line"></div><span class="sil-text">${m.divider}</span><div class="sil-line"></div>`;
          feed.appendChild(d); _rendered.push(d);
          requestAnimationFrame(()=>requestAnimationFrame(()=>{
            d.classList.add('show');
          }));
        }
        setProgress((_idx/_total)*100);
        // Now schedule the next message after the divider has appeared
        if(_idx<_total) schedule(m.divider ? 1600 : 800);
      }, 500);
      return;
    }

    const el=buildEl(m);
    if(!el) return; // choice — handled by panel
    feed.appendChild(el); _rendered.push(el);
    requestAnimationFrame(()=>requestAnimationFrame(()=>{
      el.classList.add('show');
      // For photos, scroll so the whole image is visible (not cut off at top)
      const scrollBlock = (m.t === 'photo' || m.t === 'ss') ? 'end' : 'nearest';
      el.scrollIntoView({behavior:'smooth', block: scrollBlock});
    }));
    setProgress((_idx/_total)*100);
    if(m.t==='choice') return; // panel handles continuation
    let d=1400;
    if(m.t==='date') d=400;
    else if(m.t==='sys') d=900;
    else if(m.t==='silence') d=3200;
    else if(m.t==='photo') d=2800;
    else if(m.t==='ss') d=3500;
    else if(m.t==='voice') d=900;
    else if(m.txt&&m.txt.length>70) d=2000;
    else if(m.txt&&m.txt.length>40) d=1600;
    else if(m.txt&&m.txt.length<8) d=2200;
    if(_idx<_total) schedule(d);
    else setTimeout(()=>ctaEl.classList.add('show'),2000);
    if(_devMode) refreshDevHandlers();
  }

  // ── NEXT ──
  function next() {
    if(_paused) return;
    if(_idx>=_total){ctaEl.classList.add('show');return;}
    const m=_msgs[_idx]; _idx++;
    if(m.t==='choice'){render(m);return;}
    const needsTyping=['msg','voice','photo','ss','emoji'].includes(m.t)&&m.f&&m.f!=='you';
    if(needsTyping){
      const td=m.t==='voice'?1900:m.t==='photo'?1400:m.t==='ss'?2000:m.txt&&m.txt.length>60?1500:850;
      showTyping(m.f,td,()=>render(m));
    } else render(m);
  }

  // ── INIT ──
  function init(config, messages) {
    _config=config; _msgs=messages; _total=messages.length;
    document.documentElement.style.setProperty('--accent',config.accent||'#d4845a');
    feed=document.getElementById('feed');
    ringEl=document.getElementById('ring-fill');
    pctEl=document.getElementById('prog-pct');
    ctaEl=document.getElementById('cta');
    pausePill=document.getElementById('pause-pill');
    tintEl=document.getElementById('feed-tint');
    if(tintEl&&config.tint) tintEl.style.background=config.tint;
    const chName=document.getElementById('ch-name');
    const chAvatar=document.getElementById('ch-avatar');
    chNameEl=chName; chAvatarEl=chAvatar;
    chHeaderEl=document.querySelector('.chat-header');
    // If channels are defined, use channel system; else fall back to legacy
    if(config.channels){
      applyChannel(config.initialChannel||'group');
    } else {
      if(chName&&config.chatName) chName.textContent=config.chatName;
      if(chAvatar&&config.chatAvatar){
        chAvatar.textContent=config.chatAvatar;
        chAvatar.style.background=config.chatAvatarBg||'rgba(255,255,255,.1)';
        chAvatar.style.color=config.accent||'#d4845a';
      }
    }
    const ctaBtn=document.getElementById('cta-btn');
    const ctaSub=document.getElementById('cta-sub');
    if(ctaBtn&&config.ctaLabel) ctaBtn.textContent=config.ctaLabel;
    if(ctaSub&&config.ctaSub) ctaSub.textContent=config.ctaSub;
    updateClock(); setInterval(updateClock,15000);

    // Feed height handled by flex:1 in CSS

    // Triple-tap title → dev mode
    let tapCount=0, tapTimer=null;
    const titleEl=document.getElementById('ch-name');
    if(titleEl){
      titleEl.style.cursor='default';
      titleEl.addEventListener('click',(e)=>{
        e.stopPropagation(); tapCount++;
        if(tapTimer) clearTimeout(tapTimer);
        tapTimer=setTimeout(()=>{tapCount=0;},600);
        if(tapCount>=3){tapCount=0; _devMode?exitDevMode():enterDevMode();}
      });
    }

    // Pause on tap (player mode only)
    document.addEventListener('click',()=>{
      if(_devMode) return;
      if(_idx===0) return;
      _paused=!_paused;
      if(pausePill) pausePill.style.opacity=_paused?'1':'0';
      if(!_paused){
        // Resume: clear any stale timer before starting fresh
        if(_timer!==null){clearTimeout(_timer);_timer=null;}
        schedule(80);
      }
      else{
        if(_timer!==null){clearTimeout(_timer);_timer=null;}
        removeTyping();
      }
    });

    if(ringEl){ringEl.style.strokeDasharray=String(CIRC);ringEl.style.strokeDashoffset=String(CIRC);}
    injectDevUI();
  }

  // ── INJECT DEV UI ──
  function injectDevUI() {
    const bar=document.createElement('div'); bar.id='dev-bar';
    bar.innerHTML=`<button class="dev-btn" id="dev-prev">◀</button><button class="dev-btn dev-info" id="dev-info" title="Bölüm bilgisi & geçiş">EP · ···</button><button class="dev-btn" id="dev-next">▶</button><button class="dev-btn dev-exit" id="dev-exit">✕</button>`;
    document.body.appendChild(bar);
    document.getElementById('dev-prev').onclick=(e)=>{e.stopPropagation();devPrev();};
    document.getElementById('dev-next').onclick=(e)=>{e.stopPropagation();devNext();};
    document.getElementById('dev-exit').onclick=(e)=>{e.stopPropagation();exitDevMode();};
    document.getElementById('dev-info').onclick=(e)=>{e.stopPropagation();toggleEpisodePanel();};

    // Episode info panel (bölüm listesi)
    const epPanel=document.createElement('div'); epPanel.id='dev-ep-panel';
    epPanel.innerHTML=`<div class="dev-ep-header">Bölümler</div><div class="dev-ep-list" id="dev-ep-list"></div>`;
    document.body.appendChild(epPanel);

    const editor=document.createElement('div'); editor.id='dev-editor';
    editor.innerHTML=`<div class="dev-editor-header"><span class="dev-editor-who" id="dev-editor-who"></span><span class="dev-editor-time" id="dev-editor-time"></span></div><textarea id="dev-editor-txt" rows="3" placeholder="Mesaj metni..."></textarea><div class="dev-editor-actions"><button class="dev-editor-btn cancel" id="dev-editor-cancel">İptal</button><button class="dev-editor-btn save" id="dev-editor-save">Kaydet ✓</button></div>`;
    document.body.appendChild(editor);

    const toast=document.createElement('div'); toast.id='dev-toast';
    document.body.appendChild(toast);

    const style=document.createElement('style');
    style.textContent=`
.msg-row{align-items:flex-end;}
.msg-avatar{width:28px;height:28px;border-radius:50%;overflow:hidden;flex-shrink:0;margin-bottom:2px;margin-right:6px;}
.msg-avatar img{width:100%;height:100%;object-fit:cover;display:block;}
.msg-avatar.placeholder{display:flex;align-items:center;justify-content:center;font-family:var(--mono);font-size:10px;font-weight:600;}
.msg-avatar-spacer{width:28px;flex-shrink:0;margin-right:6px;}
#dev-bar{display:none;position:fixed;bottom:0;left:50%;transform:translateX(-50%);width:100%;max-width:430px;background:rgba(10,10,14,.97);border-top:1px solid rgba(255,200,50,.3);padding:10px 16px 24px;align-items:center;justify-content:space-between;z-index:800;backdrop-filter:blur(12px);}
@media (max-width: 768px){#dev-bar,#dev-ep-panel{max-width:100%!important;width:calc(100% - 16px);}}
.dev-label{font-family:var(--mono);font-size:9px;color:rgba(255,200,50,.7);letter-spacing:.15em;}
.dev-btn{background:rgba(255,200,50,.1);border:1px solid rgba(255,200,50,.25);color:rgba(255,200,50,.9);font-size:12px;padding:7px 14px;border-radius:8px;cursor:pointer;font-family:var(--mono);}
.dev-btn:hover{background:rgba(255,200,50,.2);}
.dev-btn.dev-exit{color:rgba(255,100,100,.8);border-color:rgba(255,100,100,.25);background:rgba(255,100,100,.08);}.dev-btn.dev-dl{color:rgba(100,220,130,.9);border-color:rgba(100,220,130,.3);background:rgba(100,220,130,.1);}
#dev-editor{display:none;position:fixed;bottom:76px;left:50%;transform:translateX(-50%);width:calc(100% - 32px);max-width:398px;background:rgba(16,16,22,.98);border:1px solid rgba(255,200,50,.35);border-radius:14px;padding:14px;z-index:900;flex-direction:column;gap:10px;backdrop-filter:blur(16px);box-shadow:0 8px 32px rgba(0,0,0,.7);}
.dev-editor-header{display:flex;align-items:center;justify-content:space-between;}
.dev-editor-who{font-family:var(--mono);font-size:10px;color:rgba(255,200,50,.8);letter-spacing:.1em;text-transform:uppercase;}
.dev-editor-time{font-family:var(--mono);font-size:10px;color:var(--ghost);}
#dev-editor-txt{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:8px;color:var(--fog);font-family:var(--font);font-size:14px;padding:10px 12px;resize:none;outline:none;line-height:1.5;width:100%;}
#dev-editor-txt:focus{border-color:rgba(255,200,50,.45);}
.dev-editor-actions{display:flex;gap:8px;justify-content:flex-end;}
.dev-editor-btn{padding:8px 18px;border-radius:8px;font-family:var(--font);font-size:13px;font-weight:500;cursor:pointer;border:none;}
.dev-editor-btn.cancel{background:rgba(255,255,255,.08);color:var(--smoke);}
.dev-editor-btn.save{background:rgba(255,200,50,.18);color:rgba(255,200,50,.95);border:1px solid rgba(255,200,50,.3);}
.bubble.editing{outline:2px solid rgba(255,200,50,.7)!important;outline-offset:2px;}
#dev-toast{position:fixed;top:84px;left:50%;transform:translateX(-50%);background:rgba(255,200,50,.12);border:1px solid rgba(255,200,50,.3);color:rgba(255,200,50,.9);font-family:var(--mono);font-size:11px;letter-spacing:.08em;padding:5px 16px;border-radius:20px;opacity:0;transition:opacity .4s;z-index:1000;pointer-events:none;white-space:nowrap;}
.dev-btn.dev-info{flex:1;margin:0 6px;font-size:10px;letter-spacing:.05em;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:200px;}
#dev-ep-panel{display:none;position:fixed;bottom:64px;left:50%;transform:translateX(-50%);width:calc(100% - 24px);max-width:406px;background:rgba(16,16,22,.98);border:1px solid rgba(255,200,50,.3);border-radius:14px;padding:12px;z-index:850;backdrop-filter:blur(16px);box-shadow:0 8px 32px rgba(0,0,0,.7);max-height:60vh;overflow-y:auto;}
#dev-ep-panel.open{display:block;}
.dev-ep-header{font-family:var(--mono);font-size:10px;color:rgba(255,200,50,.7);letter-spacing:.15em;text-transform:uppercase;margin-bottom:10px;padding-bottom:8px;border-bottom:1px solid rgba(255,200,50,.15);}
.dev-ep-list{display:flex;flex-direction:column;gap:4px;}
.dev-ep-item{display:flex;align-items:center;gap:10px;padding:8px 10px;border-radius:8px;cursor:pointer;transition:background .15s;font-family:var(--mono);font-size:11px;}
.dev-ep-item:hover:not(.locked){background:rgba(255,200,50,.08);}
.dev-ep-item.locked{opacity:.35;cursor:not-allowed;}
.dev-ep-item.current{background:rgba(255,200,50,.12);border:1px solid rgba(255,200,50,.25);}
.dev-ep-num{color:rgba(255,200,50,.8);font-weight:600;min-width:40px;letter-spacing:.05em;}
.dev-ep-title{flex:1;color:var(--fog);font-family:var(--font);font-size:13px;}
.dev-ep-status{color:var(--ghost);font-size:9px;letter-spacing:.08em;white-space:nowrap;}
.dev-ep-item.current .dev-ep-status{color:rgba(255,200,50,.9);}
    `;
    document.head.appendChild(style);
  }

  // ── START ──
  function start() { _idx=0; _paused=false; _rendered=[]; _state={}; loadSavedEdits(); next(); }

  return { init, start };

})();
