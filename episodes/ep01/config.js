/**
 * ChatStory — Episode 01 Config
 * "He's Just Busy"
 *
 * This file contains everything about Episode 01 EXCEPT the dialogue.
 * Edit script.js for the story. Edit this file for episode settings,
 * character colors, media files, and CTA text.
 */

const CONFIG = {

  // ── EPISODE INFO ──────────────────────────────────────
  episode:   '01',
  title:     "He's Just Busy",
  accent:    '#d4845a',
  tint:      'radial-gradient(ellipse 90% 55% at 50% 0%, rgba(212,132,90,.09), transparent 70%)',

  // ── CHANNELS ──────────────────────────────────────────
  // Hangi sohbet ekranında olduğumuzu tanımlar.
  // Script içinde {t:'channel', id:'zoe_dm'} ile değiştirilebilir.
  initialChannel: 'group',
  channels: {
    group: {
      name:       'Zoe, Lena & Sen',
      initial:    'G',
      avatarBg:   'rgba(212,132,90,.18)',
      color:      '#d4845a',
      headerTint: 'rgba(28,24,20,.6)',
      bgTint:     'radial-gradient(ellipse 90% 55% at 50% 0%, rgba(212,132,90,.09), transparent 70%)',
    },
    zoe_dm: {
      name:       'Zoe',
      initial:    'Z',
      avatar:     'zoe.jpg',
      color:      '#7b9ec9',
      headerTint: 'rgba(123,158,201,.18)',
      bgTint:     'radial-gradient(ellipse 90% 55% at 50% 0%, rgba(123,158,201,.14), transparent 70%)',
    },
    lena_dm: {
      name:       'Lena',
      initial:    'L',
      avatar:     'lena.jpg',
      color:      '#d4845a',
      headerTint: 'rgba(212,132,90,.18)',
      bgTint:     'radial-gradient(ellipse 90% 55% at 50% 0%, rgba(212,132,90,.12), transparent 70%)',
    },
  },

  // Legacy (channels yoksa yedek)
  chatName:      'Zoe, Lena & Sen',
  chatAvatar:    'G',
  chatAvatarBg:  'rgba(212,132,90,.18)',

  // ── END OF EPISODE ────────────────────────────────────
  ctaLabel:  'Back to Episodes →',
  ctaSub:    'episode 2 coming soon',
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
    'twocups.jpg':  'Marc\'ın masası — iki fincan + ruj izi',
    'alex.jpg':     'Lena\'nın gönderdiği Alex fotoğrafı',
    'sunset.jpg':   '(kullanılmıyor — ileride)',
    'lena_gym.jpg': 'Lena spor sonrası selfie (eklenecek)',
    'zoe_cozy.jpg': 'Zoe evde yorgan altı, elinde çay (eklenecek)',
  },

};
