/**
 * ChatStory — Episode 03 Config
 * "Sara"
 *
 * This file contains everything about Episode 03 EXCEPT the dialogue.
 * Edit script.js for the story. Edit this file for episode settings,
 * character colors, media files, and CTA text.
 */

const CONFIG = {

  // ── EPISODE INFO ──────────────────────────────────────
  episode:   '03',
  title:     'Sara',
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
  ctaLabel:  '4. bölüme geç',
  ctaSub:    '',
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
    's1e3_c_sara_profile.jpg': 'Sara Insta profil mockup — yoga/wellness vibe, HSC bio',
    's1e3_c_sara_getaway.jpg': 'Sara otel/getaway postu mockup — havuz, weekend reset',
    's1e3_c_sara_outfit.jpg':  'Sara outfit flatlay mockup — quiet luxury vibes',
    's1e3_c_sara_nature.jpg':  'Sara doğa yürüyüşü mockup — deep breaths only',
    's1e3_c_sara_hoodie.jpg':  'Sara mirror selfie + oversized hoodie mockup',
  },

};
