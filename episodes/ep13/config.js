/**
 * ChatStory — Episode 13 Config
 * "Ethan Çok Tatlı"
 */

const CONFIG = {

  episode:   '13',
  title:     'Ethan Çok Tatlı',
  accent:    '#c96a6a',
  tint:      'radial-gradient(ellipse 90% 55% at 50% 0%, rgba(201,106,106,.07), transparent 70%)',

  initialChannel: 'lena_dm',
  channels: {
    lena_dm: {
      name:       'Lena',
      initial:    'L',
      avatar:     '../../_assets/characters/profile_pics/lena.jpg',
      color:      '#c9a86a',
      bgTint:     'radial-gradient(ellipse 90% 55% at 50% 0%, rgba(201,168,106,.08), transparent 70%)',
    },
    blof_grup: {
      name:       'Lena, Sen & Sara',
      initial:    'G',
      avatarBg:   'rgba(201,106,106,.18)',
      color:      '#c96a6a',
      bgTint:     'radial-gradient(ellipse 90% 55% at 50% 0%, rgba(201,106,106,.07), transparent 70%)',
    },
    group: {
      name:       'Zoe, Lena & Sen',
      initial:    'G',
      avatarBg:   'rgba(123,158,201,.18)',
      color:      '#7b9ec9',
      bgTint:     'radial-gradient(ellipse 90% 55% at 50% 0%, rgba(123,158,201,.06), transparent 70%)',
    },
  },

  chatName:      'Lena',
  chatAvatar:    'L',
  chatAvatarBg:  'rgba(201,168,106,.18)',

  ctaLabel:  '14. bölüme geç',
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

  media: {
    's1e13_sara_mesaj_ss.jpg':  'Sara\'nın Zoe\'ye attığı nefret mesajları — chat SS mockup (Pillow overlay). İçerik: "Siz nasıl insanlarsınız / O lanet arkadaşların bana grup kurup saldırdı / Lena ve yanındaki, hepiniz iğrenç insanlarsınız / Beni Ethan\'la kullandığınızı söylediler, çok komik / İşte senin sadık Ethan\'ın / Evet oldu, bir kez de değil / O beni istedi, seni değil / Şu iğrenç arkadaşlarını da çek üzerimden". Zoe grupta forward ediyor.',
    's1e13_sara_ethan_ayna.jpg': 'Ethan & Sara İNTİM ayna selfie — sarılmışlar / Ethan arkadan sarıyor gibi yakın temas, romantik-samimi an (gece, iç mekan, Ethan\'ın evi). Açık ilişki kanıtı (artık deniable değil — net yakınlık). Sara "kanıt" olarak Zoe\'ye atmış, Zoe forward ediyor. EP14 S1\'de Ethan bu fotoyu "çok eski" diye geçiştirmeye çalışıyor. NOT: Ethan referans yüzü sabitlendikten sonra üretilecek (bkz TODO). A3.1: yazı yok, saf foto.',
  },

};
