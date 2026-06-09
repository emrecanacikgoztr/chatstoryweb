const MESSAGES = [

  // ═══════════════════════════════════════════════════════
  // SAHNE A1 — "Sergi bağlamı + Ethan gelemiyor"
  // ═══════════════════════════════════════════════════════

  {"t": "msg", "f": "lena", "at": "18:32", "txt": "Kızlar", "gap": true},
  {"t": "msg", "f": "lena", "at": "18:32", "txt": "Ne yapıyorsunuz nasılsınız bugün"},

  {"t": "msg", "f": "zoe", "at": "18:33", "txt": "Lenaaa", "gap": true},
  {"t": "msg", "f": "zoe", "at": "18:33", "txt": "İyi sizi özledim 🤍"},

  {"t": "msg", "f": "lena", "at": "18:34", "txt": "Ben de", "gap": true},
  {"t": "msg", "f": "lena", "at": "18:34", "txt": "Anlat"},

  {"t": "msg", "f": "zoe", "at": "18:35", "txt": "Şu an hazırlanıyorum", "gap": true},
  {"t": "msg", "f": "zoe", "at": "18:35", "txt": "Bu akşam sergi var ya hatırladın mı"},

  {"t": "msg", "f": "lena", "at": "18:36", "txt": "Aaa evet", "gap": true},
  {"t": "msg", "f": "lena", "at": "18:36", "txt": "Bugün müydü"},

  {"t": "msg", "f": "zoe", "at": "18:36", "txt": "Bugün", "gap": true},

  {"t": "msg", "f": "lena", "at": "18:37", "txt": "Ethan'la mı gidiyorsun", "gap": true},

  {"t": "msg", "f": "zoe", "at": "18:37", "txt": "Yok ya", "gap": true},
  {"t": "msg", "f": "zoe", "at": "18:38", "txt": "Ethan gelemiyor"},

  {"t": "msg", "f": "lena", "at": "18:38", "txt": "Niye", "gap": true},

  {"t": "msg", "f": "zoe", "at": "18:38", "txt": "İş yemeği varmış", "gap": true},
  {"t": "msg", "f": "zoe", "at": "18:39", "txt": "İptal edemiyormuş"},

  {"t": "msg", "f": "lena", "at": "18:39", "txt": "Yaa", "gap": true},

  {"t": "msg", "f": "zoe", "at": "18:39", "txt": "Evet", "gap": true},
  {"t": "msg", "f": "zoe", "at": "18:40", "txt": "Moralim bozuk"},

  {"t": "msg", "f": "lena", "at": "18:41", "txt": "Kız topluluğu dolu zaten", "gap": true},
  {"t": "msg", "f": "lena", "at": "18:41", "txt": "Eğleneceksin"},

  {"t": "msg", "f": "zoe", "at": "18:42", "txt": "Umarımm", "gap": true},

  // ═══════════════════════════════════════════════════════
  // SAHNE A2 — "Ethan'dan mesaj geldi"
  // ═══════════════════════════════════════════════════════

  {"t": "msg", "f": "zoe", "at": "18:44", "txt": "BU ARADA", "gap": true},

  {"t": "msg", "f": "zoe", "at": "18:45", "txt": "Şimdi Ethan yazdı"},
  {"t": "msg", "f": "zoe", "at": "18:45", "txt": "Geliyor sergiye"},

  {"t": "msg", "f": "zoe", "at": "18:46", "txt": "İş yemeğini iptal etmiş"},

  {"t": "msg", "f": "lena", "at": "18:46", "txt": "Dur ne", "gap": true},

  {"t": "msg", "f": "zoe", "at": "18:46", "txt": "İş yemeğini İPTAL ETMİŞ Lena", "gap": true},

  {"t": "msg", "f": "lena", "at": "18:47", "txt": "Ethan iptal etmez", "gap": true},

  {"t": "msg", "f": "zoe", "at": "18:47", "txt": "AYNEN", "gap": true},

  {"t": "photo", "f": "zoe", "at": "18:48", "url": "../../_assets/episodes/ep04/images/s1e4_a_ethan_message.jpg", "cap": ""},

  {"t": "msg", "f": "lena", "at": "18:49", "txt": "🥹", "gap": true},
  {"t": "msg", "f": "lena", "at": "18:49", "txt": "Gel buraya"},
  {"t": "msg", "f": "lena", "at": "18:49", "txt": "Kucaklayayım seni"},

  {"t": "msg", "f": "zoe", "at": "18:50", "txt": "Ne hissedeceğimi bilmiyorum", "gap": true},
  {"t": "msg", "f": "zoe", "at": "18:50", "txt": "Gerçekten beni seviyor"},

  {"t": "msg", "f": "zoe", "at": "18:51", "txt": "Ben de bilmiyorum kızlar", "gap": true},

  // ─── SEÇİM 1 ───
  {"t": "choice", "at": "18:52", "options": [
    {"label": "A", "txt": "Ethan'ı dikkatli izle", "set": {"you_pre_event": "observe"}, "replies": [
      {"f": "zoe", "at": "18:52", "txt": "Hmm"},
      {"f": "zoe", "at": "18:53", "txt": "Haklısın aslında"},
      {"f": "lena", "at": "18:53", "txt": "Hayır canım kafanı bozma"},
      {"f": "zoe", "at": "18:54", "txt": "Yok bozmuyorum, sadece dikkatli olurum"}
    ]},
    {"label": "B", "txt": "Canım bol bol eğlen keyfine bak", "set": {"you_pre_event": "enjoy"}, "replies": [
      {"f": "zoe", "at": "18:52", "txt": "Evet"},
      {"f": "zoe", "at": "18:53", "txt": "Hak ettim ya"},
      {"f": "zoe", "at": "18:53", "txt": "Bu akşam keyfime bakacağım"},
      {"f": "lena", "at": "18:53", "txt": "Aynen"},
      {"f": "lena", "at": "18:54", "txt": "Dinle kafanı"}
    ]}
  ]},

  // ═══════════════════════════════════════════════════════
  // SAHNE A4 — "Outfit + çıkış"
  // ═══════════════════════════════════════════════════════

  {"t": "msg", "f": "zoe", "at": "18:56", "txt": "Ethan geldi yukarı", "gap": true},
  {"t": "msg", "f": "zoe", "at": "18:56", "txt": "Hazırlandım"},

  {"t": "photo", "f": "zoe", "at": "18:57", "url": "../../_assets/episodes/ep04/images/s1e4_a_zoe_outfit.jpg", "cap": "🖤"},

  {"t": "msg", "f": "lena", "at": "18:58", "txt": "AAAA", "gap": true},
  {"t": "msg", "f": "lena", "at": "18:58", "txt": "Çok güzel olmuş"},

  {"t": "msg", "f": "zoe", "at": "18:59", "txt": "Hadi öpücük 🤍", "gap": true},

  {"t": "msg", "f": "lena", "at": "18:59", "txt": "İyi eğlenceler canım", "gap": true},
  {"t": "msg", "f": "lena", "at": "19:00", "txt": "Bekliyorum haberlerini"},

  // ═══════════════════════════════════════════════════════
  // SAHNE B0 — "Sergide bağlam (köprü mesajla başlıyor)"
  // ═══════════════════════════════════════════════════════

  {"t": "msg", "f": "lena", "at": "20:33", "txt": "Kızlar nasıl gidiyor", "gap": true},
  {"t": "msg", "f": "lena", "at": "20:33", "txt": "Nasıl gidiyor"},

  {"t": "msg", "f": "zoe", "at": "20:35", "txt": "Geldik sergiye", "gap": true},

  {"t": "msg", "f": "zoe", "at": "20:36", "txt": "Burası bayağı kalabalık"},

  {"t": "msg", "f": "zoe", "at": "20:36", "txt": "Ekipten Amy ile Chloe var"},
  {"t": "msg", "f": "zoe", "at": "20:37", "txt": "Bir de iki büyük müşterimiz davetli"},

  {"t": "msg", "f": "lena", "at": "20:37", "txt": "Ohooo", "gap": true},

  {"t": "msg", "f": "zoe", "at": "20:38", "txt": "Biriyle yeni başladık çalışmaya, çok iyi satış yapıyoruz"},

  {"t": "msg", "f": "lena", "at": "20:38", "txt": "Önemli akşam yani", "gap": true},

  {"t": "msg", "f": "zoe", "at": "20:38", "txt": "Aynen", "gap": true},

  {"t": "msg", "f": "zoe", "at": "20:39", "txt": "Ethan'ı tanıştırdım hepsiyle", "gap": true},

  {"t": "msg", "f": "lena", "at": "20:40", "txt": "Vay", "gap": true},
  {"t": "msg", "f": "lena", "at": "20:40", "txt": "Zaten gelmesi gerekiyordu"},

  {"t": "msg", "f": "zoe", "at": "20:40", "txt": "Ethan kızlarla sohbete daldı şu an", "gap": true},
  {"t": "msg", "f": "zoe", "at": "20:41", "txt": "Ben de yan masaya geçtim, müşterilerin yanına"},
  {"t": "msg", "f": "zoe", "at": "20:41", "txt": "Ne yapsam"},

  // ─── SEÇİM 2 ───
  {"t": "choice", "at": "20:42", "options": [
    {"label": "A", "txt": "Profesyonelliğe odaklan, müşterilerle vakit geçir", "set": {"you_at_event": "professional"}, "replies": [
      {"f": "zoe", "at": "20:42", "txt": "Haklısın"},
      {"f": "zoe", "at": "20:43", "txt": "Bu benim akşamım aslında"},
      {"f": "zoe", "at": "20:43", "txt": "Müşterilerle ilgileneyim"},
      {"f": "lena", "at": "20:43", "txt": "Aynen"},
      {"f": "zoe", "at": "20:44", "txt": "Müşterilerle uzun uzun konuştuk"}
    ]},
    {"label": "B", "txt": "Ethan'ın yanında ol, sevgilin gibi davran", "set": {"you_at_event": "partner"}, "replies": [
      {"f": "zoe", "at": "20:42", "txt": "Evet doğru"},
      {"f": "zoe", "at": "20:43", "txt": "Bu akşam onun da burada olması özel"},
      {"f": "zoe", "at": "20:43", "txt": "Yanına döndüm"},
      {"f": "lena", "at": "20:43", "txt": "Tatlı"},
      {"f": "zoe", "at": "20:44", "txt": "Ethan'ın yanında durdum, kahkaha attık birlikte"}
    ]}
  ]},

  {"t": "msg", "f": "zoe", "at": "20:50", "txt": "Kızlarrr", "gap": true},
  {"t": "msg", "f": "zoe", "at": "20:51", "txt": "Tuvalete gitmiştim döndüğümde"},

  // ═══════════════════════════════════════════════════════
  // SAHNE B1 — "Patlama"
  // ═══════════════════════════════════════════════════════

  {"t": "msg", "f": "zoe", "at": "21:09", "txt": "Ethan'ı bir kadınla yakaladım", "gap": true},

  {"t": "msg", "f": "lena", "at": "21:10", "txt": "Ne", "gap": true},

  {"t": "msg", "f": "zoe", "at": "21:10", "txt": "Tuvaletten çıkıyordum", "gap": true},
  {"t": "msg", "f": "zoe", "at": "21:10", "txt": "Şu an yan salondayım"},

  {"t": "msg", "f": "zoe", "at": "21:11", "txt": "Bakın", "gap": true},

  // ═══════════════════════════════════════════════════════
  // SAHNE B2 — "Foto ve anlatım"
  // ═══════════════════════════════════════════════════════

  {"t": "photo", "f": "zoe", "at": "21:12", "url": "../../_assets/episodes/ep04/images/s1e4_b_ethan_olivia.jpg", "cap": "gizli çektim"},

  {"t": "msg", "f": "lena", "at": "21:13", "txt": "Dur", "gap": true},
  {"t": "msg", "f": "lena", "at": "21:13", "txt": "Bu kim"},

  {"t": "msg", "f": "zoe", "at": "21:13", "txt": "Bilmiyorum", "gap": true},
  {"t": "msg", "f": "zoe", "at": "21:14", "txt": "İnsanlar arasından gördüm onları"},

  {"t": "msg", "f": "zoe", "at": "21:14", "txt": "Bir kadınla gülüyordu"},
  {"t": "msg", "f": "zoe", "at": "21:14", "txt": "Sarıldılar"},
  {"t": "msg", "f": "zoe", "at": "21:15", "txt": "Kız Ethan'ı öptü"},

  {"t": "msg", "f": "zoe", "at": "21:15", "txt": "Ethan kızın elini tuttu"},
  {"t": "msg", "f": "zoe", "at": "21:15", "txt": "Sonra da Ethan'a sarıldı uzun uzun"},

  {"t": "msg", "f": "lena", "at": "21:16", "txt": "Ya", "gap": true},
  {"t": "msg", "f": "lena", "at": "21:16", "txt": "Kim olabilir bu"},

  {"t": "msg", "f": "zoe", "at": "21:16", "txt": "Bilmiyorum", "gap": true},

  {"t": "msg", "f": "zoe", "at": "21:17", "txt": "Ne yapayım kızlar"},

  // ─── SEÇİM 3 ───
  {"t": "choice", "at": "21:17", "options": [
    {"label": "A", "txt": "Yanlarına git yüzleş", "set": {"you_after_photo": "confront"}, "replies": [
      {"f": "zoe", "at": "21:18", "txt": "Yanlarına gittim direkt"},
      {"f": "zoe", "at": "21:18", "txt": "Ethan döndü"},
      {"f": "zoe", "at": "21:19", "txt": "Yüzü bir tuhaf oldu"},
      {"f": "zoe", "at": "21:19", "txt": "Tanıştırmak istedi"},
      {"f": "zoe", "at": "21:20", "txt": "\"Zoe canım, bu—\" dedi"}
    ]},
    {"label": "B", "txt": "Çık oradan, eve git", "set": {"you_after_photo": "flee"}, "replies": [
      {"f": "zoe", "at": "21:18", "txt": "Yaklaşamadım kızlar"},
      {"f": "zoe", "at": "21:19", "txt": "Oraya gitsem ne olacak"},
      {"f": "zoe", "at": "21:19", "txt": "Rezil olacaktım sadece"},
      {"f": "zoe", "at": "21:20", "txt": "Çantamı aldım"},
      {"f": "zoe", "at": "21:20", "txt": "Doğrudan kapıya yöneldim"},
      {"f": "zoe", "at": "21:21", "txt": "Ethan'ı görmedim çıkarken"}
    ]}
  ]},

  {"t": "msg", "f": "zoe", "at": "21:20", "txt": "Ethan beni gördü galiba ne yapayım?", "gap": true},
  // ─── SEÇİM 4 (sadece you_after_photo === 'confront' ise) ───
  {"t": "choice", "at": "21:20", "showIf": [{"key": "you_after_photo", "value": "confront"}], "options": [
    {"label": "A", "txt": "Soğuk dur, kibar laf sok", "set": {"you_aggression": "sarcasm"}, "replies": [
      {"f": "zoe", "at": "21:21", "txt": "Ben dinlemedim Ethan'ı"},
      {"f": "zoe", "at": "21:21", "txt": "Kadına döndüm"},
      {"f": "zoe", "at": "21:22", "txt": "\"ne kadar samimi tanışmışsınız anlaşılan\" dedim"},
      {"f": "zoe", "at": "21:22", "txt": "Sahte gülümseme"},
      {"f": "zoe", "at": "21:23", "txt": "Ethan dondu"},
      {"f": "zoe", "at": "21:23", "txt": "Kadın da donmuştu"},
      {"f": "zoe", "at": "21:24", "txt": "Ethan \"Zoe sakin ol bu—\" dedi"},
      {"f": "zoe", "at": "21:24", "txt": "Ben dinlemedim"}
    ]},
    {"label": "B", "txt": "Patla, yüzlerine bağır", "set": {"you_aggression": "explosion"}, "replies": [
      {"f": "zoe", "at": "21:21", "txt": "\"bu da kim?\" dedim sesli"},
      {"f": "zoe", "at": "21:22", "txt": "İki masa çevirdi başını"},
      {"f": "zoe", "at": "21:22", "txt": "Ethan \"Zoe sus bu—\" dedi"},
      {"f": "zoe", "at": "21:23", "txt": "Ben \"NE bu Ethan?\" dedim"},
      {"f": "zoe", "at": "21:23", "txt": "Sesim titriyordu"},
      {"f": "zoe", "at": "21:24", "txt": "Herkes baktı"}
    ]},
    {"label": "C", "txt": "Hiçbir şey deme, çık git", "set": {"you_aggression": "silent"}, "replies": [
      {"f": "zoe", "at": "21:21", "txt": "Hiçbir şey demedim"},
      {"f": "zoe", "at": "21:22", "txt": "Ethan bana baktı"},
      {"f": "zoe", "at": "21:22", "txt": "\"Zoe\" dedi"},
      {"f": "zoe", "at": "21:23", "txt": "Ben başımı çevirdim"},
      {"f": "zoe", "at": "21:23", "txt": "Döndüm"}
    ]}
  ]},

  // ═══════════════════════════════════════════════════════
  // SAHNE B4 — "Çıkış kaosu (HER DURUMDA)"
  // ═══════════════════════════════════════════════════════

  {"t": "msg", "f": "zoe", "at": "21:25", "txt": "Çıkarken gözlerim doldu", "gap": true},
  {"t": "msg", "f": "zoe", "at": "21:26", "txt": "Hızlıca yürüdüm"},

  {"t": "msg", "f": "zoe", "at": "21:26", "txt": "Bir garson elinde tepsiyle önümden geçiyordu"},

  {"t": "msg", "f": "zoe", "at": "21:27", "txt": "Garsona çarptım"},

  {"t": "msg", "f": "zoe", "at": "21:27", "txt": "Tüm içkiler üzerime döküldü"},

  {"t": "msg", "f": "zoe", "at": "21:28", "txt": "Herkes bana baktı"},
  {"t": "msg", "f": "zoe", "at": "21:28", "txt": "Rezil oldum ya off"},

  {"t": "msg", "f": "zoe", "at": "21:29", "txt": "Çok kötü hissediyorum"},
  {"t": "msg", "f": "zoe", "at": "21:29", "txt": "İş arkadaşlarım hepsi gördü"},

  {"t": "msg", "f": "zoe", "at": "21:30", "txt": "Çıktım kaçar gibi"},

  {"t": "msg", "f": "lena", "at": "21:31", "txt": "Aman aman aman", "gap": true},
  {"t": "msg", "f": "lena", "at": "21:31", "txt": "Şu an neredesin"},

  // ═══════════════════════════════════════════════════════
  // SAHNE B5 — "Zoe sokakta"
  // ═══════════════════════════════════════════════════════

  {"t": "msg", "f": "zoe", "at": "21:32", "txt": "Sokaktayım", "gap": true},
  {"t": "msg", "f": "zoe", "at": "21:32", "txt": "Eve gideceğim"},

  {"t": "msg", "f": "zoe", "at": "21:33", "txt": "Eşyalarımı toplayıp"},
  {"t": "msg", "f": "zoe", "at": "21:33", "txt": "Bilmiyorum"},

  {"t": "msg", "f": "lena", "at": "21:33", "txt": "Zoe nefes al", "gap": true},

  {"t": "msg", "f": "lena", "at": "21:34", "txt": "Bir saniye dur"},
  {"t": "msg", "f": "lena", "at": "21:34", "txt": "Ethan seni aramaya çıktı mı"},

  {"t": "msg", "f": "zoe", "at": "21:35", "txt": "Bilmiyorum", "gap": true},
  {"t": "msg", "f": "zoe", "at": "21:35", "txt": "Arıyor sürekli ama açmıyorum."},

  // ═══════════════════════════════════════════════════════
  // SAHNE C1 — "Ethan yetişti"
  // ═══════════════════════════════════════════════════════

  {"t": "msg", "f": "zoe", "at": "21:36", "txt": "Kızlar", "gap": true},
  {"t": "msg", "f": "zoe", "at": "21:36", "txt": "Ethan geldi peşimden"},

  {"t": "msg", "f": "zoe", "at": "21:37", "txt": "Sokakta yetişti"},

  {"t": "msg", "f": "zoe", "at": "21:38", "txt": "Yüzü bembeyazdı"},

  {"t": "msg", "f": "zoe", "at": "21:38", "txt": "\"ne oldu sana?\" dedi"},

  {"t": "msg", "f": "zoe", "at": "21:39", "txt": "Ben \"biliyorsun ne olduğunu\" dedim"},

  {"t": "msg", "f": "zoe", "at": "21:39", "txt": "Ethan \"Olivia kuzenim\" dedi"},

  {"t": "msg", "f": "zoe", "at": "21:40", "txt": "..."},

  {"t": "msg", "f": "zoe", "at": "21:40", "txt": "Lena"},

  {"t": "msg", "f": "zoe", "at": "21:41", "txt": "Kuzeni"},

  // ═══════════════════════════════════════════════════════
  // SAHNE C2 — "Olivia geliyor"
  // ═══════════════════════════════════════════════════════

  {"t": "msg", "f": "zoe", "at": "21:42", "txt": "Olivia da geldi peşimizden", "gap": true},

  {"t": "msg", "f": "zoe", "at": "21:42", "txt": "Çok güzel bir kadın"},

  {"t": "msg", "f": "zoe", "at": "21:43", "txt": "İtalya'dan gelmiş"},
  {"t": "msg", "f": "zoe", "at": "21:43", "txt": "Sanatçıymış"},

  {"t": "msg", "f": "zoe", "at": "21:44", "txt": "Ethan'a haber vermemiş"},
  {"t": "msg", "f": "zoe", "at": "21:44", "txt": "Sonra sürpriz yapacakmış"},

  {"t": "msg", "f": "zoe", "at": "21:45", "txt": "Sergide karşılaşınca Ethan da şaşırmış"},

  {"t": "msg", "f": "zoe", "at": "21:45", "txt": "Bana sarıldı"},

  {"t": "msg", "f": "zoe", "at": "21:46", "txt": "\"Aaa Zoe! Ethan senden çok bahsetti\" dedi"},

  {"t": "msg", "f": "zoe", "at": "21:46", "txt": "Yerin dibine geçtim resmen"},

  {"t": "msg", "f": "zoe", "at": "21:47", "txt": "Rezil oldum"},

  // ═══════════════════════════════════════════════════════
  // SAHNE C3 — "Lena'nın tepkisi"
  // ═══════════════════════════════════════════════════════

  {"t": "msg", "f": "lena", "at": "21:48", "txt": "Zoe", "gap": true},

  {"t": "msg", "f": "lena", "at": "21:49", "txt": "Bekle bekle bekle"},
  {"t": "msg", "f": "lena", "at": "21:49", "txt": "Bir de garsona çarptın"},
  {"t": "msg", "f": "lena", "at": "21:50", "txt": "İş arkadaşlarının önünde"},

  {"t": "msg", "f": "zoe", "at": "21:50", "txt": "EVET", "gap": true},

  {"t": "msg", "f": "zoe", "at": "21:51", "txt": "Hatta dahası"},

  {"t": "msg", "f": "zoe", "at": "21:51", "txt": "İki müşterimiz de oradaydı"},
  {"t": "msg", "f": "zoe", "at": "21:52", "txt": "Hepsi gördü"},

  {"t": "msg", "f": "zoe", "at": "21:52", "txt": "Kalabalığın ortasında içkiler üstüme döküldü"},

  {"t": "msg", "f": "lena", "at": "21:53", "txt": "🙈", "gap": true},

  {"t": "msg", "f": "zoe", "at": "21:54", "txt": "Aynen 🙈", "gap": true},

  // ═══════════════════════════════════════════════════════
  // SAHNE D1 — "Yatağa dönmüş"
  // ═══════════════════════════════════════════════════════

  {"t": "silence", "x": "1.5 saat sonra"},
  {"t": "msg", "f": "zoe", "at": "23:32", "txt": "Lena uyanık mısın hâlâ", "gap": true},

  {"t": "msg", "f": "lena", "at": "23:32", "txt": "Bekliyorum seni", "gap": true},

  {"t": "msg", "f": "zoe", "at": "23:33", "txt": "Geldik eve", "gap": true},

  {"t": "msg", "f": "zoe", "at": "23:34", "txt": "Ethan duşta"},

  {"t": "msg", "f": "zoe", "at": "23:34", "txt": "Hayatımın en utanç verici akşamıydı"},

  // ═══════════════════════════════════════════════════════
  // SAHNE D2 — "Olivia anısı"
  // ═══════════════════════════════════════════════════════

  {"t": "msg", "f": "zoe", "at": "23:35", "txt": "Sergide kalamadım, çıktık", "gap": true},

  {"t": "msg", "f": "zoe", "at": "23:36", "txt": "Olivia hâlâ oradaydı"},

  {"t": "msg", "f": "zoe", "at": "23:36", "txt": "Çok tatlı"},

  {"t": "msg", "f": "zoe", "at": "23:37", "txt": "Çok"},

  {"t": "msg", "f": "zoe", "at": "23:37", "txt": "Ben ona böyle baktım, o bana sarıldı"},

  {"t": "msg", "f": "zoe", "at": "23:38", "txt": "\"aldırma\" dedi"},

  {"t": "msg", "f": "zoe", "at": "23:38", "txt": "\"bende olsam aynısını yapardım\" dedi"},

  {"t": "msg", "f": "zoe", "at": "23:39", "txt": "Ethan Olivia'nın yanında"},
  {"t": "msg", "f": "zoe", "at": "23:39", "txt": "Bir gülüyor bir bana bakıyordu"},

  {"t": "msg", "f": "zoe", "at": "23:40", "txt": "Yarın iş arkadaşlarıma nasıl bakacağım kızlar"},

  {"t": "msg", "f": "zoe", "at": "23:40", "txt": "Hepsi gördü"},

  // ═══════════════════════════════════════════════════════
  // SAHNE D3 — "Foto'ya geri bakış"
  // ═══════════════════════════════════════════════════════

  {"t": "msg", "f": "zoe", "at": "23:42", "txt": "Bak şuna ya", "gap": true},

  {"t": "msg", "f": "zoe", "at": "23:43", "txt": "Bunu çekmiştim ben sergide"},

  {"t": "photo", "f": "zoe", "at": "23:43", "url": "../../_assets/episodes/ep04/images/s1e4_b_ethan_olivia.jpg", "cap": "şu an bakınca yüzüm kıpkırmızı"},

  {"t": "msg", "f": "lena", "at": "23:44", "txt": "Aaa", "gap": true},

  {"t": "msg", "f": "lena", "at": "23:44", "txt": "Sen tam bir film karakterisin gerçekten"},

  {"t": "msg", "f": "zoe", "at": "23:45", "txt": "Aklım almadı o anda", "gap": true},

  // ═══════════════════════════════════════════════════════
  // SAHNE D4 — "Telefon detayı"
  // ═══════════════════════════════════════════════════════

  {"t": "msg", "f": "zoe", "at": "23:48", "txt": "Bir şey daha var", "gap": true},

  {"t": "msg", "f": "zoe", "at": "23:49", "txt": "Eve gelirken arabada"},

  {"t": "msg", "f": "zoe", "at": "23:49", "txt": "Ethan'ın telefonu çaldı"},

  {"t": "msg", "f": "zoe", "at": "23:50", "txt": "Bir baktı"},

  {"t": "msg", "f": "zoe", "at": "23:50", "txt": "Hızlıca cebine attı"},

  {"t": "msg", "f": "zoe", "at": "23:51", "txt": "Kim diye sordum"},

  {"t": "msg", "f": "zoe", "at": "23:51", "txt": "İş dedi"},

  {"t": "msg", "f": "zoe", "at": "23:52", "txt": "o kadar rezil oldum ki,"},

  {"t": "msg", "f": "zoe", "at": "23:52", "txt": "Bir şey diyemedim"},

  {"t": "msg", "f": "lena", "at": "23:53", "txt": "Hmm", "gap": true},

  // ─── SEÇİM 5 ───
  {"t": "choice", "at": "23:54", "options": [
    {"label": "A", "txt": "Bu sadece bir yanlış anlaşılma, herkesin başına gelebilir", "set": {"you_after_shame": "optimism"}, "replies": [
      {"f": "zoe", "at": "23:55", "txt": "Off bilemiyorum"},
      {"f": "zoe", "at": "23:55", "txt": "Uyumam lazım"},
      {"f": "lena", "at": "23:56", "txt": "Aynen yat"},
      {"f": "lena", "at": "23:56", "txt": "Yarın yeni gün"}
    ]},
    {"label": "B", "txt": "Uyu artık, yarın düşünürsün", "set": {"you_after_shame": "rest"}, "replies": [
      {"f": "zoe", "at": "23:55", "txt": "Haklısın"},
      {"f": "zoe", "at": "23:55", "txt": "Beynim durmuyor zaten"},
      {"f": "lena", "at": "23:56", "txt": "Zorla uyut kendini"},
      {"f": "lena", "at": "23:56", "txt": "Yat"}
    ]}
  ]},

  // ═══════════════════════════════════════════════════════
  // SAHNE D5 — "Cliffhanger"
  // ═══════════════════════════════════════════════════════

  {"t": "msg", "f": "zoe", "at": "23:58", "txt": "Yatıyorum", "gap": true},
  {"t": "msg", "f": "zoe", "at": "23:58", "txt": "Ethan duştan çıkıyor şimdi"},

  {"t": "msg", "f": "zoe", "at": "23:59", "txt": "Artık eskisi gibi her şeyi sorgulamıyorum"},

  {"t": "msg", "f": "zoe", "at": "23:59", "txt": "Ama içimde bir şey de tam oturmuyor"},

  {"t": "msg", "f": "lena", "at": "23:59", "txt": "Yat sen de", "gap": true},

  {"t": "msg", "f": "zoe", "at": "00:00", "txt": "İyi geceler 🤍", "gap": true},

  {"t": "msg", "f": "lena", "at": "00:00", "txt": "İyi geceler", "gap": true},

];
