/**
 * ChatStory — Episode 02 Config
 * "Date"
 *
 * This file contains everything about Episode 02 EXCEPT the dialogue.
 * Edit script.js for the story. Edit this file for episode settings,
 * character colors, media files, and CTA text.
 */

const CONFIG = {

  // ── EPISODE INFO ──────────────────────────────────────
  episode:   '02',
  title:     'Date',
  accent:    '#d4845a',
  tint:      'radial-gradient(ellipse 90% 55% at 50% 0%, rgba(212,132,90,.06), transparent 70%)',

  // ── CHANNELS ──────────────────────────────────────────
  initialChannel: 'group',
  channels: {
    group: {
      name:       'Zoe, Lena & Sen',
      initial:    'G',
      avatarBg:   'rgba(212,132,90,.18)',
      color:      '#d4845a',
      bgTint:     'radial-gradient(ellipse 90% 55% at 50% 0%, rgba(212,132,90,.06), transparent 70%)',
    },
    zoe_dm: {
      name:       'Zoe',
      initial:    'Z',
      avatar:     'zoe.jpg',
      color:      '#d4845a',
      bgTint:     'radial-gradient(ellipse 90% 55% at 50% 0%, rgba(212,132,90,.10), transparent 70%)',
    },
    lena_dm: {
      name:       'Lena',
      initial:    'L',
      avatar:     'lena.jpg',
      color:      '#888888',
      bgTint:     'radial-gradient(ellipse 90% 55% at 50% 0%, rgba(255,255,255,.04), transparent 70%)',
    },
  },

  // Legacy (channels yoksa yedek)
  chatName:      'Zoe, Lena & Sen',
  chatAvatar:    'G',
  chatAvatarBg:  'rgba(212,132,90,.18)',

  // ── END OF EPISODE ────────────────────────────────────
  ctaLabel:  'Back to Episodes →',
  ctaSub:    'episode 3 coming soon',
  ctaHref:   '../../index.html',

  // ── CHARACTERS ────────────────────────────────────────
  characters: {

    lena: {
      name:     'Lena',
      initial:  'L',
      side:     'left',
      color:    '#d4845a',
      bgColor:  'rgba(212,132,90,.15)',
      bubbleBg: '#1c1814',
      avatar:   'lena.jpg',
    },

    zoe: {
      name:     'Zoe',
      initial:  'Z',
      side:     'left',
      color:    '#7b9ec9',
      bgColor:  'rgba(123,158,201,.15)',
      bubbleBg: '#131820',
      avatar:   'zoe.jpg',
    },

    you: {
      name:     'sen',
      initial:  'S',
      side:     'right',
      color:    '#a0c4a0',
      bgColor:  'rgba(160,196,160,.15)',
      bubbleBg: '#1a2e1a',
      avatar:   null,
    },

  },

  // ── MEDIA FILES ───────────────────────────────────────
  media: {
    'lena_mirror.jpg': 'Lena iki elbise arasında, ayna selfie',
    'lena_final.jpg':  'Lena hazır, çıkmadan önce son hali',
    'zoe_window.jpg':  'Zoe pencere kenarı, kanepe + battaniye',
    // Opsiyonel (ayakkabı seçim fotoları, daha sonra):
    // 'lena_shoes_flat.jpg':   'Rahat ayakkabı seçeneği',
    // 'lena_shoes_heels.jpg':  'Topuklu seçeneği',
  },

};
