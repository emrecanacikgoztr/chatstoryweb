/**
 * ChatStory — Episode [XX] Config
 * "[EPISODE TITLE]"
 *
 * INSTRUCTIONS:
 * 1. Copy the entire /episodes/ep01/ folder
 * 2. Rename it ep02, ep03 etc.
 * 3. Edit this config.js — change title, accent color, CTA
 * 4. Edit script.js — write your dialogue
 * 5. Drop your media files (images) into this folder
 * 6. Add the episode card to index.html
 */

const CONFIG = {

  // ── EPISODE INFO ──────────────────────────────────────
  episode:   '02',                    // ← change this
  title:     "Episode Title Here",    // ← change this
  accent:    '#7b9ec9',               // ← pick a color for this episode
  tint:      'radial-gradient(ellipse 90% 55% at 50% 0%, rgba(123,158,201,.09), transparent 70%)',

  // ── CHAT HEADER ───────────────────────────────────────
  chatName:      'Zoe 🌙',           // ← who is the chat with
  chatAvatar:    'Z',
  chatAvatarBg:  'rgba(123,158,201,.18)',

  // ── END OF EPISODE ────────────────────────────────────
  ctaLabel:  'Next Episode →',
  ctaSub:    'episode 3 coming soon',
  ctaHref:   '../ep03/index.html',    // ← link to next episode

  // ── CHARACTERS ────────────────────────────────────────
  // Copy from ep01/config.js and add/remove as needed.
  // side: 'left' = received, 'right' = sent (you)
  characters: {

    lena: {
      name:     'Lena',
      initial:  'L',
      side:     'left',
      color:    '#d4845a',
      bgColor:  'rgba(212,132,90,.15)',
      bubbleBg: '#1c1814',
    },

    zoe: {
      name:     'Zoe',
      initial:  'Z',
      side:     'left',
      color:    '#7b9ec9',
      bgColor:  'rgba(123,158,201,.15)',
      bubbleBg: '#131820',
    },

    you: {
      name:     'you',
      initial:  'Y',
      side:     'right',
      color:    '#a0c4a0',
      bgColor:  'rgba(160,196,160,.15)',
      bubbleBg: '#1a2e1a',
    },

    // ← add new characters here if needed
    // jake: {
    //   name:     'Jake',
    //   initial:  'J',
    //   side:     'left',
    //   color:    '#b794f4',
    //   bgColor:  'rgba(183,148,244,.15)',
    //   bubbleBg: '#1a1420',
    // },

  },

  // ── MEDIA FILES ───────────────────────────────────────
  // Document every image used in script.js here.
  // Drop the actual files into this episode folder.
  media: {
    // 'filename.png': 'description of what this image shows',
  },

};
