const MESSAGES = [

  // ═══════════════════════════════════════════════════════════
  // SAHNE 1 — Yüzleşme hazırlığı (grup, Perşembe sabah)
  // ═══════════════════════════════════════════════════════════
  {"t": "msg", "f": "zoe", "at": "10:30", "txt": "Kızlar bugün konuşuyorum Ethan'la"},
  {"t": "msg", "f": "zoe", "at": "10:30", "txt": "Dün dediğim gibi, bugün soracağım"},
  {"t": "msg", "f": "zoe", "at": "10:31", "txt": "Akşam evdeyiz, planı yok"},
  {"t": "msg", "f": "zoe", "at": "10:31", "txt": "Kafamda yüz kere kurdum bu konuşmayı"},

  // ─── TOLD-KOLU (showIf you_lena_told='told') ───
  {"t": "msg", "f": "lena", "at": "10:32", "txt": "Dur Zoe, gitmeden şunu gör", "showIf": [{"key": "you_lena_told", "value": "told"}]},
  {"t": "msg", "f": "lena", "at": "10:32", "txt": "Çok arada kaldım paylaşmak konusunda ama...", "showIf": [{"key": "you_lena_told", "value": "told"}]},
  {"t": "photo", "f": "lena", "at": "10:32", "url": "../../_assets/episodes/ep08/images/s1e8_a_sara_story.jpg", "cap": "", "showIf": [{"key": "you_lena_told", "value": "told"}]},
  {"t": "msg", "f": "lena", "at": "10:33", "txt": "Sara bunu atmış, on dakika sonra silmiş", "showIf": [{"key": "you_lena_told", "value": "told"}]},
  {"t": "msg", "f": "zoe", "at": "10:33", "txt": "...", "showIf": [{"key": "you_lena_told", "value": "told"}]},
  {"t": "msg", "f": "zoe", "at": "10:34", "txt": "Bu ne, anlamadım ben", "showIf": [{"key": "you_lena_told", "value": "told"}]},
  {"t": "msg", "f": "lena", "at": "10:34", "txt": "Şu yazıya bak, \"kolundakinin anlamını bilmiyor\"", "showIf": [{"key": "you_lena_told", "value": "told"}]},
  {"t": "msg", "f": "lena", "at": "10:34", "txt": "Bir de koluna", "showIf": [{"key": "you_lena_told", "value": "told"}]},
  {"t": "msg", "f": "zoe", "at": "10:35", "txt": "...", "showIf": [{"key": "you_lena_told", "value": "told"}]},
  {"t": "msg", "f": "zoe", "at": "10:35", "txt": "Aaa", "showIf": [{"key": "you_lena_told", "value": "told"}]},
  {"t": "msg", "f": "zoe", "at": "10:35", "txt": "Yani bana mı laf atıyor bu kadın", "showIf": [{"key": "you_lena_told", "value": "told"}]},
  {"t": "msg", "f": "lena", "at": "10:36", "txt": "Aynı model, rengi farklı sadece", "showIf": [{"key": "you_lena_told", "value": "told"}]},
  {"t": "msg", "f": "zoe", "at": "10:36", "txt": "Ethan ikimize de mi aldı yani", "showIf": [{"key": "you_lena_told", "value": "told"}]},
  {"t": "msg", "f": "zoe", "at": "10:36", "txt": "Kafam almıyor ya", "showIf": [{"key": "you_lena_told", "value": "told"}]},
  {"t": "msg", "f": "zoe", "at": "10:37", "txt": "Dur bir saniye", "showIf": [{"key": "you_lena_told", "value": "told"}]},
  {"t": "msg", "f": "zoe", "at": "10:37", "txt": "Sen bunu ne zaman gördün", "showIf": [{"key": "you_lena_told", "value": "told"}]},
  {"t": "msg", "f": "lena", "at": "10:37", "txt": "Dün gece", "showIf": [{"key": "you_lena_told", "value": "told"}]},
  {"t": "msg", "f": "zoe", "at": "10:38", "txt": "Dün gece mi", "showIf": [{"key": "you_lena_told", "value": "told"}]},
  {"t": "msg", "f": "zoe", "at": "10:38", "txt": "Niye bana söylemedin Lena", "showIf": [{"key": "you_lena_told", "value": "told"}]},
  {"t": "msg", "f": "lena", "at": "10:38", "txt": "Uzun zamandır ilk kez mutluydun", "showIf": [{"key": "you_lena_told", "value": "told"}]},
  {"t": "msg", "f": "lena", "at": "10:39", "txt": "Seni üzmek istemedim", "showIf": [{"key": "you_lena_told", "value": "told"}]},

  // ─── TOLD-ÖZEL SEÇİM (showIf told) — Lena'ya tepki ───
  {
    "t": "choice",
    "at": "10:39",
    "showIf": [{"key": "you_lena_told", "value": "told"}],
    "options": [
      {
        "label": "A",
        "txt": "Lena seni korumak istedi, kızma",
        "replies": [
          {"f": "zoe",  "at": "10:39", "txt": "Haklısın, çok pardon"},
          {"f": "lena", "at": "10:39", "txt": "Önemli değil canım"}
        ]
      },
      {
        "label": "B",
        "txt": "Dün arada kaldık, emin olamadık",
        "replies": [
          {"f": "zoe",  "at": "10:39", "txt": "Ama yine de söylemeliydin"},
          {"f": "lena", "at": "10:39", "txt": "Biliyorum... özür dilerim"}
        ]
      }
    ]
  },
  {"t": "msg", "f": "zoe", "at": "10:40", "txt": "Neyse, şimdi bunu da soracağım Ethan'a", "showIf": [{"key": "you_lena_told", "value": "told"}]},
  {"t": "msg", "f": "lena", "at": "10:40", "txt": "Yanındayım", "showIf": [{"key": "you_lena_told", "value": "told"}]},

  // ─── ORTAK DEVAM ───
  {"t": "msg", "f": "lena", "at": "10:41", "txt": "Ne diyeceğini düşündün mü peki"},
  {"t": "msg", "f": "zoe", "at": "10:41", "txt": "İşte orada takıldım ya"},

  // ─── SEÇİM 1 — Sorgu stratejisi (ortak) ───
  {
    "t": "choice",
    "at": "10:42",
    "options": [
      {
        "label": "A",
        "txt": "Direkt sor, hepsini yüzüne vur",
        "replies": [
          {"f": "zoe",  "at": "10:42", "txt": "Tamam, dolandırmadan soracağım"},
          {"f": "lena", "at": "10:43", "txt": "Cesur. Ama tepkisini izle"}
        ]
      },
      {
        "label": "B",
        "txt": "Yumuşak başla, tepkisini ölç",
        "replies": [
          {"f": "zoe",  "at": "10:42", "txt": "Savunmaya geçmesin diye"},
          {"f": "lena", "at": "10:43", "txt": "Akıllıca, soğukkanlı kal"}
        ]
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════
  // SAHNE 2 — Yüzleşme (grup, Perşembe gece) — şok kuralı: seçim yok
  // ═══════════════════════════════════════════════════════════
  {"t": "msg", "f": "zoe", "at": "22:30", "txt": "Kızlar", "gap": true},
  {"t": "msg", "f": "zoe", "at": "22:30", "txt": "Konuştum Ethan'la"},
  {"t": "msg", "f": "zoe", "at": "22:31", "txt": "Anlatıyorum, bekleyin"},
  {"t": "msg", "f": "zoe", "at": "22:31", "txt": "Önce Sara'yı sordum"},
  {"t": "msg", "f": "zoe", "at": "22:32", "txt": "Hiç bozulmadı, \"iş arkadaşım, Malik'le çıkıyor zaten\" dedi"},
  {"t": "msg", "f": "zoe", "at": "22:32", "txt": "Sesi sordum, \"iş yerindeydim, herkes oradaydı\" dedi"},
  {"t": "msg", "f": "zoe", "at": "22:33", "txt": "Zürih'i sordum, \"konferans, yüzlerce kişiydik\" dedi"},
  {"t": "msg", "f": "zoe", "at": "22:33", "txt": "Her şeye bir cevabı vardı"},

  // TOLD bileklik de sorulur (showIf told)
  {"t": "msg", "f": "zoe", "at": "22:34", "txt": "Bir de bilekliği sordum", "showIf": [{"key": "you_lena_told", "value": "told"}]},
  {"t": "msg", "f": "zoe", "at": "22:34", "txt": "\"O marka herkeste var, tesadüf\" dedi", "showIf": [{"key": "you_lena_told", "value": "told"}]},
  {"t": "msg", "f": "zoe", "at": "22:34", "txt": "\"Sen bunları nereden çıkarıyorsun\" dedi", "showIf": [{"key": "you_lena_told", "value": "told"}]},

  // ORTAK — Ethan üste çıkar
  {"t": "msg", "f": "zoe", "at": "22:35", "txt": "Sonra bana döndü"},
  {"t": "msg", "f": "zoe", "at": "22:35", "txt": "\"Neden bana güvenmiyorsun\" dedi"},
  {"t": "msg", "f": "zoe", "at": "22:35", "txt": "Sesi yükselmedi bile, çok sakin"},
  {"t": "msg", "f": "zoe", "at": "22:36", "txt": "Sonra suçu bana attı resmen"},
  {"t": "msg", "f": "zoe", "at": "22:36", "txt": "Ama bağırarak değil, çok sakin"},

  // İZOLASYON — told (Lena'yı spesifik hedef)
  {"t": "msg", "f": "zoe", "at": "22:37", "txt": "\"Bu bileklik şeyini sana Lena mı söyledi\" dedi", "showIf": [{"key": "you_lena_told", "value": "told"}]},
  {"t": "msg", "f": "zoe", "at": "22:37", "txt": "\"O kız seni bana karşı dolduruyor\"", "showIf": [{"key": "you_lena_told", "value": "told"}]},
  {"t": "msg", "f": "zoe", "at": "22:37", "txt": "\"Mutluluğunu çekemiyor, görmüyor musun\"", "showIf": [{"key": "you_lena_told", "value": "told"}]},
  // İZOLASYON — silent (genel suçlama)
  {"t": "msg", "f": "zoe", "at": "22:37", "txt": "\"Kafanı kim dolduruyor böyle\" dedi", "skipIf": [{"key": "you_lena_told", "value": "told"}]},
  {"t": "msg", "f": "zoe", "at": "22:37", "txt": "\"O arkadaş grubun seni benden soğutuyor\"", "skipIf": [{"key": "you_lena_told", "value": "told"}]},

  // ORTAK — özür (Ethan affetmiyor, Zoe yalvarır)
  {"t": "msg", "f": "zoe", "at": "22:38", "txt": "Ve ben \"haklısın, özür dilerim\" dedim"},
  {"t": "msg", "f": "zoe", "at": "22:38", "txt": "Ama hiç yumuşamadı"},
  {"t": "msg", "f": "zoe", "at": "22:39", "txt": "Çok sinirliydi, onu öyle hiç görmemiştim"},
  {"t": "msg", "f": "zoe", "at": "22:39", "txt": "Ne desem yatışmadı"},
  {"t": "msg", "f": "zoe", "at": "22:40", "txt": "Az daha bana küsüyordu"},
  {"t": "msg", "f": "zoe", "at": "22:40", "txt": "Hâlâ buz gibi soğuk"},
  {"t": "msg", "f": "zoe", "at": "22:41", "txt": "Şimdi ben onu affettirmeye uğraşıyorum"},
  {"t": "msg", "f": "zoe", "at": "22:41", "txt": "Ethan'ı kaybetmekten çok korkuyorum"},
  {"t": "msg", "f": "zoe", "at": "22:42", "txt": "Çok kötüyüm ya, anlatamıyorum"},
  {"t": "msg", "f": "lena", "at": "22:42", "txt": "Zoe sen niye af diliyorsun ki"},
  {"t": "msg", "f": "lena", "at": "22:42", "txt": "Bir şey yapmadın sen"},
  {"t": "msg", "f": "zoe", "at": "22:43", "txt": "Bilmiyorum artık"},
  {"t": "msg", "f": "zoe", "at": "22:43", "txt": "Belki gerçekten büyüttük her şeyi"},
  {"t": "msg", "f": "zoe", "at": "22:43", "txt": "Kafam karışık, yatıyorum"},

  // ═══════════════════════════════════════════════════════════
  // SAHNE 3 — Küslük (lena_dm, Cumartesi)
  // ═══════════════════════════════════════════════════════════
  {"t": "silence", "x": "iki gün sonra — Cumartesi"},
  {"t": "channel", "id": "lena_dm", "divider": "Lena · özel sohbet"},
  {"t": "msg", "f": "lena", "at": "14:00", "txt": "Sende Zoe'den haber var mı"},
  {"t": "msg", "f": "lena", "at": "14:00", "txt": "Bana yazmıyor, gruba da girmiyor"},
  {"t": "msg", "f": "lena", "at": "14:01", "txt": "Okuyor ama cevap vermiyor"},
  {"t": "msg", "f": "lena", "at": "14:01", "txt": "Küstü bize resmen"},
  {"t": "msg", "f": "lena", "at": "14:02", "txt": "Ethan ona kafanı dolduruyorlar demiş ya, beni de saymış tabii"},
  {"t": "msg", "f": "lena", "at": "14:02", "txt": "Şimdi araya o girdi"},
  {"t": "msg", "f": "lena", "at": "14:02", "txt": "Ben mi yanlış yaptım bilmiyorum"},
  {"t": "msg", "f": "lena", "at": "14:03", "txt": "Korumaya çalışırken kaybettim onu"},

  // ─── SEÇİM 2 — YOU Lena'ya (Ethan manipüle / abarttık mı) ───
  {
    "t": "choice",
    "at": "14:03",
    "options": [
      {
        "label": "A",
        "txt": "Ethan çok iyi manipüle etti",
        "replies": [
          {"f": "lena", "at": "14:03", "txt": "Aynen, profesyonel. Sanki bunu bekliyormuş gibi"}
        ]
      },
      {
        "label": "B",
        "txt": "Acaba biz mi abarttık, belki haklıdır",
        "replies": [
          {"f": "lena", "at": "14:03", "txt": "Bir an ben de öyle düşündüm... ama o kadar şey tesadüf olamaz"}
        ]
      }
    ]
  },

  {"t": "msg", "f": "lena", "at": "14:04", "txt": "Neyse, çok bunaldım"},
  {"t": "msg", "f": "lena", "at": "14:04", "txt": "Dün Alex'le konuştum"},
  {"t": "msg", "f": "lena", "at": "14:04", "txt": "Ona açıldım, içimi döktüm"},
  {"t": "msg", "f": "lena", "at": "14:05", "txt": "İyi geldi, beni dinledi en azından"},
  {"t": "msg", "f": "lena", "at": "14:05", "txt": "Ama bir şey oldu"},
  {"t": "msg", "f": "lena", "at": "14:06", "txt": "Konuşurken Sara'nın adı geçti"},
  {"t": "msg", "f": "lena", "at": "14:06", "txt": "Alex \"ha Sara, o kız Ethan'a yıllardır ilgili zaten\" dedi"},
  {"t": "msg", "f": "lena", "at": "14:06", "txt": "Lafın arasında, hiç düşünmeden"},
  {"t": "msg", "f": "lena", "at": "14:07", "txt": "Ben donup kaldım"},
  {"t": "msg", "f": "lena", "at": "14:07", "txt": "\"Yıllardır ilgili\" mi"},
  {"t": "msg", "f": "lena", "at": "14:08", "txt": "Yani Sara'nın gözü baştan beri Ethan'da"},
  {"t": "msg", "f": "lena", "at": "14:08", "txt": "Ethan onu Zoe'ye sıradan iş arkadaşı diye tanıtmıştı halbuki"},
  {"t": "msg", "f": "lena", "at": "14:08", "txt": "Bu çok önemli bir şey"},
  {"t": "msg", "f": "lena", "at": "14:09", "txt": "Ama Zoe bana küs, açmıyor bile"},
  {"t": "msg", "f": "lena", "at": "14:09", "txt": "Elimde bu var ama veremiyorum"},
  {"t": "msg", "f": "lena", "at": "14:09", "txt": "Ne yapacağımı bilmiyorum"},

  // ─── SEÇİM 3 — YOU Lena'ya tavsiye ───
  {
    "t": "choice",
    "at": "14:10",
    "options": [
      {
        "label": "A",
        "txt": "Zorla bence, bu çok önemli, onu yalnız bırakma",
        "replies": [
          {"f": "lena", "at": "14:10", "txt": "Denerim ama ya iyice uzaklaşırsa"}
        ]
      },
      {
        "label": "B",
        "txt": "Bekle, o hazır olunca kendi gelir",
        "replies": [
          {"f": "lena", "at": "14:10", "txt": "Belki en doğrusu bu, sabretmek"}
        ]
      },
      {
        "label": "C",
        "txt": "Önce emin ol, Alex'ten detay topla",
        "replies": [
          {"f": "lena", "at": "14:10", "txt": "Evet, Alex'ten daha fazlasını öğreneyim"}
        ]
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════
  // CLIFFHANGER — Sara tanışması (grup → lena_dm, Pazar)
  // ═══════════════════════════════════════════════════════════
  {"t": "silence", "x": "ertesi gün — Pazar"},
  {"t": "channel", "id": "group", "divider": "Zoe, Lena & Sen"},
  {"t": "msg", "f": "zoe", "at": "16:00", "txt": "Kızlar", "gap": true},
  {"t": "msg", "f": "zoe", "at": "16:00", "txt": "Önce özür, son günlerde soğuktum size"},
  {"t": "msg", "f": "zoe", "at": "16:01", "txt": "Ama artık çok rahatım"},
  {"t": "msg", "f": "zoe", "at": "16:01", "txt": "Ethan beni bugün Sara'yla tanıştırdı"},
  {"t": "msg", "f": "zoe", "at": "16:01", "txt": "\"Saklayacak bir şeyim yok, gel tanış\" dedi"},
  {"t": "photo", "f": "zoe", "at": "16:02", "url": "../../_assets/episodes/ep09/images/s1e9_c_sara_tanisma.jpg", "cap": ""},
  {"t": "msg", "f": "zoe", "at": "16:02", "txt": "Çok tatlı bir kızmış ya"},
  {"t": "msg", "f": "zoe", "at": "16:02", "txt": "Sımsıcak, içten biri"},
  {"t": "msg", "f": "zoe", "at": "16:02", "txt": "Boşuna şüphelenmişim, utandım resmen"},
  {"t": "msg", "f": "zoe", "at": "16:03", "txt": "Ethan haklıymış, biz büyütmüşüz"},
  {"t": "msg", "f": "zoe", "at": "16:03", "txt": "İçim çok rahat şimdi 🤍"},
  {"t": "msg", "f": "lena", "at": "16:04", "txt": "Çok güzel canım, sevindim"},

  // lena_dm — Lena'nın gerçek tepkisi (dehşet)
  {"t": "channel", "id": "lena_dm", "divider": "Lena · özel sohbet"},
  {"t": "msg", "f": "lena", "at": "16:05", "txt": "Gördün mü fotoyu"},
  {"t": "msg", "f": "lena", "at": "16:05", "txt": "Sara'nın arkadaki bakışını"},
  {"t": "msg", "f": "lena", "at": "16:06", "txt": "Zoe görmüyor ama ben gördüm"},
  {"t": "msg", "f": "lena", "at": "16:06", "txt": "O kızın gözünde bir şey var, tüylerim diken diken"},
  {"t": "msg", "f": "lena", "at": "16:07", "txt": "Elimde \"Sara yıllardır ona ilgili\" var"},
  {"t": "msg", "f": "lena", "at": "16:07", "txt": "Ama Zoe artık tamamen Ethan'ın etkisinde"},
  {"t": "msg", "f": "lena", "at": "16:08", "txt": "Zoe'yi kaybetmek üzereyiz"},

];
