// Bölüm 6 — "Business Trip"
// S01E06

const MESSAGES = [
  // ═══════════════════════════════════════════════════════════════
  // SAHNE 1 — CUMA (07:00 - 22:00)
  // ═══════════════════════════════════════════════════════════════

  // ─── A1 — Zoe uyandı, Ethan çıkmış ───

  {"t": "msg", "f": "zoe", "at": "07:02", "txt": "Kızlar günaydın"},

  {"t": "msg", "f": "zoe", "at": "07:03", "txt": "Ethan gece gelmiş ama erken çıkmış"},

  {"t": "msg", "f": "lena", "at": "07:04", "txt": "Aaa görüşemediniz mi"},

  {"t": "msg", "f": "zoe", "at": "07:04", "txt": "Uyumuşum, hatırlamıyorum bile"},

  {"t": "msg", "f": "zoe", "at": "07:05", "txt": "Mutfakta kısa not bırakmış sadece"},

  {"t": "msg", "f": "zoe", "at": "07:05", "txt": "\"Sabah erken çıktım, mesajlaşırız canım 🤍\""},

  {"t": "msg", "f": "lena", "at": "07:06", "txt": "Mesajda anlatacakmış demek"},
  {"t": "msg", "f": "lena", "at": "07:06", "txt": "Bekleyelim ne yazacak"},

  {"t": "msg", "f": "zoe", "at": "07:07", "txt": "Dün gece kafamda neler döndü"},
  {"t": "msg", "f": "zoe", "at": "07:07", "txt": "Hiç güzel değildi"},

  {"t": "msg", "f": "zoe", "at": "07:08", "txt": "Bir saniye"},

  {"t": "msg", "f": "zoe", "at": "07:09", "txt": "Şimdi yazdı"},

  {"t": "msg", "f": "zoe", "at": "07:11", "txt": "\"Üzgünüm canım şarjım bitmişti. Sabah 06:00 da uçağım vardı Zürih'e, bahsetmiştim hafta sonu konferansı. Seni uyandırmak istemedim. Pazartesi dönerim, dönünce özel bir şey yapacağız aşkım.\""},

  {"t": "msg", "f": "lena", "at": "07:12", "txt": "Aaa"},

  {"t": "msg", "f": "lena", "at": "07:12", "txt": "Açıkladığı iyi olmuş"},

  {"t": "msg", "f": "lena", "at": "07:13", "txt": "Hem de detaylı"},

  {"t": "msg", "f": "zoe", "at": "07:13", "txt": "Zürih ya, iş seyahati"},

  {"t": "msg", "f": "zoe", "at": "07:14", "txt": "Aklımdan çıkmış"},

  {"t": "msg", "f": "lena", "at": "07:14", "txt": "Şarj bitmesi de açıklıyor cevap atmamasını"},

  {"t": "msg", "f": "zoe", "at": "07:15", "txt": "Rahatladım birden"},

  {"t": "msg", "f": "zoe", "at": "07:15", "txt": "Bütün gece neler düşündüm 🙈"},

  {"t": "msg", "f": "lena", "at": "07:16", "txt": "Zoe biraz dinlen, hadi"},

  {"t": "msg", "f": "zoe", "at": "07:16", "txt": "Uyuyamayacağım, işe hazırlanayım hadi"},

  // ─── A2 — Cuma akşam, Ethan Zürih'te ───

  {"t": "msg", "f": "zoe", "at": "19:42", "txt": "Kızlar işten yeni çıktım", "gap": true},

  {"t": "msg", "f": "zoe", "at": "19:43", "txt": "Ethan'a yazıyorum şu an"},

  {"t": "msg", "f": "zoe", "at": "19:50", "txt": "Cevap geldi, varmış", "gap": true},

  {"t": "msg", "f": "zoe", "at": "19:51", "txt": "\"Hotele girdim, lounge'da bir şeyler yiyorum.\""},

  {"t": "msg", "f": "zoe", "at": "19:51", "txt": "\"Konferans yarın sabah başlıyor.\""},

  {"t": "msg", "f": "lena", "at": "19:52", "txt": "Kısacık yazmış yine 😂"},

  {"t": "msg", "f": "zoe", "at": "19:52", "txt": "Ethan böyledir hep"},

  {"t": "msg", "f": "zoe", "at": "19:53", "txt": "Ama bekle bir şey daha yazdı"},

  {"t": "msg", "f": "zoe", "at": "19:54", "txt": "\"Pazartesi dönerim. Özledim seni.\""},

  {"t": "msg", "f": "lena", "at": "19:55", "txt": "Ay 🥹"},

  {"t": "msg", "f": "lena", "at": "19:55", "txt": "\"Özledim\" demiş"},

  {"t": "msg", "f": "lena", "at": "19:56", "txt": "Suçluluk mu acaba 😂"},

  {"t": "msg", "f": "zoe", "at": "19:57", "txt": "Olabilir ama hoş yine de"},

  {"t": "msg", "f": "zoe", "at": "19:58", "txt": "Bu akşam tek başımayım, yatmadan ona bir şey yazacağım"},

  {"t": "msg", "f": "zoe", "at": "19:59", "txt": "Ne yazsam"},

  // ─── SEÇİM 1 ───

  {
    "t": "choice",
    "prompt": "Yatmadan son mesaj atayım Ethan'a. Ne yazayım?",
    "f": "zoe",
    "options": [
      {
        "label": "A",
        "txt": "İyi geceler aşkım 🤍 yarın konuşuruz yaz",
        "set": {"you_farewell": "warm"},
        "replies": [
          {"f": "zoe", "at": "22:30", "txt": "yazdım"},
          {"f": "lena", "at": "22:31", "txt": "Doğru ton, atmosfer güzel"},
          {"f": "lena", "at": "22:31", "txt": "Bu hafta sonunu rahat geçir hadi"}
        ]
      },
      {
        "label": "B",
        "txt": "Dönünce uzun konuşmamız lazım yaz",
        "set": {"you_farewell": "planted"},
        "replies": [
          {"f": "zoe", "at": "22:30", "txt": "yazdım"},
          {"f": "lena", "at": "22:31", "txt": "Aaa"},
          {"f": "lena", "at": "22:31", "txt": "Tohum ekmişsin"},
          {"f": "zoe", "at": "22:32", "txt": "Haberin olsun"}
        ]
      },
      {
        "label": "C",
        "txt": "Sadece 'iyi geceler' — kısa tut",
        "set": {"you_farewell": "short"},
        "replies": [
          {"f": "zoe", "at": "22:30", "txt": "yazdım"},
          {"f": "lena", "at": "22:31", "txt": "Mesafeli ama medeni"},
          {"f": "zoe", "at": "22:31", "txt": "Daha fazla samimi gelmedi içimden"}
        ]
      }
    ]
  },


  // ═══════════════════════════════════════════════════════════════
  // SAHNE 2 — CUMARTESİ ÖĞLEN (12:00 - 17:00)
  // ═══════════════════════════════════════════════════════════════

  // ─── B1 — Zoe yalnız hafta sonu + Ethan'ın notu ───

  {"t": "msg", "f": "zoe", "at": "12:14", "txt": "Kızlar Ethan olmayınca ev çok sessiz", "gap": true},

  {"t": "msg", "f": "zoe", "at": "12:14", "txt": "Siz napıyorsunuz"},

  {"t": "msg", "f": "lena", "at": "12:15", "txt": "İlk kez mi tek başına kalıyorsun, küçüğüm 😂"},

  {"t": "msg", "f": "zoe", "at": "12:15", "txt": "Aslında sık değil"},

  {"t": "msg", "f": "zoe", "at": "12:16", "txt": "Ama bugün rahat hissediyorum"},

  {"t": "msg", "f": "lena", "at": "12:16", "txt": "😌"},

  {"t": "msg", "f": "zoe", "at": "12:30", "txt": "Aaa", "gap": true},

  {"t": "msg", "f": "zoe", "at": "12:30", "txt": "Çekmecede bir not buldum 🥹"},

  {"t": "msg", "f": "zoe", "at": "12:31", "txt": "Kahvaltı tezgahına bırakmış"},

  {"t": "photo", "at": "12:31", "url": "s1e6_b_zoe_kahvalti_kart.jpg", "cap": ""},

  {"t": "msg", "f": "zoe", "at": "12:32", "txt": "\"Felaketler kadını, lütfen ben dönünceye kadar mutfağı yakma 🤍\""},

  {"t": "msg", "f": "lena", "at": "12:33", "txt": "AAAA"},

  {"t": "msg", "f": "lena", "at": "12:33", "txt": "Çok tatlı ya"},

  {"t": "msg", "f": "zoe", "at": "12:34", "txt": "Sergideki olaya gönderme yapıyor 🙈"},

  {"t": "msg", "f": "lena", "at": "12:34", "txt": "Hahah"},

  {"t": "msg", "f": "zoe", "at": "12:35", "txt": "Sabah söylediğim her şey gerçekti, hoş yine de"},

  // ─── B2 — Lena Alex iyileşmesi ───

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

  // ─── SEÇİM 2 ───

  {
    "t": "choice",
    "prompt": "Çok mu paranoyak yaklaştım sizce?",
    "f": "lena",
    "options": [
      {
        "label": "A",
        "txt": "Daha iyi iletişim kurabilirdin",
        "set": {"you_lena_comm": "better_comm"},
        "replies": [
          {"f": "lena", "at": "14:13", "txt": "Haklısın belki"},
          {"f": "lena", "at": "14:14", "txt": "Direkt sorabilirdim aslında"},
          {"f": "zoe", "at": "14:14", "txt": "Şimdi öğrendin, gelecek için faydalı"},
          {"f": "lena", "at": "14:15", "txt": "Aşırı düşündüm, ders oldu"}
        ]
      },
      {
        "label": "B",
        "txt": "Kafana takma böyle şeyleri, normal",
        "set": {"you_lena_comm": "let_go"},
        "replies": [
          {"f": "lena", "at": "14:13", "txt": "Sağ ol kızım"},
          {"f": "lena", "at": "14:14", "txt": "Yine de kendime kızdım"},
          {"f": "zoe", "at": "14:14", "txt": "Yapma ya, normal endişe"},
          {"f": "lena", "at": "14:15", "txt": "İyi ki sizler varsınız"}
        ]
      }
    ]
  },

  // ─── B2 devam ───

  {"t": "msg", "f": "lena", "at": "14:16", "txt": "Bu akşam buluşacağız"},

  {"t": "msg", "f": "zoe", "at": "14:16", "txt": "AAAA"},

  {"t": "msg", "f": "zoe", "at": "14:17", "txt": "Çok güzel haber kızım"},

  {"t": "msg", "f": "lena", "at": "14:17", "txt": "Ölçülü gideceğim ama umutluyum"},

  {"t": "msg", "f": "zoe", "at": "14:18", "txt": "Sen çok güzelsin canım"},

  {"t": "msg", "f": "lena", "at": "14:18", "txt": "🥹"},

  // ─── B3 — Köprü ───

  {"t": "msg", "f": "zoe", "at": "15:42", "txt": "Ethan'a yazayım hadi", "gap": true},

  {"t": "msg", "f": "zoe", "at": "15:43", "txt": "Konferans nasıl gidiyor diye"},

  {"t": "msg", "f": "zoe", "at": "15:50", "txt": "Kısa cevap geldi", "gap": true},

  {"t": "msg", "f": "zoe", "at": "15:51", "txt": "\"Yoğun geçiyor, program çok dolu\""},

  {"t": "msg", "f": "lena", "at": "15:52", "txt": "Hımm"},

  {"t": "msg", "f": "lena", "at": "15:52", "txt": "Telgraf yine 😅"},

  {"t": "msg", "f": "lena", "at": "15:54", "txt": "Ben hazırlanmaya başlıyorum"},

  {"t": "msg", "f": "lena", "at": "15:54", "txt": "Akşam haberleşiriz"},

  {"t": "msg", "f": "zoe", "at": "15:55", "txt": "Süper geçsin 🤍"},


  // ═══════════════════════════════════════════════════════════════
  // SAHNE 3 — CUMARTESİ GECE (21:00 - 00:00)
  // ═══════════════════════════════════════════════════════════════

  // ─── C1 — Zoe Insta'da ───

  {"t": "msg", "f": "zoe", "at": "21:18", "txt": "Lena nasıl gidiyor Alex'le date?", "gap": true},

  {"t": "msg", "f": "lena", "at": "21:22", "txt": "Şimdilik iyi", "gap": true},

  {"t": "msg", "f": "lena", "at": "21:22", "txt": "Restorandayız"},

  {"t": "msg", "f": "zoe", "at": "21:23", "txt": "Süper"},

  {"t": "msg", "f": "zoe", "at": "21:23", "txt": "Ben evdeyim sıkıldım"},

  {"t": "msg", "f": "zoe", "at": "21:24", "txt": "Insta'da geziniyorum"},

  {"t": "msg", "f": "zoe", "at": "21:25", "txt": "Olivia'nın yeni postunu beğendim, çok tatlı"},

  {"t": "msg", "f": "lena", "at": "21:25", "txt": "Haa Ethan'ın kuzeni Olivia mı"},

  {"t": "msg", "f": "zoe", "at": "21:26", "txt": "Evet, sergide kıskanıp ortalığı dağıttığım kişi 🙈"},

  // ─── C2 — ŞOK 1: Sara story ───

  {"t": "msg", "f": "zoe", "at": "21:38", "txt": "Bekle bir saniye", "gap": true},

  {"t": "msg", "f": "zoe", "at": "21:39", "txt": "Sara'nın profilini açtım"},

  {"t": "msg", "f": "zoe", "at": "21:40", "txt": "Story atmış"},

  {"t": "photo", "at": "21:41", "url": "s1e6_c_sara_story.jpg", "cap": ""},

  {"t": "msg", "f": "zoe", "at": "21:42", "txt": "Bakın"},

  {"t": "msg", "f": "lena", "at": "21:43", "txt": "..."},

  {"t": "msg", "f": "lena", "at": "21:43", "txt": "Bu Zürih değil mi"},

  {"t": "msg", "f": "zoe", "at": "21:44", "txt": "Aynı şehir"},

  {"t": "msg", "f": "zoe", "at": "21:44", "txt": "Tesadüf olabilir mi"},

  {"t": "msg", "f": "lena", "at": "21:45", "txt": "Ne kadar tesadüf olabilir Zoe"},

  {"t": "msg", "f": "zoe", "at": "21:45", "txt": "Biliyorum"},

  {"t": "msg", "f": "zoe", "at": "21:46", "txt": "Ama bir konferansa kaç kişi gidiyor"},

  // ─── C3 — ŞOK 2: Lena Alex'ten bilgi ───

  {"t": "msg", "f": "lena", "at": "21:52", "txt": "Kızlar bekleyin", "gap": true},

  {"t": "msg", "f": "lena", "at": "21:52", "txt": "Alex demin bir şey söyledi"},

  {"t": "msg", "f": "lena", "at": "21:53", "txt": "Dikkatimi çekti şimdi"},

  {"t": "msg", "f": "zoe", "at": "21:53", "txt": "Ne dedi"},

  {"t": "msg", "f": "lena", "at": "21:54", "txt": "Sara hafta sonu konferansa gitmiş"},

  {"t": "msg", "f": "lena", "at": "21:54", "txt": "Ofis dedikodusu olarak söyledi"},

  {"t": "msg", "f": "lena", "at": "21:55", "txt": "Hangi şehir diye sordum"},

  {"t": "msg", "f": "lena", "at": "21:55", "txt": "Zürih dedi"},

  {"t": "msg", "f": "zoe", "at": "21:56", "txt": "..."},

  {"t": "msg", "f": "zoe", "at": "21:56", "txt": "Ethan da Zürih'e konferansa gittiğini söylemişti"},

  {"t": "msg", "f": "zoe", "at": "21:57", "txt": "Olabilir mi gerçekten"},

  {"t": "msg", "f": "lena", "at": "21:58", "txt": "Sıradan dedikodu olarak söyledi"},

  {"t": "msg", "f": "lena", "at": "21:58", "txt": "Ama o gözle bakınca..."},

  {"t": "msg", "f": "zoe", "at": "21:59", "txt": "Lena bekle"},

  {"t": "msg", "f": "zoe", "at": "21:59", "txt": "Bir şey daha kontrol edicem"},

  // ─── C4 — Ethan'ın postu ───

  {"t": "msg", "f": "zoe", "at": "22:02", "txt": "Ethan bana hiç fotoğraf atmadı bugün", "gap": true},

  {"t": "msg", "f": "zoe", "at": "22:03", "txt": "Profilinden bir şey paylaşmamış mı diye baktım"},

  {"t": "msg", "f": "zoe", "at": "22:04", "txt": "Bir story koymuş"},

  {"t": "photo", "at": "22:05", "url": "s1e6_c_ethan_post.jpg", "cap": ""},

  {"t": "msg", "f": "zoe", "at": "22:06", "txt": "Ethan story atmış restoranda"},

  {"t": "msg", "f": "zoe", "at": "22:07", "txt": "Kızlar siz ne diyorsunuz"},

  // ─── SEÇİM 3 — Eli tanıma ───

  {
    "t": "choice",
    "prompt": "Ethan'ın postunu kızlara atıyorsun. Ne diyeceksin?",
    "f": "you",
    "options": [
      {
        "label": "A",
        "txt": "Sağda bir kadın eli var, Sara'nın az önceki story'sindeki ojeyle aynı",
        "set": {"you_hand_recognized": "sara"},
        "replies": [
          {"f": "lena", "at": "22:11", "txt": "Aaa"},
          {"f": "lena", "at": "22:11", "txt": "Doğru ya"},
          {"f": "lena", "at": "22:12", "txt": "Sara'nın az önceki story'sinde aynı oje vardı"},
          {"f": "zoe", "at": "22:12", "txt": "Aynı renk, aynı yer, aynı zaman"},
          {"f": "lena", "at": "22:13", "txt": "😶"}
        ]
      },
      {
        "label": "B",
        "txt": "Yemek güzel görünüyor",
        "set": {"you_hand_recognized": "unsure"},
        "replies": [
          {"f": "lena", "at": "22:12", "txt": "Dur Zoe"},
          {"f": "lena", "at": "22:13", "txt": "Sağdaki ele bak"},
          {"f": "zoe", "at": "22:13", "txt": "Ne"},
          {"f": "lena", "at": "22:14", "txt": "Kadın eli orada"},
          {"f": "lena", "at": "22:14", "txt": "Sara'nın az önceki story'sinde aynı oje vardı"},
          {"f": "zoe", "at": "22:15", "txt": "..."},
          {"f": "zoe", "at": "22:15", "txt": "Aynı renk"},
          {"f": "zoe", "at": "22:16", "txt": "Aynı yer, aynı zaman, aynı oje"},
          {"f": "lena", "at": "22:16", "txt": "😶"}
        ]
      }
    ]
  },

  // ─── SEÇİM 4 — Ethan'a yazsın mı ───

  {
    "t": "choice",
    "prompt": "Kızlar Ethan'a bir şey yazsam mı",
    "f": "zoe",
    "options": [
      {
        "label": "A",
        "txt": "Hiçbir şey yazma, sabaha kadar dinlen",
        "set": {"you_tonight": "silent"},
        "replies": [
          {"f": "zoe", "at": "22:20", "txt": "Tamam yazmıyorum"},
          {"f": "zoe", "at": "22:20", "txt": "Kafam karışık, sabah daha net olur"},
          {"f": "lena", "at": "22:21", "txt": "Doğru, dinlenmen lazım"},
          {"f": "zoe", "at": "22:22", "txt": "Dinlenmek mi"}
        ]
      },
      {
        "label": "B",
        "txt": "Tatlı bir mesaj at, hiçbir şeyi belli etme",
        "set": {"you_tonight": "pretend_normal"},
        "replies": [
          {"f": "zoe", "at": "22:20", "txt": "\"İyi geceler aşkım, çok özledim 🤍\" yazdım"},
          {"f": "zoe", "at": "22:21", "txt": "Söylediklerini sindirip sabaha bırakacağım"},
          {"f": "lena", "at": "22:22", "txt": "Strateji bu olsun"},
          {"f": "zoe", "at": "22:22", "txt": "Belli etmedim hiçbir şeyi"}
        ]
      },
      {
        "label": "C",
        "txt": "Sadece 'iyi geceler' yaz, kısa tut",
        "set": {"you_tonight": "short"},
        "replies": [
          {"f": "zoe", "at": "22:20", "txt": "Sadece \"iyi geceler\" yazdım"},
          {"f": "zoe", "at": "22:21", "txt": "Daha fazlası gelmiyor içimden"},
          {"f": "lena", "at": "22:22", "txt": "Anlaşılır"},
          {"f": "zoe", "at": "22:22", "txt": "Kısa tutmak en doğrusu"}
        ]
      }
    ]
  },

  // ─── C5 — Zoe'nin kararı + Cliffhanger ───

  {"t": "msg", "f": "zoe", "at": "23:14", "txt": "Kızlar", "gap": true},

  {"t": "msg", "f": "zoe", "at": "23:15", "txt": "Yatmadan önce bir şey karar verdim"},

  {"t": "msg", "f": "lena", "at": "23:15", "txt": "Söyle"},

  {"t": "msg", "f": "zoe", "at": "23:16", "txt": "Pazartesi sabah onu havaalanında karşılayacağım"},

  {"t": "msg", "f": "lena", "at": "23:17", "txt": "..."},

  {"t": "msg", "f": "lena", "at": "23:17", "txt": "Karar verdin mi gerçekten"},

  {"t": "msg", "f": "zoe", "at": "23:18", "txt": "Gözlerine bakmam lazım"},

  {"t": "msg", "f": "zoe", "at": "23:19", "txt": "Yüzünden anlarım"},

  {"t": "msg", "f": "lena", "at": "23:19", "txt": "Yanında olmak ister misin"},

  {"t": "msg", "f": "zoe", "at": "23:20", "txt": "Yalnız gitmem lazım"},

  {"t": "msg", "f": "lena", "at": "23:21", "txt": "Tamam"},

  {"t": "msg", "f": "lena", "at": "23:21", "txt": "Ama her an yanındayım"},

  {"t": "msg", "f": "zoe", "at": "23:22", "txt": "Biliyorum 🤍"},

  {"t": "msg", "f": "zoe", "at": "23:23", "txt": "Şimdi uyumaya çalışacağım"},

  {"t": "msg", "f": "zoe", "at": "23:23", "txt": "Sabah görüşürüz"},

  {"t": "msg", "f": "lena", "at": "23:24", "txt": "İyi geceler güzelim"}
];
