/**
 * ChatStory — Episode 14 Config
 * "Biliyordum" — SEZON 1 FİNALİ
 */

const CONFIG = {

  episode:   '14',
  title:     'Biliyordum',
  accent:    '#7b9ec9',
  tint:      'radial-gradient(ellipse 90% 55% at 50% 0%, rgba(123,158,201,.07), transparent 70%)',

  initialChannel: 'group',
  channels: {
    group: {
      name:       'Zoe, Lena & Sen',
      initial:    'G',
      avatarBg:   'rgba(123,158,201,.18)',
      color:      '#7b9ec9',
      bgTint:     'radial-gradient(ellipse 90% 55% at 50% 0%, rgba(123,158,201,.07), transparent 70%)',
    },
    sara_dm: {
      name:       'Sara',
      initial:    'S',
      avatar:     null,
      color:      '#c98fb0',
      bgTint:     'radial-gradient(ellipse 90% 55% at 50% 0%, rgba(201,143,176,.09), transparent 70%)',
    },
  },

  chatName:      'Zoe, Lena & Sen',
  chatAvatar:    'G',
  chatAvatarBg:  'rgba(123,158,201,.18)',

  ctaLabel:  'Sezon 1 tamamlandı',
  ctaSub:    'Are You Sure? · Sezon finali',
  ctaHref:   '../../index.html',

  characters: {

    zoe: {
      name:     'Zoe',
      initial:  'Z',
      side:     'left',
      color:    '#7b9ec9',
      bgColor:  'rgba(123,158,201,.15)',
      bubbleBg: '#131820',
      avatar:   '../../_assets/characters/profile_pics/zoe.jpg',
    },

    lena: {
      name:     'Lena',
      initial:  'L',
      side:     'left',
      color:    '#c9a86a',
      bgColor:  'rgba(201,168,106,.15)',
      bubbleBg: '#1c1814',
      avatar:   '../../_assets/characters/profile_pics/lena.jpg',
    },

    sara: {
      name:     'Sara',
      initial:  'S',
      side:     'left',
      color:    '#c98fb0',
      bgColor:  'rgba(201,143,176,.15)',
      bubbleBg: '#1e1519',
      avatar:   null,
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

  // EP14 asset-free: Ethan mesajları Zoe tarafından aktarılıyor (SS foto yok),
  // Sara sara_dm'de doğrudan yazıyor (foto yok). Görsel gerekmiyor.
  media: {},

};
