// Bölüm 5 — "The Photo"
// S01E05

const MESSAGES = [
  // ═══════════════════════════════════════════════════════════════
  // SAHNE 1 — SABAH (07:30 - 09:00)
  // ═══════════════════════════════════════════════════════════════

  // ─── A1 — Ethan gitmiş + utanç sindirimi ───

  {"t": "msg", "f": "lena", "at": "07:32", "txt": "Uyandınız mı kızlar"},

  {"t": "msg", "f": "zoe", "at": "07:45", "txt": "Uyandım", "gap": true},

  {"t": "msg", "f": "zoe", "at": "07:46", "txt": "Ethan çıkmış evden"},

  {"t": "msg", "f": "lena", "at": "07:46", "txt": "Aaa"},

  {"t": "msg", "f": "zoe", "at": "07:47", "txt": "Mesaj bırakmış sadece"},
  {"t": "msg", "f": "zoe", "at": "07:47", "txt": "\"Akşama görüşürüz. Bir kaç şey halletmem lazım.\""},

  {"t": "msg", "f": "lena", "at": "07:48", "txt": "Hmm"},

  {"t": "msg", "f": "zoe", "at": "07:48", "txt": "Soğuk değil mi"},

  {"t": "msg", "f": "lena", "at": "07:49", "txt": "Hafif soğuk evet"},

  {"t": "msg", "f": "zoe", "at": "07:49", "txt": "Dün gece için kızgındır kesin"},

  {"t": "msg", "f": "lena", "at": "07:50", "txt": "Kızgın değil bence"},
  {"t": "msg", "f": "lena", "at": "07:50", "txt": "Ama anlıyorum kafan karışık"},

  {"t": "msg", "f": "zoe", "at": "07:51", "txt": "Lena yerin dibine giriyorum 🙈"},
  {"t": "msg", "f": "zoe", "at": "07:51", "txt": "Sabah uyandım"},
  {"t": "msg", "f": "zoe", "at": "07:52", "txt": "Uyanır uyanmaz Olivia'nın yüzü geldi gözümün önüne"},

  {"t": "msg", "f": "zoe", "at": "07:52", "txt": "İş arkadaşlarıma nasıl bakacağım bugün"},

  {"t": "msg", "f": "zoe", "at": "07:53", "txt": "Garsonun yüzü Lena"},
  {"t": "msg", "f": "zoe", "at": "07:53", "txt": "Garsonun yüzü gözümün önünde hâlâ"},

  {"t": "msg", "f": "lena", "at": "07:54", "txt": "Zoe canım sakin"},

  {"t": "msg", "f": "lena", "at": "07:54", "txt": "Olan oldu, bugün yeni bir gün"},

  {"t": "msg", "f": "zoe", "at": "07:55", "txt": "Yeni gün ama aynı insanlar"},

  {"t": "msg", "f": "lena", "at": "07:55", "txt": "🙈"},

  // ─── SEÇİM 1 ───

  {
    "t": "choice",
    "prompt": "Ethan'a şimdi cevap atayım mı, ne yazayım?",
    "f": "zoe",
    "options": [
      {
        "label": "A",
        "txt": "Yumuşak cevap ver, akşam konuşursunuz",
        "set": {"you_morning_advice": "soothe"},
        "replies": [
          {"f": "zoe", "at": "07:56", "txt": "Haklısın"},
          {"f": "zoe", "at": "07:57", "txt": "\"Akşam görüşürüz aşkım 🤍\" yazdım"},
          {"f": "lena", "at": "07:58", "txt": "Başka bir gerginliğe gerek yok bence"}
        ]
      },
      {
        "label": "B",
        "txt": "Sen de soğuk yaz, ne hak ediyorsa",
        "set": {"you_morning_advice": "mirror"},
        "replies": [
          {"f": "zoe", "at": "07:56", "txt": "Evet ben de soğuk yazayım o zaman"},
          {"f": "zoe", "at": "07:57", "txt": "\"Tamam\" dedim sadece"},
          {"f": "lena", "at": "07:58", "txt": "Sert ama tutarlı"}
        ]
      },
      {
        "label": "C",
        "txt": "Cevap verme, akşamı bekle",
        "set": {"you_morning_advice": "silence"},
        "replies": [
          {"f": "zoe", "at": "07:56", "txt": "Haklısın belki"},
          {"f": "zoe", "at": "07:57", "txt": "Yazmadım, akşamı bekleyeceğim"},
          {"f": "lena", "at": "07:58", "txt": "Bence en iyisi bu, kafalar karışık şu an"}
        ]
      }
    ]
  },

  // ─── A2 — İşe gidiş + Zoe selfie ───

  {"t": "msg", "f": "zoe", "at": "08:32", "txt": "Taksideyim", "gap": true},

  {"t": "msg", "f": "zoe", "at": "08:33", "txt": "Bakın halime"},

  {"t": "photo", "at": "08:33", "url": "s1e5_a_zoe_morning.jpg", "cap": ""},

  {"t": "msg", "f": "lena", "at": "08:34", "txt": "Ya hep güzelsin sen"},

  {"t": "msg", "f": "zoe", "at": "08:34", "txt": "İçim çok kötü ama"},

  {"t": "msg", "f": "lena", "at": "08:35", "txt": "İyileşir, gün yeni başlıyor"},

  {"t": "msg", "f": "zoe", "at": "08:35", "txt": "Umarım"},

  {"t": "msg", "f": "zoe", "at": "08:50", "txt": "Ofise vardım", "gap": true},
  {"t": "msg", "f": "zoe", "at": "08:50", "txt": "Giriyorum içeri 🫠"},


  // ═══════════════════════════════════════════════════════════════
  // SAHNE 2 — OFİS GÜNÜ (10:00 - 17:00)
  // ═══════════════════════════════════════════════════════════════

  // ─── B1 — Ofiste karışık karşılama ───

  {"t": "msg", "f": "zoe", "at": "10:14", "txt": "Kızlar", "gap": true},

  {"t": "msg", "f": "zoe", "at": "10:14", "txt": "Amy \"iyi misin\" dedi yumuşak"},

  {"t": "msg", "f": "zoe", "at": "10:15", "txt": "Chloe yüzüme bile bakmadı"},

  {"t": "msg", "f": "lena", "at": "10:15", "txt": "Hmm"},

  {"t": "msg", "f": "zoe", "at": "10:16", "txt": "Chloe niye böyle bana"},

  {"t": "msg", "f": "zoe", "at": "10:16", "txt": "Kesin sergideki halimden hoşlanmadı"},
  {"t": "msg", "f": "zoe", "at": "10:17", "txt": "Müdüre bişey söylediler mi acaba"},
  {"t": "msg", "f": "zoe", "at": "10:17", "txt": "Amy de belki sahte sıcak davranıyor"},

  {"t": "msg", "f": "lena", "at": "10:18", "txt": "Zoe abartma"},

  {"t": "msg", "f": "lena", "at": "10:18", "txt": "Herkesin işi gücü var"},

  {"t": "msg", "f": "lena", "at": "10:19", "txt": "Başka bir konu vardır"},

  {"t": "msg", "f": "zoe", "at": "10:20", "txt": "Belki haklısın"},

  {"t": "msg", "f": "zoe", "at": "10:20", "txt": "Ama kafamda kötü senaryolar dönüyor"},

  {"t": "msg", "f": "lena", "at": "10:21", "txt": "Nefes al"},

  // ─── B2 — Müşteri toplantısı ───

  {"t": "msg", "f": "zoe", "at": "12:04", "txt": "Müşteri toplantısı bitti", "gap": true},

  {"t": "msg", "f": "zoe", "at": "12:05", "txt": "Müşteri çok sıcak davrandı"},

  {"t": "msg", "f": "zoe", "at": "12:05", "txt": "Ama gözünün içine bakamadım kimsenin"},

  {"t": "msg", "f": "zoe", "at": "12:06", "txt": "Dün gece beni gördüler mi ki bilmiyorum"},
  {"t": "msg", "f": "zoe", "at": "12:06", "txt": "Görse bile demez ama"},
  {"t": "msg", "f": "zoe", "at": "12:07", "txt": "Düşündüğüm şey bu, demese bile düşündüğü"},

  {"t": "msg", "f": "zoe", "at": "12:07", "txt": "Toplantıdan çıkar çıkmaz tuvalete gittim ağladım"},

  {"t": "msg", "f": "lena", "at": "12:08", "txt": "Ya Zoe"},

  {"t": "msg", "f": "lena", "at": "12:08", "txt": "Ne diye \"müşteri beni gördü\" diye düşünüyorsun ki"},

  {"t": "msg", "f": "lena", "at": "12:09", "txt": "İnsanların kendi hayatları var"},
  {"t": "msg", "f": "lena", "at": "12:09", "txt": "Kimsenin seninle ilgilendiği yok şu an"},

  {"t": "msg", "f": "zoe", "at": "12:10", "txt": "Biliyorum mantıksız ama yine de…"},

  {"t": "msg", "f": "lena", "at": "12:10", "txt": "Nefes nefes 🤍"},

  // ─── B3 — Ethan DM ───

  {"t": "msg", "f": "zoe", "at": "13:18", "txt": "Ethan mesaj attı", "gap": true},

  {"t": "photo", "at": "13:18", "url": "s1e5_b_ethan_dm.jpg", "cap": ""},

  {"t": "msg", "f": "lena", "at": "13:19", "txt": "Tatlı mesaj"},

  {"t": "msg", "f": "zoe", "at": "13:19", "txt": "Ne yazayım, bilmiyorum"},

  // ─── SEÇİM 2 ───

  {
    "t": "choice",
    "prompt": "Ne yazayım kızlar?",
    "f": "zoe",
    "options": [
      {
        "label": "A",
        "txt": "İyiyim, akşam konuşuruz",
        "set": {"you_dm_advice": "distant"},
        "replies": [
          {"f": "zoe", "at": "13:21", "txt": "\"İyiyim, akşam konuşuruz\" yazdım"},
          {"f": "lena", "at": "13:22", "txt": "Tamam, mesafeli ama medeni"},
          {"f": "lena", "at": "13:22", "txt": "Doğru ton bu sabah için"}
        ]
      },
      {
        "label": "B",
        "txt": "Sıcak yaz, hava bozma",
        "set": {"you_dm_advice": "warm"},
        "replies": [
          {"f": "zoe", "at": "13:21", "txt": "Sıcak yazdım"},
          {"f": "zoe", "at": "13:22", "txt": "\"Ben de seni özledim 🤍 akşam görüşürüz\""},
          {"f": "lena", "at": "13:22", "txt": "İyi, atmosfer rahatlasın"},
          {"f": "zoe", "at": "13:23", "txt": "Rahatlamadım ama ben"}
        ]
      },
      {
        "label": "C",
        "txt": "Olivia'ya yazmam lazım mı sence",
        "set": {"you_dm_advice": "olivia_pivot"},
        "replies": [
          {"f": "zoe", "at": "13:21", "txt": "\"Olivia'ya yazmam lazım mı sence\" diye sordum"},
          {"f": "lena", "at": "13:22", "txt": "Aaa"},
          {"f": "lena", "at": "13:22", "txt": "Cesurca"},
          {"f": "zoe", "at": "13:23", "txt": "Bir an önce yazmak lazım"},
          {"f": "lena", "at": "13:23", "txt": "Bekleyelim ne diyecek"}
        ]
      }
    ]
  },

  // ─── B4 — Öğle kafede + köpek momenti ───

  {"t": "msg", "f": "zoe", "at": "13:42", "txt": "Yemek almaya geldim kafeye", "gap": true},

  {"t": "msg", "f": "zoe", "at": "13:43", "txt": "Kızlar"},

  {"t": "msg", "f": "zoe", "at": "13:43", "txt": "Yan masada bir köpek var"},

  {"t": "msg", "f": "zoe", "at": "13:44", "txt": "Şimdi bana geldi"},

  {"t": "msg", "f": "zoe", "at": "13:44", "txt": "Kafasını dizime koydu"},

  {"t": "msg", "f": "zoe", "at": "13:45", "txt": "Sahibi koşarak çağırıyor 😂"},

  {"t": "msg", "f": "zoe", "at": "13:45", "txt": "Yeni arkadaşıma bakın"},

  {"t": "photo", "at": "13:46", "url": "s1e5_b_dog.jpg", "cap": ""},

  {"t": "msg", "f": "lena", "at": "13:46", "txt": "Aaaa"},

  {"t": "msg", "f": "lena", "at": "13:47", "txt": "Zoe sen köpekleri sevmezsin ya"},

  {"t": "msg", "f": "zoe", "at": "13:47", "txt": "Normalde korkuyorum"},
  {"t": "msg", "f": "zoe", "at": "13:47", "txt": "Ama bu farklıydı 😂"},

  {"t": "msg", "f": "lena", "at": "13:48", "txt": "Tatlıymış"},

  {"t": "msg", "f": "zoe", "at": "13:48", "txt": "Günümün ilk gülümsemesi"},

  {"t": "msg", "f": "lena", "at": "13:49", "txt": "🥹"},

  // ─── B5 — Lena Alex sıkıntısı ───

  {"t": "msg", "f": "lena", "at": "16:22", "txt": "Kızlar bir şey sorucam", "gap": true},

  {"t": "msg", "f": "zoe", "at": "16:23", "txt": "E?"},

  {"t": "msg", "f": "lena", "at": "16:23", "txt": "Alex bütün gün cevap vermedi"},

  {"t": "msg", "f": "lena", "at": "16:24", "txt": "Sabah merhaba dedim"},
  {"t": "msg", "f": "lena", "at": "16:24", "txt": "Online olmuş gitmiş"},

  {"t": "msg", "f": "lena", "at": "16:25", "txt": "Öğleden sonra mesaj attım"},
  {"t": "msg", "f": "lena", "at": "16:25", "txt": "Okudu cevap yok"},

  {"t": "msg", "f": "zoe", "at": "16:26", "txt": "Hmm"},

  {"t": "msg", "f": "lena", "at": "16:30", "txt": "Şimdi yazdı", "gap": true},

  {"t": "msg", "f": "lena", "at": "16:31", "txt": "\"Kusura bakma çok yoğun geçti, akşam yazarım söz\""},

  {"t": "msg", "f": "zoe", "at": "16:31", "txt": "Özür de dilemiş ama"},

  {"t": "msg", "f": "lena", "at": "16:32", "txt": "\"akşam\" demek biraz açık uçlu"},

  {"t": "msg", "f": "lena", "at": "16:32", "txt": "İlk hafta böyle olmaz değil mi normalde"},

  {"t": "msg", "f": "zoe", "at": "16:33", "txt": "Yoğun olabilir gerçekten"},
  {"t": "msg", "f": "zoe", "at": "16:33", "txt": "Akşamı bekle"},

  {"t": "msg", "f": "lena", "at": "16:34", "txt": "Ölçülü olmaya çalışıyorum"},
  {"t": "msg", "f": "lena", "at": "16:34", "txt": "Ama içim rahat değil"},

  {"t": "msg", "f": "zoe", "at": "16:35", "txt": "Anlıyorum"},
  {"t": "msg", "f": "zoe", "at": "16:35", "txt": "Bekle bir görelim"},


  // ═══════════════════════════════════════════════════════════════
  // SAHNE 3 — AKŞAM PAYLAŞIMLAR (21:00 - 00:00)
  // ═══════════════════════════════════════════════════════════════

  // ─── C1 — Lena Alex mesajlaşma raporu ───

  {"t": "msg", "f": "lena", "at": "21:08", "txt": "Kızlar", "gap": true},

  {"t": "msg", "f": "lena", "at": "21:08", "txt": "Alex şimdi yazdı"},

  {"t": "msg", "f": "zoe", "at": "21:09", "txt": "Ne demiş"},

  {"t": "msg", "f": "lena", "at": "21:09", "txt": "\"İyi misin, bugün çok yoğundum, sen?\""},

  {"t": "msg", "f": "lena", "at": "21:10", "txt": "Böyle kuru cevaplar"},

  {"t": "msg", "f": "lena", "at": "21:11", "txt": "Ne hissedeceğimi bilmiyorum"},

  {"t": "msg", "f": "zoe", "at": "21:11", "txt": "Bekle biraz"},

  {"t": "msg", "f": "zoe", "at": "21:12", "txt": "İlk hafta daha"},

  {"t": "msg", "f": "lena", "at": "21:12", "txt": "Doğru ya"},

  {"t": "msg", "f": "lena", "at": "21:13", "txt": "Ben de \"iyiyim ben de yoğundum\" yazayım"},

  {"t": "msg", "f": "zoe", "at": "21:13", "txt": "Evet aynısıyla cevap ver"},

  // ─── C2 — Zoe story buldu ───

  {"t": "msg", "f": "zoe", "at": "21:32", "txt": "Bir saniye", "gap": true},

  {"t": "msg", "f": "zoe", "at": "21:33", "txt": "Malik story atmış"},

  {"t": "msg", "f": "lena", "at": "21:33", "txt": "Malik ??"},

  {"t": "msg", "f": "zoe", "at": "21:34", "txt": "Ethan'ın yakın arkadaşı"},

  {"t": "msg", "f": "zoe", "at": "21:34", "txt": "Geçen yılbaşı tanışmıştık ben de takip ediyorum"},

  {"t": "msg", "f": "zoe", "at": "21:35", "txt": "HSC Bank'ta beraberler"},

  {"t": "photo", "at": "21:35", "url": "s1e5_c_malik_story.jpg", "cap": ""},

  {"t": "msg", "f": "lena", "at": "21:36", "txt": "..."},

  {"t": "msg", "f": "lena", "at": "21:36", "txt": "Dur"},

  {"t": "msg", "f": "lena", "at": "21:36", "txt": "O etiketteki Sara mı"},

  {"t": "msg", "f": "lena", "at": "21:37", "txt": "Alex'in bahsettiği Sara"},

  {"t": "msg", "f": "zoe", "at": "21:37", "txt": "..."},

  {"t": "msg", "f": "zoe", "at": "21:38", "txt": "Evet"},

  {"t": "msg", "f": "lena", "at": "21:38", "txt": "Ee Malik'le arkadaşsa Ethan'la da arkadaştır"},

  {"t": "msg", "f": "zoe", "at": "21:39", "txt": "Evet"},

  {"t": "msg", "f": "zoe", "at": "21:39", "txt": "Ethan bana Sara'dan hiç bahsetmedi"},

  {"t": "msg", "f": "zoe", "at": "21:40", "txt": "Ama zaten bir sürü arkadaşı var"},

  {"t": "msg", "f": "lena", "at": "21:40", "txt": "Hmm"},

  // ─── SEÇİM 3 ───

  {
    "t": "choice",
    "prompt": "Ethan da tanıyor olabilir mi sence?",
    "f": "lena",
    "options": [
      {
        "label": "A",
        "txt": "Tesadüf, Ethan'ın iş çevresi geniş",
        "set": {"you_story_read": "rational"},
        "replies": [
          {"f": "lena", "at": "21:41", "txt": "Olabilir"},
          {"f": "lena", "at": "21:41", "txt": "Bankada yüzlerce kişi var"},
          {"f": "zoe", "at": "21:42", "txt": "Aynen"},
          {"f": "zoe", "at": "21:42", "txt": "Aynı kattalar mı belli değil bile"}
        ]
      },
      {
        "label": "B",
        "txt": "Sara'yı bir gün anlat Ethan'a, ne diyecek bak",
        "set": {"you_story_read": "test"},
        "replies": [
          {"f": "lena", "at": "21:41", "txt": "Ay zekice"},
          {"f": "lena", "at": "21:42", "txt": "Ethan'a soralım ama belli etmeden"},
          {"f": "zoe", "at": "21:42", "txt": "Ben sormam ama"},
          {"f": "zoe", "at": "21:43", "txt": "Konu kendiliğinden gelirse bakarız tepkisine"}
        ]
      }
    ]
  },

  // ─── C3 — Lena beğeni paterni ───

  {"t": "msg", "f": "lena", "at": "21:52", "txt": "Bir şey daha söyleyeyim", "gap": true},

  {"t": "msg", "f": "zoe", "at": "21:53", "txt": "Eee"},

  {"t": "msg", "f": "lena", "at": "21:53", "txt": "Ethan'ı fake hesabımdan ekleyeli birkaç ay oldu"},

  {"t": "msg", "f": "zoe", "at": "21:54", "txt": "Ne"},

  {"t": "msg", "f": "lena", "at": "21:54", "txt": "Söylemedim çünkü gereksiz olur sandım"},

  {"t": "msg", "f": "lena", "at": "21:55", "txt": "Ama bugün baktım"},

  {"t": "msg", "f": "lena", "at": "21:55", "txt": "Sara son 2 haftada Ethan'ın 3 paylaşımına beğeni atmış"},

  {"t": "msg", "f": "zoe", "at": "21:56", "txt": "Hmm"},

  {"t": "msg", "f": "zoe", "at": "21:57", "txt": "Yani tanışıyorlar"},

  {"t": "msg", "f": "zoe", "at": "21:57", "txt": "Muhtemelen iş çevresi etkileşimi"},

  {"t": "msg", "f": "zoe", "at": "21:58", "txt": "Belki yeni tanıştılar"},
  {"t": "msg", "f": "zoe", "at": "21:58", "txt": "Ondan beğeni atmaya başladı"},

  {"t": "msg", "f": "lena", "at": "21:59", "txt": "Olabilir"},

  {"t": "msg", "f": "lena", "at": "21:59", "txt": "Ama bir tuhaflık var dipte"},

  // ─── SEÇİM 4 ───

  {
    "t": "choice",
    "prompt": "Çok mu büyütüyorum, sinirlendiniz mi söylemediğim için?",
    "f": "lena",
    "options": [
      {
        "label": "A",
        "txt": "Bence çok büyütüyorsun bunu Lena",
        "set": {"you_lena_react": "dismiss"},
        "replies": [
          {"f": "lena", "at": "22:00", "txt": "Hmm"},
          {"f": "lena", "at": "22:00", "txt": "Tamam abartmayayım o zaman"},
          {"f": "zoe", "at": "22:01", "txt": "Lena ya Sara'ya çok takılıyorsun bence"},
          {"f": "lena", "at": "22:01", "txt": "Belki haklısın"},
          {"f": "lena", "at": "22:02", "txt": "Kendi konum belirsiz, başka tarafa bakıyorum"}
        ]
      },
      {
        "label": "B",
        "txt": "Bekleyelim, Ethan'la konuşunca anlarız",
        "set": {"you_lena_react": "wait"},
        "replies": [
          {"f": "lena", "at": "22:00", "txt": "Tamam"},
          {"f": "lena", "at": "22:00", "txt": "Ethan'la konuşmadan yorumlamayalım"},
          {"f": "zoe", "at": "22:01", "txt": "Evet"},
          {"f": "zoe", "at": "22:01", "txt": "Bu hafta sonu bir fırsat çıkar"},
          {"f": "lena", "at": "22:02", "txt": "Sakin tutalım"}
        ]
      }
    ]
  },

  // ─── C4 — Zoe Ethan'a mesaj kararı ───

  {"t": "msg", "f": "zoe", "at": "22:48", "txt": "Ethan'a yazsam saçma mı", "gap": true},

  {"t": "msg", "f": "zoe", "at": "22:49", "txt": "Direkt soramam, çok cesaretli olur"},

  {"t": "msg", "f": "zoe", "at": "22:49", "txt": "Yan yoldan bir şey sorabilirim"},

  {"t": "msg", "f": "lena", "at": "22:50", "txt": "Ne sorarsın"},

  {"t": "msg", "f": "zoe", "at": "22:50", "txt": "Kararsızım kızlar"},

  // ─── SEÇİM 5 + C5 Cliffhanger ───

  {
    "t": "choice",
    "prompt": "Ne sorayım?",
    "f": "zoe",
    "options": [
      {
        "label": "A",
        "txt": "Malik'le çalışıyor musun bu sıralar",
        "set": {"you_ethan_question": "sideways"},
        "replies": [
          {"f": "zoe", "at": "22:51", "txt": "Tamam Malik'le çalışıyor musun diye yazdım"},
          {"f": "zoe", "at": "22:55", "txt": "Okudu", "gap": true},
          {"f": "zoe", "at": "22:55", "txt": "Cevap yok"},
          {"f": "zoe", "at": "23:12", "txt": "Hâlâ cevap yok", "gap": true},
          {"f": "zoe", "at": "23:48", "txt": "Saat 23:48 hâlâ cevap yok", "gap": true},
          {"f": "lena", "at": "23:48", "txt": "Uyumuş olabilir"},
          {"f": "zoe", "at": "23:49", "txt": "..."}
        ]
      },
      {
        "label": "B",
        "txt": "Bugün gördüğüm bir şey aklıma takıldı...",
        "set": {"you_ethan_question": "vague"},
        "replies": [
          {"f": "zoe", "at": "22:51", "txt": "Muğlak yazdım"},
          {"f": "zoe", "at": "22:51", "txt": "\"Bugün gördüğüm bir şey aklıma takıldı, akşam konuşalım\" dedim"},
          {"f": "zoe", "at": "22:58", "txt": "Okudu", "gap": true},
          {"f": "zoe", "at": "22:58", "txt": "Cevap yok"},
          {"f": "zoe", "at": "23:20", "txt": "Hâlâ cevap yok", "gap": true},
          {"f": "zoe", "at": "23:48", "txt": "Saat 23:48 hâlâ cevap yok", "gap": true},
          {"f": "lena", "at": "23:48", "txt": "Ne diyecek bilmiyor olabilir"},
          {"f": "zoe", "at": "23:49", "txt": "..."}
        ]
      },
      {
        "label": "C",
        "txt": "Yazma, akşam yüz yüze konuş",
        "set": {"you_ethan_question": "wait"},
        "replies": [
          {"f": "zoe", "at": "22:51", "txt": "Yazmıyorum bugün"},
          {"f": "zoe", "at": "22:51", "txt": "Akşamı bekleyeceğim"},
          {"f": "zoe", "at": "23:30", "txt": "Ethan eve geldi mi diye baktım", "gap": true},
          {"f": "zoe", "at": "23:30", "txt": "Gelmemiş hâlâ"},
          {"f": "lena", "at": "23:48", "txt": "Bu da ilginç", "gap": true},
          {"f": "zoe", "at": "23:48", "txt": "..."}
        ]
      }
    ]
  }
];
