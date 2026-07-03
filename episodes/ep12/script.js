const MESSAGES = [

  // ═══════════════════════════════════════════════════════════
  // SAHNE 1 — Hazırlık mini-game (zoe_dm) — elbise seçimi (dinamik foto)
  // ═══════════════════════════════════════════════════════════
  {"t": "channel", "id": "zoe_dm", "divider": "Zoe · özel sohbet"},
  {"t": "msg", "f": "zoe", "at": "11:00", "txt": "Bugün Sara'yla buluşuyorum"},
  {"t": "msg", "f": "zoe", "at": "11:00", "txt": "Bak bir şey diyeceğim, geçen tanıştığımızda"},
  {"t": "msg", "f": "zoe", "at": "11:01", "txt": "Sara bana sormadan selfie'yi story'sine koymuş"},
  {"t": "msg", "f": "zoe", "at": "11:01", "txt": "Hem de en şapşal halimle"},
  {"t": "msg", "f": "zoe", "at": "11:01", "txt": "Gıcık oldum biraz"},
  {"t": "msg", "f": "zoe", "at": "11:02", "txt": "Bu sefer hazırlıklı olayım, yardım et"},
  {"t": "msg", "f": "zoe", "at": "11:02", "txt": "Deneme çektim, hangisi iyi olmuş"},

  // ─── MINI-GAME — elbise seçimi (state: you_elbise, dinamik foto) ───
  {
    "t": "choice",
    "at": "11:02",
    "options": [
      {
        "label": "A",
        "txt": "Rahat, kendi tarzın",
        "set": {"you_elbise": "rahat"},
        "replies": [
          {"t": "photo", "f": "zoe", "at": "11:03", "url": "../../_assets/episodes/ep12/images/s1e12_deneme_rahat.jpg", "cap": ""},
          {"f": "zoe", "at": "11:03", "txt": "Böyle mi, en azından benim gibi"}
        ]
      },
      {
        "label": "B",
        "txt": "İddialı, Sara'ya özen",
        "set": {"you_elbise": "iddiali"},
        "replies": [
          {"t": "photo", "f": "zoe", "at": "11:03", "url": "../../_assets/episodes/ep12/images/s1e12_deneme_iddiali.jpg", "cap": ""},
          {"f": "zoe", "at": "11:03", "txt": "Ya çok mu abartı, influencer olmaya mı çalışıyorum"}
        ]
      },
      {
        "label": "C",
        "txt": "Şık ama sade",
        "set": {"you_elbise": "sik"},
        "replies": [
          {"t": "photo", "f": "zoe", "at": "11:03", "url": "../../_assets/episodes/ep12/images/s1e12_deneme_sik.jpg", "cap": ""},
          {"f": "zoe", "at": "11:03", "txt": "İşte bu, hem şık hem ben"}
        ]
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════
  // SAHNE 2 — Buluşma / grup (Zoe küslüğü kırıp selfie atıyor)
  // ═══════════════════════════════════════════════════════════
  {"t": "silence", "x": "buluşmadan sonra"},
  {"t": "channel", "id": "group", "divider": "Zoe, Lena & Sen"},
  {"t": "msg", "f": "zoe", "at": "15:30", "txt": "KIZLAR", "gap": true},
  {"t": "msg", "f": "zoe", "at": "15:30", "txt": "Sara'yla buluştuk, tatlıydı"},
  {"t": "msg", "f": "zoe", "at": "15:31", "txt": "Bakın 🥹"},
  // dinamik selfie — S1'de seçilen elbise ({you_elbise} state ile değişir)
  {"t": "photo", "f": "zoe", "at": "15:31", "url": "../../_assets/episodes/ep12/images/s1e12_selfie_{you_elbise}.jpg", "cap": ""},
  {"t": "msg", "f": "zoe", "at": "15:31", "txt": "Sara sıcak bir insanmış, sizi de tanıştırıcam bir gün"},
  {"t": "msg", "f": "zoe", "at": "15:32", "txt": "Bir ara dedi ki \"biz çok benziyoruz Zoe\""},
  {"t": "msg", "f": "zoe", "at": "15:32", "txt": "\"Seni gerçekten anlıyorum\" falan"},
  {"t": "msg", "f": "zoe", "at": "15:33", "txt": "İçim ısındı ya"},

  // ═══════════════════════════════════════════════════════════
  // SAHNE 2 — lena_dm (Lena yaralanıyor + Sara story tepkisi)
  // ═══════════════════════════════════════════════════════════
  {"t": "channel", "id": "lena_dm", "divider": "Lena · özel sohbet"},
  {"t": "msg", "f": "lena", "at": "15:40", "txt": "Gördün mü grubu"},
  {"t": "msg", "f": "lena", "at": "15:40", "txt": "Zoe Sara'yla buluşmuş, bir de \"sizi tanıştırıcam\" diyor"},
  {"t": "msg", "f": "lena", "at": "15:41", "txt": "Beni o kadınla mı tanıştıracak, inanamıyorum"},
  {"t": "msg", "f": "lena", "at": "15:41", "txt": "Ben aylardır o kadını araştırıyorum, hep Zoe için"},
  {"t": "msg", "f": "lena", "at": "15:42", "txt": "Bak bir şey daha var, fake hesabımdan gördüm"},
  {"t": "photo", "f": "lena", "at": "15:42", "url": "../../_assets/episodes/ep11/images/s1e11_a_sara_zoe_story.jpg", "cap": ""},
  {"t": "msg", "f": "lena", "at": "15:43", "txt": "Zoe'yi story'sine koymuş, \"iyi ki yollarımız kesişti\" falan"},
  {"t": "msg", "f": "lena", "at": "15:43", "txt": "Beni Zoe'nin hayatından siliyor resmen"},
  {"t": "msg", "f": "lena", "at": "15:44", "txt": "En yakın arkadaşımı gözümün önünde çalıyor bu kadın"},

  // ─── SEÇİM — YOU Lena'ya (yarasını Zoe'ye söylesin mi) ───
  {
    "t": "choice",
    "at": "15:44",
    "options": [
      {"label": "A", "txt": "Zoe ile konuş bence", "replies": [
        {"f": "lena", "at": "15:44", "txt": "Söylesem dinler mi ki, Sara'ya kapıldı"}
      ]},
      {"label": "B", "txt": "Şimdi değil, sakin ol yoksa yenilirsin", "replies": [
        {"f": "lena", "at": "15:44", "txt": "Belki haklısın, biraz sakinleşeyim"}
      ]}
    ]
  },

  // ═══════════════════════════════════════════════════════════
  // SAHNE 3 — Kasıtsız dışlama + cliffhanger
  // ═══════════════════════════════════════════════════════════
  {"t": "silence", "x": "ertesi gün"},
  {"t": "channel", "id": "group", "divider": "Zoe, Lena & Sen"},
  {"t": "msg", "f": "zoe", "at": "13:00", "txt": "Kızlar Sara'yla yarın yine buluşuyoruz", "gap": true},
  {"t": "msg", "f": "zoe", "at": "13:00", "txt": "Önce biraz yürüyeceğiz sonra kahvaltı"},

  {"t": "channel", "id": "lena_dm", "divider": "Lena · özel sohbet"},
  {"t": "msg", "f": "lena", "at": "13:05", "txt": "Gördün mü, yine plan"},
  {"t": "msg", "f": "lena", "at": "13:05", "txt": "Beni çağırmak aklına bile gelmedi"},
  {"t": "msg", "f": "lena", "at": "13:06", "txt": "Eskiden her şeyi beraber yapardık biz"},
  {"t": "msg", "f": "lena", "at": "13:06", "txt": "Kızgın bile değilim artık, sadece yoruldum"},
  {"t": "msg", "f": "lena", "at": "13:07", "txt": "Zoe'nin hayatında görünmez oldum resmen"},

];
