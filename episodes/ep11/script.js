const MESSAGES = [

  // ═══════════════════════════════════════════════════════════
  // SAHNE 1 — Kırık zemin (zoe_dm) — Zoe izole, sadece YOU'ya açık
  // ═══════════════════════════════════════════════════════════
  {"t": "channel", "id": "zoe_dm", "divider": "Zoe · özel sohbet"},
  {"t": "msg", "f": "zoe", "at": "13:00", "txt": "Sana yazmam lazımdı"},
  {"t": "msg", "f": "zoe", "at": "13:00", "txt": "O gece \"kontrol edeceğim\" dedim ya, yapamadım"},
  {"t": "msg", "f": "zoe", "at": "13:01", "txt": "Telefonu yanından ayırmıyor artık, şifreyi de değiştirmiş"},
  {"t": "msg", "f": "zoe", "at": "13:01", "txt": "Sorsam kesin kavga çıkacak, elimde sağlam kanıt da yok"},
  {"t": "msg", "f": "zoe", "at": "13:02", "txt": "Bir yandan da belki ona haksızlık ediyorum, çok üstüne gittim"},
  {"t": "msg", "f": "zoe", "at": "13:02", "txt": "Lena zaten bir garip, sürekli Ethan'ı kötülüyor"},
  {"t": "msg", "f": "zoe", "at": "13:03", "txt": "Sen biraz daha dışarıdan bakıyorsun, o yüzden sana yazıyorum"},
  {"t": "msg", "f": "zoe", "at": "13:03", "txt": "Kafam çok karışık"},

  // ═══════════════════════════════════════════════════════════
  // SAHNE 2 — Sara ilk DM (zoe_dm) — kahve daveti
  // ═══════════════════════════════════════════════════════════
  {"t": "msg", "f": "zoe", "at": "13:10", "txt": "Dur, şu an bir şey oldu"},
  {"t": "msg", "f": "zoe", "at": "13:10", "txt": "Sara bana DM attı, inanamıyorum"},
  {"t": "msg", "f": "zoe", "at": "13:11", "txt": "Bak ne yazmış:"},
  {"t": "msg", "f": "zoe", "at": "13:11", "txt": "\"Selam Zoe 🙂 geçen gün çok güzeldi, tanıştığımıza sevindim\""},
  {"t": "msg", "f": "zoe", "at": "13:11", "txt": "\"Müsait olduğunda bir ara, ikimiz kahve içelim mi?\""},
  {"t": "msg", "f": "zoe", "at": "13:12", "txt": "Çok tatlı ya"},
  {"t": "msg", "f": "zoe", "at": "13:12", "txt": "O kadar da arkasından konuştuk, utandım şimdi"},

  // ─── SEÇİM 1 — you_sara_dm (ipucu yakalama, convergence) ───
  {
    "t": "choice",
    "at": "13:13",
    "options": [
      {"label": "A", "txt": "Fazla samimi ve şeytani", "replies": [
        {"f": "zoe", "at": "13:13", "txt": "Ya sen de mi, herkes şüpheci oldu"}
      ]},
      {"label": "B", "txt": "İyi niyetli duruyor bence", "replies": [
        {"f": "zoe", "at": "13:13", "txt": "Değil mi, ben de öyle hissettim"}
      ]},
      {"label": "C", "txt": "Git ama gözün açık olsun, bilgi al", "replies": [
        {"f": "zoe", "at": "13:13", "txt": "Hı, öyle düşünmemiştim. Olabilir"}
      ]}
    ]
  },

  {"t": "msg", "f": "zoe", "at": "13:14", "txt": "Ne olursa olsun, bir kahve içmekten zarar gelmez"},
  {"t": "msg", "f": "zoe", "at": "13:14", "txt": "Belki de gerçekten yanlış tanıdım onu"},

  // ═══════════════════════════════════════════════════════════
  // SAHNE 3 — Sara'nın hamlesi (zoe_dm, SS'ler) — izleyici tuzağı görür
  // ═══════════════════════════════════════════════════════════

  // ─── SS1: Sara story atıyor (selfie) ───
  {"t": "silence", "x": "ertesi gün"},
  {"t": "msg", "f": "zoe", "at": "18:30", "txt": "Bak Sara ne yapmış"},
  {"t": "msg", "f": "zoe", "at": "18:30", "txt": "Beni story'sine koymuş, ikimizin selfie'si"},
  {"t": "photo", "f": "zoe", "at": "18:31", "url": "../../_assets/episodes/ep11/images/s1e11_a_sara_zoe_story.jpg", "cap": ""},
  {"t": "msg", "f": "zoe", "at": "18:31", "txt": "Bir de etiketlemiş beni"},
  {"t": "msg", "f": "zoe", "at": "18:31", "txt": "\"İyi ki yollarımız kesişti 🤍\" yazmış"},
  {"t": "msg", "f": "zoe", "at": "18:32", "txt": "Nasıl tatlı ya, utandım resmen"},

  {
    "t": "choice",
    "at": "18:32",
    "options": [
      {"label": "A", "txt": "Garip değil mi, daha yeni tanıştınız", "replies": [
        {"f": "zoe", "at": "18:32", "txt": "Off yine mi, story işte"}
      ]},
      {"label": "B", "txt": "Tatlı bir jest", "replies": [
        {"f": "zoe", "at": "18:32", "txt": "Değil mi, değer verdiğini hissettim"}
      ]}
    ]
  },

  // ─── SS2: Sara Lena'yı çekiştiriyor (DM ekran görüntüsü) ───
  {"t": "silence", "x": "ertesi gün"},
  {"t": "msg", "f": "zoe", "at": "16:00", "txt": "Sara yine yazdı, bu sefer biraz tuhaf"},
  {"t": "msg", "f": "zoe", "at": "16:01", "txt": "Bak, SS atıyorum"},
  {"t": "photo", "f": "zoe", "at": "16:01", "url": "../../_assets/episodes/ep11/images/s1e11_a_sara_dm.jpg", "cap": ""},
  {"t": "msg", "f": "zoe", "at": "16:02", "txt": "Lena'yı anlattım mı ki ben, hatırlamıyorum"},
  {"t": "msg", "f": "zoe", "at": "16:02", "txt": "Ama bir yandan da... haksız da değil, bu ara çok yoruldum"},

  {
    "t": "choice",
    "at": "16:03",
    "options": [
      {"label": "A", "txt": "Seni Lena'dan koparmaya çalışıyor, dikkat", "replies": [
        {"f": "zoe", "at": "16:03", "txt": "Ya sen de mi başladın, Lena zaten uzaklaştı"}
      ]},
      {"label": "B", "txt": "Belki haklı, Lena son zamanlarda yorucuydu", "replies": [
        {"f": "zoe", "at": "16:03", "txt": "Dimi, ben de öyle hissediyorum"}
      ]}
    ]
  },

  // ─── SS3: Sara Zoe'yi "okuyor" (DM ekran görüntüsü) — zeki hamle ───
  {"t": "silence", "x": "ertesi gün"},
  {"t": "msg", "f": "zoe", "at": "20:00", "txt": "Sara bir şey yazdı, tuhaf bir şekilde iyi geldi"},
  {"t": "photo", "f": "zoe", "at": "20:00", "url": "../../_assets/episodes/ep11/images/s1e11_a_sara_dm2.jpg", "cap": ""},
  {"t": "msg", "f": "zoe", "at": "20:01", "txt": "Lena'ya bile diyemediğimi nasıl anladı ki bu"},

  {
    "t": "choice",
    "at": "20:02",
    "options": [
      {"label": "A", "txt": "Seni okuyor, zayıf noktanı buldu, dikkat", "replies": [
        {"f": "zoe", "at": "20:02", "txt": "Yok canım, sadece anlıyor beni, iyi ki tanıştım"}
      ]},
      {"label": "B", "txt": "İyi ki biri seni anlıyor", "replies": [
        {"f": "zoe", "at": "20:02", "txt": "Değil mi, içim rahatladı resmen"}
      ]}
    ]
  },

  // ─── CLIFFHANGER (seçim değil — Zoe kendi kararı) ───
  {"t": "msg", "f": "zoe", "at": "20:04", "txt": "Cumartesi kahveye gidiyorum, sabırsızlanıyorum"},
  {"t": "msg", "f": "zoe", "at": "20:04", "txt": "Sara gibi biri az bulunur"},
  {"t": "msg", "f": "zoe", "at": "20:05", "txt": "\"Seni bekliyorum 🤍\" dedi"},

];
