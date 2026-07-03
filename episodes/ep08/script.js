const MESSAGES = [

  // ═══════════════════════════════════════════════════════════
  // SAHNE 1a — lena_dm (Salı) — Lena'nın avı, kanıt zinciri
  // ═══════════════════════════════════════════════════════════
  {"t": "channel", "id": "lena_dm", "divider": "Lena · özel sohbet"},
  {"t": "msg", "f": "lena", "at": "08:30", "txt": "Günaydın"},
  {"t": "msg", "f": "lena", "at": "08:31", "txt": "Sabaha kadar uyumadım resmen"},
  {"t": "msg", "f": "lena", "at": "08:31", "txt": "Sara'yı baştan aşağı kurcaladım"},
  {"t": "msg", "f": "lena", "at": "08:32", "txt": "Dinliyor musun, sırayla anlatacağım"},

  // ─── TEK SEÇİM (tap-to-continue)
  {
    "t": "choice",
    "at": "08:32",
    "options": [
      {"label": "A", "txt": "Seni dinliyorum canım", "replies": []}
    ]
  },

  {"t": "msg", "f": "lena", "at": "08:33", "txt": "Profili kusursuz, her şey planlı"},
  {"t": "photo", "f": "lena", "at": "08:33", "url": "../../_assets/episodes/ep08/images/s1e8_a_sara_profil.jpg", "cap": ""},
  {"t": "msg", "f": "lena", "at": "08:33", "txt": "Wellness, kahve, \"slow living\" falan"},
  {"t": "msg", "f": "lena", "at": "08:34", "txt": "Ama dün gece bir story attı"},
  {"t": "msg", "f": "lena", "at": "08:35", "txt": "Kimseyi etiketlememiş, fotoğraf da alakasız"},
  {"t": "msg", "f": "lena", "at": "08:35", "txt": "\"Bazıları kolundakinin ne anlama geldiğini bilmiyor 🙃\" yazmış"},
  {"t": "photo", "f": "lena", "at": "08:36", "url": "../../_assets/episodes/ep08/images/s1e8_a_sara_story.jpg", "cap": ""},
  {"t": "msg", "f": "lena", "at": "08:36", "txt": "Bunu okuyunca durdum"},

  // ─── SEÇİM 1 — İpucu buldurma
  {
    "t": "choice",
    "at": "08:37",
    "options": [
      {
        "label": "A",
        "txt": "Aynı bileklik, bu salak Zoe'ye mi nisbet yapıyor aklınca anlamadım",
        "replies": [
          {"f": "lena", "at": "08:37", "txt": "Ben de oraya takıldım. Zoe daha dün bileklik taktı."},
          {"f": "lena", "at": "08:38", "txt": "Kanıt değil tabii, ama zamanlama tuhaf"}
        ]
      },
      {
        "label": "B",
        "txt": "Genel bir laf, herkese atmıştır",
        "replies": [
          {"f": "lena", "at": "08:37", "txt": "Olabilir. Ethan o bilekliği daha dün verdi"},
          {"f": "lena", "at": "08:38", "txt": "Bu bileklikten bende de var sonuçta, ama yine de dikkatimi çekti"}
        ]
      }
    ]
  },

  {"t": "msg", "f": "lena", "at": "08:38", "txt": "Neyse, bileklik bir yana"},
  {"t": "msg", "f": "lena", "at": "08:39", "txt": "Asıl kafama takılan şu"},
  {"t": "msg", "f": "lena", "at": "08:39", "txt": "Sence bu ikisi arasında gerçekten bir şey oldu mu"},
  {"t": "msg", "f": "lena", "at": "08:39", "txt": "Yoksa Sara kafasında mı kuruyor"},

  // ─── SEÇİM 2 — Sara-Ethan spekülasyon
  {
    "t": "choice",
    "at": "08:40",
    "options": [
      {
        "label": "A",
        "txt": "Bence Ethan da işin içinde",
        "replies": [
          {"f": "lena", "at": "08:40", "txt": "Ben de oraya kayıyorum"},
          {"f": "lena", "at": "08:40", "txt": "Ama elimde hâlâ tek bir kesin şey yok"}
        ]
      },
      {
        "label": "B",
        "txt": "Belki Sara tek taraflı, Ethan habersiz",
        "replies": [
          {"f": "lena", "at": "08:40", "txt": "Olabilir"},
          {"f": "lena", "at": "08:40", "txt": "Ama o zaman Ethan neden her şeyi geçiştiriyor"}
        ]
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════
  // SAHNE 1b — Sara çatlağı (story atıp silme)
  // ═══════════════════════════════════════════════════════════
  {"t": "msg", "f": "lena", "at": "08:41", "txt": "Bir şey daha var, en tuhafı bu"},
  {"t": "msg", "f": "lena", "at": "08:41", "txt": "O story'yi attı ya"},
  {"t": "msg", "f": "lena", "at": "08:42", "txt": "On dakika sonra silmiş"},
  {"t": "msg", "f": "lena", "at": "08:42", "txt": "Ben şans eseri screenshot almıştım"},
  {"t": "msg", "f": "lena", "at": "08:43", "txt": "Sanki bir an dayanamayıp attı"},
  {"t": "msg", "f": "lena", "at": "08:43", "txt": "Sonra \"fazla belli ettim\" deyip geri çekti"},
  {"t": "msg", "f": "lena", "at": "08:44", "txt": "Bu kadın hep kontrollü, hep hesaplı"},
  {"t": "msg", "f": "lena", "at": "08:44", "txt": "İlk kez bir çatlak gördüm"},
  {"t": "msg", "f": "lena", "at": "08:45", "txt": "Tabii silme sebebi başka da olabilir ama bence bu işte bir iş var"},
  {"t": "msg", "f": "lena", "at": "08:46", "txt": "Neyse, sana anlatınca rahatladım biraz"},
  {"t": "msg", "f": "lena", "at": "08:46", "txt": "İyi ki varsın"},

  // ─── TEK SEÇİM (tap-to-continue)
  {
    "t": "choice",
    "at": "08:47",
    "options": [
      {"label": "A", "txt": "Sen de canım", "replies": []}
    ]
  },

  // ═══════════════════════════════════════════════════════════
  // SAHNE 2a — grup (Çarşamba) — sesli mesaj kazası
  // ═══════════════════════════════════════════════════════════
  {"t": "silence", "x": "ertesi gün — Çarşamba"},
  {"t": "channel", "id": "group", "divider": "Zoe, Lena & Sen"},
  {"t": "msg", "f": "zoe", "at": "19:20", "txt": "Kızlar bugün Ethan'la telefonda konuştuk", "gap": true},
  {"t": "msg", "f": "zoe", "at": "19:20", "txt": "Çok tatlıydı, eski haline döndü gibi"},
  {"t": "msg", "f": "zoe", "at": "19:21", "txt": "Ama bir şey var, atamıyorum kafamdan"},
  {"t": "msg", "f": "zoe", "at": "19:21", "txt": "Konuşurken bir an arkadan kadın sesi duydum"},
  {"t": "msg", "f": "zoe", "at": "19:22", "txt": "\"Ethan\" dedi, net bir şekilde duydum"},
  {"t": "msg", "f": "zoe", "at": "19:22", "txt": "Ben \"kim o\" diyemeden Ethan açıkladı"},
  {"t": "msg", "f": "zoe", "at": "19:23", "txt": "\"Burası biraz gürültülü, iş yerindeyim, iş arkadaşlarım var\" dedi"},
  {"t": "msg", "f": "zoe", "at": "19:23", "txt": "Mantıklı geldi ama içim rahat değil"},
  {"t": "msg", "f": "zoe", "at": "19:24", "txt": "Niye bilmiyorum, bir kıskançlık bastı resmen"},
  {"t": "msg", "f": "zoe", "at": "19:24", "txt": "O yüzden yazıyorum size, normal miyim ben, iyice kafayı yedim"},

  // ─── SEÇİM 3 — Sesli yakalama
  {
    "t": "choice",
    "at": "19:25",
    "options": [
      {
        "label": "A",
        "txt": "İş yerindeyse normal, kafana takma",
        "replies": [
          {"f": "zoe",  "at": "19:25", "txt": "Öyle demeye çalışıyorum ama olmuyor"},
          {"f": "lena", "at": "19:26", "txt": "Ethan sen sormadan mı açıkladı hımm"}
        ]
      },
      {
        "label": "B",
        "txt": "Bu ara çok fazla ipucu var sanki",
        "replies": [
          {"f": "zoe",  "at": "19:25", "txt": "Ben de tam onu diyemiyorum işte"},
          {"f": "lena", "at": "19:26", "txt": "Bu his boşuna değil, unutma"}
        ]
      }
    ]
  },

  // ─── SAHNE 2b — Lena pozisyon dönüşü
  {"t": "msg", "f": "lena", "at": "19:26", "txt": "Zoe kızma ama"},
  {"t": "msg", "f": "lena", "at": "19:26", "txt": "Ben hep takma kafana dedim ya"},
  {"t": "msg", "f": "lena", "at": "19:27", "txt": "Artık diyemiyorum"},
  {"t": "msg", "f": "lena", "at": "19:27", "txt": "Bir düşün ya"},
  {"t": "msg", "f": "lena", "at": "19:28", "txt": "Sara da Zürih'teydi, aynı konferans"},
  {"t": "msg", "f": "lena", "at": "19:28", "txt": "Oje aynı"},
  {"t": "msg", "f": "lena", "at": "19:28", "txt": "Sana yatıyorum deyip restorandaydı"},
  {"t": "msg", "f": "lena", "at": "19:29", "txt": "Şimdi bu kadın sesi"},
  {"t": "msg", "f": "lena", "at": "19:29", "txt": "Biri olsa tamam derim"},
  {"t": "msg", "f": "lena", "at": "19:29", "txt": "Ama üst üste hepsi"},
  {"t": "msg", "f": "lena", "at": "19:30", "txt": "Sen gerçekten inandın mı"},
  {"t": "msg", "f": "zoe", "at": "19:31", "txt": "..."},
  {"t": "msg", "f": "zoe", "at": "19:31", "txt": "Bilmiyorum ya"},
  {"t": "msg", "f": "zoe", "at": "19:31", "txt": "İnanmak istiyorum, o kadarını biliyorum"},

  // ═══════════════════════════════════════════════════════════
  // SAHNE 3a — grup (gece) — Zoe'nin kararı
  // ═══════════════════════════════════════════════════════════
  {"t": "msg", "f": "zoe", "at": "23:14", "txt": "Kızlar uyuyamıyorum", "gap": true},
  {"t": "msg", "f": "zoe", "at": "23:14", "txt": "Bütün gün o ses kulağımda"},
  {"t": "msg", "f": "zoe", "at": "23:15", "txt": "Böyle devam edemem"},
  {"t": "msg", "f": "lena", "at": "23:15", "txt": "Ne yapmak istiyorsun"},
  {"t": "msg", "f": "zoe", "at": "23:16", "txt": "Yarın Ethan'a soracağım"},
  {"t": "msg", "f": "zoe", "at": "23:16", "txt": "Yüzüne bakıp soracağım, gözlerinden anlarım"},
  {"t": "msg", "f": "lena", "at": "23:17", "txt": "Emin misin"},
  {"t": "msg", "f": "zoe", "at": "23:17", "txt": "Eminim. Kaçmaktan yoruldum"},
  {"t": "msg", "f": "zoe", "at": "23:18", "txt": "İyi geceler kızlar, yarın yazarım"},

  // ═══════════════════════════════════════════════════════════
  // SAHNE 3b — lena_dm (CLIFFHANGER) — söyle/sus (KALICI state)
  // ═══════════════════════════════════════════════════════════
  {"t": "silence", "x": "Zoe çıktı"},
  {"t": "channel", "id": "lena_dm", "divider": "Lena · özel sohbet"},
  {"t": "msg", "f": "lena", "at": "23:20", "txt": "Zoe yattı galiba"},
  {"t": "msg", "f": "lena", "at": "23:20", "txt": "Sana bir şey soracağım"},
  {"t": "msg", "f": "lena", "at": "23:21", "txt": "Ben bir sürü şey buldum ya Sara'yla ilgili"},
  {"t": "msg", "f": "lena", "at": "23:21", "txt": "Bileklik, silinen story, hepsi"},
  {"t": "photo", "f": "lena", "at": "23:21", "url": "../../_assets/episodes/ep08/images/s1e8_a_sara_story.jpg", "cap": ""},
  {"t": "msg", "f": "lena", "at": "23:21", "txt": "Zoe daha bilmiyor bunları"},
  {"t": "msg", "f": "lena", "at": "23:22", "txt": "Yarın gidip soracak Ethan'a"},
  {"t": "msg", "f": "lena", "at": "23:22", "txt": "Sence söyleyeyim mi ona"},

  // ─── SEÇİM 4 — Söyle/Sus (KALICI — you_lena_told, EP10'da convergence)
  {
    "t": "choice",
    "at": "23:23",
    "options": [
      {
        "label": "A",
        "txt": "Kesin söyle, bilmeye hakkı var",
        "set": {"you_lena_told": "told"},
        "replies": [
          {"f": "lena", "at": "23:23", "txt": "Haklısın"},
          {"f": "lena", "at": "23:23", "txt": "Sabah hepsini anlatıcam"}
        ]
      },
      {
        "label": "B",
        "txt": "Hayır, biz karışmayalım",
        "set": {"you_lena_told": "silent"},
        "replies": [
          {"f": "lena", "at": "23:23", "txt": "Belki de öyle"},
          {"f": "lena", "at": "23:23", "txt": "Zaten bir yerde ortaya çıkacak"}
        ]
      }
    ]
  },

  {"t": "msg", "f": "lena", "at": "23:24", "txt": "Neyse"},
  {"t": "msg", "f": "lena", "at": "23:24", "txt": "Yarın yanında olacağım, ne olursa"},
  {"t": "msg", "f": "lena", "at": "23:25", "txt": "İçimde bir his var ama"},
  {"t": "msg", "f": "lena", "at": "23:25", "txt": "Yarın çok şey değişecek gibi"},

];
