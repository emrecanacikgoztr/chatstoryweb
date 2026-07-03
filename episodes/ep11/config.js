/**
 * ChatStory — Episode 11 Config
 * "Sara's DM"
 */

const CONFIG = {

  episode:   '11',
  title:     'Sara\'s DM',
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

  ctaLabel:  '12. bölüme geç',
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
    's1e11_a_sara_zoe_story.jpg': 'Sara IG story — Sara+Zoe selfie (Sara net) + "İyi ki yollarımız kesişti 🤍" caption',
    's1e11_a_sara_dm.jpg':        'Sara↔Zoe DM SS — günaydın dokusu + Lena çekiştirme (izolasyon)',
    's1e11_a_sara_dm2.jpg':       'Sara↔Zoe DM SS — Zoe\'yi "okuyan" zeki empati mesajı',
  },

};
