const MESSAGES = [

  {"t": "msg", "f": "zoe", "at": "07:02", "txt": "Kızlar günaydın"},
  {"t": "msg", "f": "zoe", "at": "07:03", "txt": "Ethan gece geç geldi, sabah Zürih uçuşu için erken çıkmış"},
  {"t": "msg", "f": "lena", "at": "07:04", "txt": "Aaa görüşemediniz mi"},
  {"t": "msg", "f": "zoe", "at": "07:04", "txt": "Uyumuşum, hatırlamıyorum bile"},
  {"t": "msg", "f": "zoe", "at": "07:05", "txt": "Mutfakta kısa not bırakmış sadece"},
  {"t": "msg", "f": "zoe", "at": "07:05", "txt": "\"Sabah erken çıktım, mesajlaşırız canım 🤍\""},
  {"t": "msg", "f": "lena", "at": "07:06", "txt": "Off soramadın mı Sara'yı"},
  {"t": "msg", "f": "lena", "at": "07:06", "txt": "Çok merak ediyorum."},
  {"t": "msg", "f": "zoe", "at": "07:07", "txt": "Yok canım çıkmış erkenden, fırsatım olmadı."},
  {"t": "msg", "f": "zoe", "at": "07:07", "txt": "Dün gece ne kabuslar gördüm. Hiç güzel değildi"},
  {"t": "msg", "f": "zoe", "at": "07:08", "txt": "Bir saniye"},
  {"t": "msg", "f": "zoe", "at": "07:09", "txt": "Şimdi yazdı"},
  {"t": "msg", "f": "zoe", "at": "07:11", "txt": "\"Üzgünüm canım şarjım bitmişti. Sabah 07:00 de uçağım vardı Zürih'e, bahsetmiştim hafta sonu konferansı. Seni uyandırmak istemedim. Pazartesi dönerim, dönünce özel bir şey yapacağız aşkım.\""},
  {"t": "msg", "f": "lena", "at": "07:12", "txt": "Aaa"},
  {"t": "msg", "f": "lena", "at": "07:12", "txt": "Hadi bakalım"},
  {"t": "msg", "f": "zoe", "at": "07:13", "txt": "Konferansı biliyordum zaten"},
  {"t": "msg", "f": "zoe", "at": "07:14", "txt": "Sadece gece hiç ses çıkmamasına biraz sinir oldum."},
  {"t": "msg", "f": "lena", "at": "07:14", "txt": "Şarjı bitmiş"},
  {"t": "msg", "f": "zoe", "at": "07:15", "txt": "Evet ya neyse"},
  {"t": "msg", "f": "zoe", "at": "07:15", "txt": "Bütün gece neler düşündüm 🙈"},
  {"t": "msg", "f": "lena", "at": "07:16", "txt": "Zoe biraz dinlen, hadi"},
  {"t": "msg", "f": "zoe", "at": "07:16", "txt": "Uyuyamayacağım, işe hazırlanayım bari"},
  {"t": "msg", "f": "zoe", "at": "19:42", "txt": "Kızlar işten yeni çıktım", "gap": true},
  {"t": "msg", "f": "zoe", "at": "19:43", "txt": "Ethan'a yazıyorum şu an"},
  {"t": "msg", "f": "zoe", "at": "19:50", "txt": "Cevap geldi:", "gap": true},
  {"t": "msg", "f": "zoe", "at": "19:51", "txt": "\"Hotele girdim, lounge'da bir şeyler yiyorum.\""},
  {"t": "msg", "f": "zoe", "at": "19:51", "txt": "\"Konferans yarın sabah başlıyor.\""},
  {"t": "msg", "f": "lena", "at": "19:52", "txt": "Kısacık yazmış yine 😂"},
  {"t": "msg", "f": "zoe", "at": "19:52", "txt": "Ethan böyledir hep"},
  {"t": "msg", "f": "zoe", "at": "19:53", "txt": "Ama bekle bir şey daha yazdı"},
  {"t": "msg", "f": "zoe", "at": "19:54", "txt": "\"Özledim seni.\""},
  {"t": "msg", "f": "lena", "at": "19:55", "txt": "Ay 🥹"},
  {"t": "msg", "f": "lena", "at": "19:55", "txt": "\"Özledim\" demiş"},
  {"t": "msg", "f": "lena", "at": "19:56", "txt": "Suçluluk mu acaba 😂"},
  {"t": "msg", "f": "zoe", "at": "19:57", "txt": "Olabilir ama hoş yine de"},
  {"t": "msg", "f": "zoe", "at": "19:58", "txt": "Bu akşam tek başımayım, yatmadan ona bir şey yazacağım"},
  {"t": "msg", "f": "zoe", "at": "19:59", "txt": "Ne yazsam"},
  {
    "t": "choice",
    "at": "22:29",
    "options": [
      {
        "label": "A",
        "txt": "İyi geceler aşkım 🤍 yarın konuşuruz yaz",
        "replies": [
          {"f": "zoe", "at": "22:30", "txt": "yazdım"},
          {"f": "lena", "at": "22:31", "txt": "Doğru ton, atmosfer güzel"},
          {"f": "lena", "at": "22:31", "txt": "Bu hafta sonunu rahat geçir hadi"}
        ]
      },
      {
        "label": "B",
        "txt": "Dönünce uzun konuşmamız lazım yaz",
        "replies": [
          {"f": "zoe", "at": "22:30", "txt": "yazdım"},
          {"f": "lena", "at": "22:31", "txt": "Aaa"},
          {"f": "lena", "at": "22:31", "txt": "Ortalık kızıştı"},
          {"f": "zoe", "at": "22:32", "txt": "Haberi olsun"}
        ]
      },
      {
        "label": "C",
        "txt": "Sadece 'iyi geceler' — kısa tut",
        "replies": [
          {"f": "zoe", "at": "22:30", "txt": "yazdım"},
          {"f": "lena", "at": "22:31", "txt": "Mesafeli"},
          {"f": "zoe", "at": "22:31", "txt": "Daha fazla samimi gelmedi içimden"}
        ]
      }
    ]
  },

  {"t": "msg", "f": "zoe", "at": "12:14", "txt": "Kızlar Ethan olmayınca ev çok sessiz", "gap": true},
  {"t": "msg", "f": "zoe", "at": "12:14", "txt": "Siz napıyorsunuz"},
  {"t": "msg", "f": "lena", "at": "12:15", "txt": "İlk kez mi tek başına kalıyorsun, küçüğüm 😂"},
  {"t": "msg", "f": "zoe", "at": "12:15", "txt": "Aslında sık değil"},
  {"t": "msg", "f": "zoe", "at": "12:16", "txt": "Ama bugün bir garip geldi"},
  {"t": "msg", "f": "lena", "at": "12:16", "txt": "😌"},
  {"t": "msg", "f": "zoe", "at": "12:30", "txt": "Aaa", "gap": true},
  {"t": "msg", "f": "zoe", "at": "12:30", "txt": "Mutfak çekmecesinde bir not buldum 🥹"},
  {"t": "photo", "f": "zoe", "at": "12:31", "url": "../../_assets/episodes/ep06/images/s1e6_b_zoe_kahvalti_kart.jpg"},
  {"t": "msg", "f": "zoe", "at": "12:32", "txt": "\"Felaketler kadını, lütfen ben dönünceye kadar mutfağı yakma 🤍\""},
  {"t": "msg", "f": "lena", "at": "12:33", "txt": "AAAA"},
  {"t": "msg", "f": "lena", "at": "12:33", "txt": "Çok tatlı ya"},
  {"t": "msg", "f": "zoe", "at": "12:34", "txt": "Sergideki olaya gönderme yapıyor 🙈"},
  {"t": "msg", "f": "lena", "at": "12:34", "txt": "Hahah"},
  {"t": "msg", "f": "zoe", "at": "12:35", "txt": "Sabah söylediğim her şey gerçekti, hoş yine de"},
  {"t": "msg", "f": "lena", "at": "14:08", "txt": "Kızlar", "gap": true},
  {"t": "msg", "f": "lena", "at": "14:08", "txt": "Alex'le konuştum"},
  {"t": "msg", "f": "zoe", "at": "14:09", "txt": "Aaa anlat"},
  {"t": "msg", "f": "lena", "at": "14:09", "txt": "Dün gerçekten yoğunmuş"},
  {"t": "msg", "f": "lena", "at": "14:10", "txt": "Bir kız arkadaşının çocuğu olmuş"},
  {"t": "msg", "f": "lena", "at": "14:10", "txt": "Hastaneye gitmişler beraber"},
  {"t": "msg", "f": "zoe", "at": "14:11", "txt": "Ay"},
  {"t": "msg", "f": "lena", "at": "14:11", "txt": "Ben yanlış anladım resmen"},
  {"t": "msg", "f": "lena", "at": "14:12", "txt": "Sürekli Sara'ya kafayı taktığım için"},
  {"t": "msg", "f": "lena", "at": "14:12", "txt": "Aklımdan her türlü senaryo geçti"},
  {
    "t": "choice",
    "at": "14:13",
    "options": [
      {
        "label": "A",
        "txt": "Alexin hatası, arada yazabilirdi",
        "replies": [
          {"f": "lena", "at": "14:13", "txt": "Evet ya"},
          {"f": "lena", "at": "14:14", "txt": "Ama çok tatlıydı konuşurken"},
          {"f": "zoe", "at": "14:14", "txt": "Lena yaa"}
        ]
      },
      {
        "label": "B",
        "txt": "Takma böyle şeyleri, çok normal",
        "replies": [
          {"f": "lena", "at": "14:13", "txt": "Sağ ol kızım"},
          {"f": "lena", "at": "14:14", "txt": "Yine de kendime kızdım"},
          {"f": "zoe", "at": "14:14", "txt": "Yapma ya, normal endişe"},
          {"f": "lena", "at": "14:15", "txt": "İyi ki sizler varsınız"}
        ]
      }
    ]
  },

  {"t": "msg", "f": "lena", "at": "14:16", "txt": "Bu akşam buluşacağız"},
  {"t": "msg", "f": "zoe", "at": "14:16", "txt": "AAAA"},
  {"t": "msg", "f": "zoe", "at": "14:17", "txt": "Çok heyecanlı, hadi bakalım haberleri bekliyoruz."},
  {"t": "msg", "f": "lena", "at": "14:17", "txt": "Aynen dateden canlı yayın yapıcam :)"},
  {"t": "msg", "f": "zoe", "at": "14:18", "txt": "Hahaha çok tatlısın"},
  {"t": "msg", "f": "lena", "at": "14:18", "txt": "🥹"},
  {"t": "msg", "f": "zoe", "at": "15:42", "txt": "Ethan'a yazıyorum tekrar", "gap": true},
  {"t": "msg", "f": "zoe", "at": "15:43", "txt": "Konferans nasıl gidiyor diye"},
  {"t": "msg", "f": "zoe", "at": "15:50", "txt": "Yine kısacık"},
  {"t": "msg", "f": "zoe", "at": "15:51", "txt": "\"Yoğun geçiyor, program çok dolu\""},
  {"t": "msg", "f": "lena", "at": "15:52", "txt": "Hımm"},
  {"t": "msg", "f": "lena", "at": "15:52", "txt": "Yine çok uzun yazmış"},
  {"t": "msg", "f": "lena", "at": "15:54", "txt": "Ben hazırlanmaya başlıyorum"},
  {"t": "msg", "f": "lena", "at": "15:54", "txt": "Akşam haberleşiriz"},
  {"t": "msg", "f": "zoe", "at": "15:55", "txt": "Süper geçsin 🤍"},
  {"t": "msg", "f": "zoe", "at": "21:18", "txt": "Lena nasıl gidiyor Alex'le date?", "gap": true},
  {"t": "msg", "f": "lena", "at": "21:22", "txt": "Şimdilik iyi", "gap": true},
  {"t": "msg", "f": "lena", "at": "21:22", "txt": "Restorandayız"},
  {"t": "msg", "f": "zoe", "at": "21:23", "txt": "Süper"},
  {"t": "msg", "f": "zoe", "at": "21:23", "txt": "Ben evdeyim sıkıldım"},
  {"t": "msg", "f": "zoe", "at": "21:26", "txt": "Insta'da geziniyorum"},
  {"t": "msg", "f": "zoe", "at": "21:25", "txt": "Olivia ile ekleştik"},
  {"t": "msg", "f": "lena", "at": "21:25", "txt": "Haa Ethan'ın kuzeni Olivia mı"},
  {"t": "msg", "f": "zoe", "at": "21:26", "txt": "Evet, sergide kıskanıp ortalığı dağıttığım kişi 🙈"},
  {"t": "msg", "f": "lena", "at": "21:38", "txt": "Bekle bir saniye", "gap": true},
  {"t": "msg", "f": "lena", "at": "21:39", "txt": "Sara'nın profilini açtım"},
  {"t": "msg", "f": "lena", "at": "21:40", "txt": "Story atmış"},
  {"t": "photo", "f": "lena", "at": "21:41", "url": "../../_assets/episodes/ep06/images/s1e6_c_sara_story.jpg"},
  {"t": "msg", "f": "lena", "at": "21:42", "txt": "Bakın"},
  {"t": "msg", "f": "lena", "at": "21:43", "txt": "..."},
  {"t": "msg", "f": "lena", "at": "21:43", "txt": "Bu Zürih değil mi"},
  {"t": "msg", "f": "zoe", "at": "21:44", "txt": "Evet"},
  {"t": "msg", "f": "zoe", "at": "21:44", "txt": "Tesadüf olabilir"},
  {"t": "msg", "f": "lena", "at": "21:45", "txt": "Ne kadar tesadüf olabilir Zoe"},
  {"t": "msg", "f": "zoe", "at": "21:45", "txt": "Biliyorum"},
  {"t": "msg", "f": "zoe", "at": "21:46", "txt": "Aynı konferansta olabilirler"},
  {"t": "msg", "f": "lena", "at": "21:52", "txt": "Kızlar bekleyin", "gap": true},
  {"t": "msg", "f": "lena", "at": "21:52", "txt": "Alex demin bir şey söyledi"},
  {"t": "msg", "f": "lena", "at": "21:53", "txt": "Dikkatimi çekti şimdi"},
  {"t": "msg", "f": "zoe", "at": "21:53", "txt": "Ne dedi"},
  {"t": "msg", "f": "lena", "at": "21:54", "txt": "Sara hafta sonu konferansa gitmiş"},
  {"t": "msg", "f": "lena", "at": "21:54", "txt": "Dedikodu olarak söyledi"},
  {"t": "msg", "f": "lena", "at": "21:55", "txt": "Hangi şehir diye sordum"},
  {"t": "msg", "f": "lena", "at": "21:55", "txt": "Zürih dedi"},
  {"t": "msg", "f": "zoe", "at": "21:56", "txt": "..."},
  {"t": "msg", "f": "zoe", "at": "21:56", "txt": "Ethan da Zürih'e konferansa gittiğini söylemişti"},
  {"t": "msg", "f": "zoe", "at": "21:57", "txt": "Olabilir mi gerçekten"},
  {"t": "msg", "f": "lena", "at": "21:58", "txt": "Sıradan dedikodu olarak söyledi"},
  {"t": "msg", "f": "lena", "at": "21:58", "txt": "Ama o gözle bakınca..."},
  {"t": "msg", "f": "zoe", "at": "21:59", "txt": "Lena bekle"},
  {"t": "msg", "f": "zoe", "at": "21:59", "txt": "Bir şey daha kontrol edicem"},
  {"t": "msg", "f": "zoe", "at": "22:02", "txt": "Ethan bana hiç fotoğraf atmadı bugün", "gap": true},
  {"t": "msg", "f": "zoe", "at": "22:03", "txt": "Profilinden bir şey paylaşmamış mı diye baktım"},
  {"t": "msg", "f": "zoe", "at": "22:04", "txt": "Bir story koymuş"},
  {"t": "photo", "f": "zoe", "at": "22:05", "url": "../../_assets/episodes/ep06/images/s1e6_c_ethan_post.jpg"},
  {
    "t": "choice",
    "at": "22:06",
    "options": [
      {
        "label": "A",
        "txt": "Sağda bir kadın eli var, Sara'nın az önceki story'sindeki ojeyle aynı",
        "replies": [
          {"f": "lena", "at": "22:06", "txt": "Aaa"},
          {"f": "lena", "at": "22:06", "txt": "Doğru ya"},
          {"f": "lena", "at": "22:07", "txt": "Sara'nın az önceki story'sinde aynı oje vardı"},
          {"f": "zoe", "at": "22:07", "txt": "Aynı renk, aynı yer, aynı zaman"},
          {"f": "lena", "at": "22:08", "txt": "😶"}
        ]
      },
      {
        "label": "B",
        "txt": "Yemek güzel görünüyor",
        "replies": [
          {"f": "lena", "at": "22:06", "txt": "Dur Zoe"},
          {"f": "lena", "at": "22:07", "txt": "Sağdaki ele bak"},
          {"f": "zoe", "at": "22:07", "txt": "Ne"},
          {"f": "lena", "at": "22:08", "txt": "Kadın eli orada"},
          {"f": "lena", "at": "22:08", "txt": "Sara'nın az önceki story'sinde aynı oje vardı"},
          {"f": "zoe", "at": "22:09", "txt": "..."},
          {"f": "zoe", "at": "22:09", "txt": "Aynı renk, aynı yer, aynı zaman"},
          {"f": "lena", "at": "22:10", "txt": "😶"}
        ]
      }
    ]
  },

  {"t": "msg", "f": "zoe", "at": "22:12", "txt": "Bu arada Ethan'a demin iyi geceler yazdım", "gap": true},
  {"t": "msg", "f": "zoe", "at": "22:12", "txt": "\"Bitkinim aşkım, yatıyorum artık 🤍\" dedi"},
  {"t": "msg", "f": "lena", "at": "22:13", "txt": "Hımm"},
  {"t": "msg", "f": "lena", "at": "22:14", "txt": "Kızlar Alex tuvalete gitti, kaçamak telefona baktım", "gap": true},
  {"t": "msg", "f": "lena", "at": "22:14", "txt": "Sara demin bir story daha atmış, atıyorum bakın"},
  {"t": "photo", "f": "lena", "at": "22:14", "url": "../../_assets/episodes/ep06/images/s1e6_c_sara_dinner.jpg"},
  {
    "t": "choice",
    "at": "22:14",
    "options": [
      {
        "label": "A",
        "txt": "Bu Ethan! Kıyafeti birebir aynı",
        "replies": [
          {"f": "lena", "at": "22:15", "txt": "Dur dur, yüzü görünmüyor ki"},
          {"f": "lena", "at": "22:15", "txt": "Benzeyebilir, başka biri de olabilir"},
          {"f": "zoe", "at": "22:16", "txt": "News"},
          {"f": "zoe", "at": "22:16", "txt": "Ya oysa, off. hem bana yatıyorum dedi"},
          {"f": "lena", "at": "22:16", "txt": "😶"}
        ]
      },
      {
        "label": "B",
        "txt": "Yine yapmacık bir influencer",
        "replies": [
          {"f": "lena", "at": "22:15", "txt": "Zoe dur, karşıdaki adama bak"},
          {"f": "lena", "at": "22:15", "txt": "Şu kıyafet, Ethan'ın az önceki story'sindekine benzemiyor mu"},
          {"f": "zoe", "at": "22:16", "txt": "Diyemeyiz"},
          {"f": "zoe", "at": "22:16", "txt": "Ama hem bu kıyafet, hem bana daha demin"},
          {"f": "zoe", "at": "22:16", "txt": "..."},
          {"f": "zoe", "at": "22:16", "txt": "Benziyor. Yüz yok ama, emin olamıyorum"},
          {"f": "zoe", "at": "22:17", "txt": "Hem bana daha demin yatıyorum demişti"}
        ]
      }
    ]
  },

  {"t": "msg", "f": "zoe", "at": "22:17", "txt": "Durun bir dakika"},
  {"t": "msg", "f": "zoe", "at": "22:17", "txt": "Hepsini yan yana koyayım"},
  {"t": "msg", "f": "zoe", "at": "22:18", "txt": "Ethan Zürih'te, Sara da Zürih'te"},
  {"t": "msg", "f": "lena", "at": "22:18", "txt": "Alex aynı konferans demişti"},
  {"t": "msg", "f": "zoe", "at": "22:19", "txt": "Bir de şu oje, Sara'nın story'siyle birebir"},
  {"t": "msg", "f": "zoe", "at": "22:19", "txt": "Ve bana daha demin yatıyorum demişti, restorandaymış"},
  {"t": "msg", "f": "lena", "at": "22:19", "txt": "Aynı şehir, aynı konferans, aynı oje, bir de o yalan"},
  {"t": "msg", "f": "zoe", "at": "22:20", "txt": "Hepsi aynı yeri gösteriyor"},
  {"t": "msg", "f": "zoe", "at": "22:20", "txt": "Ama hâlâ hiçbiri kesin değil"},
  {"t": "msg", "f": "lena", "at": "22:21", "txt": "Değil. Ama bu sefer hepsi üst üste bindi"},
  {"t": "msg", "f": "zoe", "at": "22:21", "txt": "..."},
  {
    "t": "choice",
    "at": "22:22",
    "options": [
      {
        "label": "A",
        "txt": "Tatlı bir mesaj at, hiçbir şeyi belli etme",
        "replies": [
          {"f": "zoe", "at": "22:23", "txt": "\"İyi geceler aşkım, çok özledim 🤍\" yazdım"},
          {"f": "zoe", "at": "22:24", "txt": "Belli etmedim hiçbir şeyi"},
          {"f": "lena", "at": "22:24", "txt": "Akıllıca, kartlarını gösterme"}
        ]
      },
      {
        "label": "B",
        "txt": "Hiçbir şey yazma",
        "replies": [
          {"f": "zoe", "at": "22:23", "txt": "Yazmadım"},
          {"f": "zoe", "at": "22:24", "txt": "Şu an doğru kelimeyi bulamam zaten"},
          {"f": "lena", "at": "22:24", "txt": "Olur, sustuğun da bir cevap"}
        ]
      },
      {
        "label": "C",
        "txt": "Sadece 'iyi geceler' yaz",
        "replies": [
          {"f": "zoe", "at": "22:23", "txt": "Sadece \"iyi geceler\" yazdım"},
          {"f": "zoe", "at": "22:24", "txt": "Fazlası gelmedi içimden"},
          {"f": "lena", "at": "22:24", "txt": "Anlaşılır"}
        ]
      }
    ]
  },

  {"t": "msg", "f": "zoe", "at": "23:40", "txt": "Kızlar gözüme uyku girmiyor", "gap": true},
  {"t": "msg", "f": "zoe", "at": "23:41", "txt": "Ethan pazartesi öğlen dönüyor"},
  {"t": "msg", "f": "zoe", "at": "23:41", "txt": "Burada oturup \"hoş geldin aşkım\" diyemem"},
  {"t": "msg", "f": "lena", "at": "23:42", "txt": "Ne yapmak istiyorsun"},
  {
    "t": "choice",
    "at": "23:42",
    "options": [
      {
        "label": "A",
        "txt": "Havaalanına git, iner inmez karşısında ol",
        "replies": [
          {"f": "zoe", "at": "23:43", "txt": "Havaalanı..."},
          {"f": "zoe", "at": "23:43", "txt": "Hiç aklıma gelmemişti ama evet"},
          {"f": "zoe", "at": "23:44", "txt": "İner inmez yüzünü görürüm, gözlerinden anlarım"},
          {"f": "lena", "at": "23:44", "txt": "Emin misin, beklemiyor olacak"},
          {"f": "zoe", "at": "23:45", "txt": "Eminim. Pazartesi oradayım"}
        ]
      },
      {
        "label": "B",
        "txt": "Evde bekle, döndüğünde yüzüne bak",
        "replies": [
          {"f": "zoe", "at": "23:43", "txt": "Belki..."},
          {"f": "zoe", "at": "23:44", "txt": "Ama evde beklemek beni bitirir"},
          {"f": "lena", "at": "23:44", "txt": "Peki ne yapacaksın"},
          {"f": "zoe", "at": "23:45", "txt": "Aklıma bir şey geldi şimdi... havaalanı"},
          {"f": "zoe", "at": "23:45", "txt": "İner inmez orada olurum, yüzünü görürüm"}
        ]
      },
      {
        "label": "C",
        "txt": "Mesajla sor, 'yalnız mıydın' de",
        "replies": [
          {"f": "zoe", "at": "23:43", "txt": "Hayır, mesajdan olmaz"},
          {"f": "zoe", "at": "23:44", "txt": "Yazsam savuşturur, yüzünü görmem lazım"},
          {"f": "lena", "at": "23:44", "txt": "O zaman onu nerede bekleyeceksin"},
          {"f": "zoe", "at": "23:45", "txt": "Havaalanında. İner inmez orada olacağım"}
        ]
      }
    ]
  },

  {"t": "msg", "f": "lena", "at": "23:46", "txt": "Tamam o zaman, kararını verdin"},
  {"t": "msg", "f": "lena", "at": "23:46", "txt": "Sabah ilk iş bana yaz, dakika dakika"},
  {"t": "msg", "f": "zoe", "at": "23:47", "txt": "Yazarım 🤍"},
  {"t": "msg", "f": "zoe", "at": "23:47", "txt": "Şimdi uyumaya çalışayım, yarın büyük gün"},
  {"t": "msg", "f": "lena", "at": "23:48", "txt": "İyi geceler güzelim, güçlüsün"},

];