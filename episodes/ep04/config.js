/**
 * ChatStory — Episode 04 Config
 * "Too Sweet"
 */

const CONFIG = {

  episode:   '04',
  title:     'Too Sweet',
  accent:    '#c9a86a',
  tint:      'radial-gradient(ellipse 90% 55% at 50% 0%, rgba(201,168,106,.06), transparent 70%)',

  initialChannel: 'group',
  channels: {
    group: {
      name:       'Zoe, Lena & Sen',
      initial:    'G',
      avatarBg:   'rgba(201,168,106,.18)',
      color:      '#c9a86a',
      bgTint:     'radial-gradient(ellipse 90% 55% at 50% 0%, rgba(201,168,106,.06), transparent 70%)',
    },
    zoe_dm: {
      name:       'Zoe',
      initial:    'Z',
      avatar:     '../../_assets/characters/profile_pics/zoe.jpg',
      color:      '#c9a86a',
      bgTint:     'radial-gradient(ellipse 90% 55% at 50% 0%, rgba(201,168,106,.10), transparent 70%)',
    },
    lena_dm: {
      name:       'Lena',
      initial:    'L',
      avatar:     '../../_assets/characters/profile_pics/lena.jpg',
      color:      '#888888',
      bgTint:     'radial-gradient(ellipse 90% 55% at 50% 0%, rgba(255,255,255,.04), transparent 70%)',
    },
  },

  chatName:      'Zoe, Lena & Sen',
  chatAvatar:    'G',
  chatAvatarBg:  'rgba(201,168,106,.18)',

  ctaLabel:  '5. bölüme geç',
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
    's1e4_a_ethan_message.jpg': 'Ethan\'tan WhatsApp SS — DM conversation',
    's1e4_a_zoe_outfit.jpg':   'Zoe outfit + Ethan arka, mirror full body',
    's1e4_b_ethan_olivia.jpg':  'Sergide Ethan + Olivia gizli çekim',
  },

};
