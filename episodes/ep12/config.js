/**
 * ChatStory — Episode 12 Config
 * "Coffee"
 */

const CONFIG = {

  episode:   '12',
  title:     'Coffee',
  accent:    '#a08fc9',
  tint:      'radial-gradient(ellipse 90% 55% at 50% 0%, rgba(160,143,201,.06), transparent 70%)',

  initialChannel: 'zoe_dm',
  channels: {
    group: {
      name:       'Zoe, Lena & Sen',
      initial:    'G',
      avatarBg:   'rgba(160,143,201,.18)',
      color:      '#a08fc9',
      bgTint:     'radial-gradient(ellipse 90% 55% at 50% 0%, rgba(160,143,201,.06), transparent 70%)',
    },
    zoe_dm: {
      name:       'Zoe',
      initial:    'Z',
      avatar:     '../../_assets/characters/profile_pics/zoe.jpg',
      color:      '#7b9ec9',
      bgTint:     'radial-gradient(ellipse 90% 55% at 50% 0%, rgba(123,158,201,.10), transparent 70%)',
    },
    lena_dm: {
      name:       'Lena',
      initial:    'L',
      avatar:     '../../_assets/characters/profile_pics/lena.jpg',
      color:      '#888888',
      bgTint:     'radial-gradient(ellipse 90% 55% at 50% 0%, rgba(255,255,255,.04), transparent 70%)',
    },
  },

  chatName:      'Zoe',
  chatAvatar:    'Z',
  chatAvatarBg:  'rgba(123,158,201,.18)',

  ctaLabel:  '13. bölüme geç',
  ctaSub:    '',
  ctaHref:   '../../index.html',

  characters: {

    lena: {
      name:     'Lena',
      initial:  'L',
      side:     'left',
      color:    '#c9a86a',
      bgColor:  'rgba(201,168,106,.15)',
      bubbleBg: '#1c1814',
      avatar:   '../../_assets/characters/profile_pics/lena.jpg',
    },

    zoe: {
      name:     'Zoe',
      initial:  'Z',
      side:     'left',
      color:    '#7b9ec9',
      bgColor:  'rgba(123,158,201,.15)',
      bubbleBg: '#131820',
      avatar:   '../../_assets/characters/profile_pics/zoe.jpg',
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

  media: {
    's1e12_deneme_rahat.jpg':   'Mini-game deneme — Zoe rahat/casual kahve kıyafeti (ayna selfie)',
    's1e12_deneme_iddiali.jpg': 'Mini-game deneme — Zoe iddialı ama günlük kıyafet',
    's1e12_deneme_sik.jpg':     'Mini-game deneme — Zoe şık-sade kıyafet',
    's1e12_selfie_rahat.jpg':   'Buluşma selfie (dinamik) — Zoe rahat kıyafet + Sara',
    's1e12_selfie_iddiali.jpg': 'Buluşma selfie (dinamik) — Zoe iddialı kıyafet + Sara',
    's1e12_selfie_sik.jpg':     'Buluşma selfie (dinamik) — Zoe şık kıyafet + Sara',
  },

};
