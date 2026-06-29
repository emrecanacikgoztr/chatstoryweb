const MESSAGES = [

  // ═══════════════════════════════════════════════════════════
  // SAHNE 1 — HAVALİMANI (grup)
  // ═══════════════════════════════════════════════════════════
  {"t": "msg", "f": "zoe",  "at": "07:32", "txt": "Ben geldim"},
  {"t": "msg", "f": "zoe",  "at": "07:32", "txt": "Çok erken indim ya"},
  {"t": "msg", "f": "zoe",  "at": "07:33", "txt": "Arabadan çıkış kapısını görüyorum buradan"},
  {"t": "msg", "f": "lena", "at": "07:35", "txt": "Sakin ol"},
  {"t": "msg", "f": "lena", "at": "07:35", "txt": "Uçağı indi mi, tabeladan baktın mı"},
  {"t": "msg", "f": "zoe",  "at": "07:36", "txt": "Arabadayım hala"},
  {"t": "msg", "f": "zoe",  "at": "07:36", "txt": "İndi sanırım"},
  {"t": "msg", "f": "zoe",  "at": "07:37", "txt": "Off kalbim ağzımda 😰"},
  {"t": "msg", "f": "zoe",  "at": "07:37", "txt": "Ya yanında biriyle çıkarsa"},
  {"t": "msg", "f": "lena", "at": "07:38", "txt": "O zaman da görürsün"},
  {"t": "msg", "f": "lena", "at": "07:38", "txt": "Bunun için gittin zaten"},

  {"t": "silence", "x": "8 dakika sonra"},

  {"t": "msg", "f": "zoe",  "at": "07:46", "txt": "AA"},
  {"t": "msg", "f": "zoe",  "at": "07:46", "txt": "Aradı şimdi beni"},
  {"t": "msg", "f": "zoe",  "at": "07:46", "txt": "Açayım mı ne yapayım"},
  {"t": "msg", "f": "lena", "at": "07:47", "txt": "Aç tabii, normal davran"},
  {"t": "msg", "f": "zoe",  "at": "07:48", "txt": "Açtım"},
  {"t": "msg", "f": "zoe",  "at": "07:48", "txt": "\"İndim aşkım, birazdan çıkıyorum\" dedi"},
  {"t": "msg", "f": "zoe",  "at": "07:49", "txt": "Ben de dayanamadım"},
  {"t": "msg", "f": "zoe",  "at": "07:49", "txt": "\"Sürpriz, ben havalimanındayım!\" dedim 🙈"},
  {"t": "msg", "f": "zoe",  "at": "07:50", "txt": "Sustu bi an"},
  {"t": "msg", "f": "zoe",  "at": "07:50", "txt": "Kısa bi sessizlik oldu telefonda"},
  {"t": "msg", "f": "zoe",  "at": "07:51", "txt": "Sonra \"aaa ne güzel, hemen geliyorum\" dedi"},
  {"t": "msg", "f": "zoe",  "at": "07:51", "txt": "Ama sesi bi tuhaftı ya"},
  {"t": "msg", "f": "zoe",  "at": "07:51", "txt": "Neyse heyecandandır dedim"},
  {"t": "msg", "f": "lena", "at": "07:52", "txt": "Hmm"},
  {"t": "msg", "f": "lena", "at": "07:52", "txt": "Ne kadar sürdü gelmesi peki"},

  {"t": "silence", "x": "12 dakika sonra"},

  {"t": "msg", "f": "zoe",  "at": "08:04", "txt": "Geldi geldi"},
  {"t": "msg", "f": "zoe",  "at": "08:04", "txt": "Tek başına çıktı kapıdan"},
  {"t": "msg", "f": "zoe",  "at": "08:05", "txt": "Ama beni görünce bi an durdu öyle"},
  {"t": "msg", "f": "zoe",  "at": "08:05", "txt": "Sanki ne yapacağını şaşırdı"},
  {"t": "msg", "f": "zoe",  "at": "08:06", "txt": "Sonra koşarak sarıldı 🥹"},
  {"t": "msg", "f": "lena", "at": "08:06", "txt": "Ekip nerede peki"},
  {"t": "msg", "f": "zoe",  "at": "08:07", "txt": "Bilmiyorum ya, dağılmışlardır"},
  {"t": "msg", "f": "zoe",  "at": "08:07", "txt": "O kadar düşünemedim, sarıldık işte"},
  {"t": "msg", "f": "zoe",  "at": "08:08", "txt": "Bi de en son o çıktı"},
  {"t": "msg", "f": "zoe",  "at": "08:08", "txt": "Herkes çıktı, o 10 dakika sonra geldi"},
  {"t": "msg", "f": "zoe",  "at": "08:09", "txt": "Neyse, paranoyak olmayayım artık"},

  // ─── SEÇİM 1 — Havalimanı tepkisi
  {
    "t": "choice",
    "at": "08:10",
    "options": [
      {
        "label": "A",
        "txt": "O kadar şaşırdıysa bir terslik var",
        "replies": [
          {"f": "zoe",  "at": "08:10", "txt": "Yarım saniyeydi ama tam beni görünce oldu"},
          {"f": "lena", "at": "08:11", "txt": "Geç çıkması + o donma. Aklında kalsın."}
        ]
      },
      {
        "label": "B",
        "txt": "Gayet normal, koşarak gelmiş",
        "replies": [
          {"f": "zoe",  "at": "08:10", "txt": "Kime baksam şüpheli geliyor"},
          {"f": "lena", "at": "08:11", "txt": "Paranoyak değilsin, sebep var. Hem herkes nerede?"}
        ]
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════
  // SAHNE 2 — EVE DÖNÜŞ (grup)
  // ═══════════════════════════════════════════════════════════
  {"t": "msg", "f": "zoe",  "at": "08:45", "txt": "Şimdi geldik eve", "gap": true},
  {"t": "msg", "f": "zoe",  "at": "08:45", "txt": "Ethan bavulu açtı, bana bi şey almış"},
  {"t": "msg", "f": "zoe",  "at": "08:46", "txt": "Bileklik 🥹"},
  {"t": "photo", "f": "zoe", "at": "08:46", "url": "../../_assets/episodes/ep07/images/s1e7_b_bileklik.jpg", "cap": ""},
  {"t": "msg", "f": "zoe",  "at": "08:47", "txt": "Zürih'te görünce aklıma hemen sen geldin dedi"},
  {"t": "msg", "f": "lena", "at": "08:47", "txt": "Aa çok şık"},
  {"t": "msg", "f": "zoe",  "at": "08:48", "txt": "Çok tatlı ya ama içim bi tuhaf"},
  {"t": "msg", "f": "lena", "at": "08:48", "txt": "Neden tuhaf"},
  {"t": "msg", "f": "zoe",  "at": "08:49", "txt": "Hediyeler son dönemlerde çok arttı, her seyahatten bi şey getiriyor"},
  {"t": "msg", "f": "zoe",  "at": "08:49", "txt": "İçimde bi şey var"},
  {"t": "msg", "f": "lena", "at": "08:51", "txt": "Pekii, arabada Sara'yı sordun mu"},
  {"t": "msg", "f": "zoe",  "at": "08:51", "txt": "Soracağım ama \"nereden biliyorsun\" derse ne diyeyim 🤷‍♀️"},

  // ─── SEÇİM 2 — Kapak hikayesi
  {
    "t": "choice",
    "at": "08:52",
    "options": [
      {
        "label": "A",
        "txt": "Malik'in story'sinde gördüm de",
        "replies": [
          {"f": "zoe",  "at": "08:53", "txt": "Neyse sordum şimdi"},
          {"f": "zoe",  "at": "08:53", "txt": "\"Sara da oradaydı galiba\" dedim"},
          {"f": "zoe",  "at": "08:53", "txt": "Malik'in story'sinde gördüm diye ekledim"},
          {"f": "zoe",  "at": "08:54", "txt": "Ethan bi an dondu"},
          {"f": "zoe",  "at": "08:54", "txt": "\"Sen nereden biliyorsun\" der gibi baktı"},
          {"f": "lena", "at": "08:55", "txt": "Senin onu takip ettiğini bilmiyordu demek"},
          {"f": "zoe",  "at": "08:55", "txt": "Sonra toparladı, \"ha evet iş grubuyla\" dedi"}
        ]
      },
      {
        "label": "B",
        "txt": "Suçu direkt Lena'ya at",
        "replies": [
          {"f": "zoe",  "at": "08:53", "txt": "Neyse sordum şimdi"},
          {"f": "zoe",  "at": "08:53", "txt": "\"Sara da oradaydı galiba\" dedim"},
          {"f": "zoe",  "at": "08:53", "txt": "Lena göstermişti diye ekledim 😅"},
          {"f": "zoe",  "at": "08:54", "txt": "Ethan bi an dondu"},
          {"f": "zoe",  "at": "08:54", "txt": "\"Lena mı takip ediyor\" der gibi baktı"},
          {"f": "lena", "at": "08:55", "txt": "Ay beni içine kattın resmen"},
          {"f": "zoe",  "at": "08:55", "txt": "Sonra toparladı, \"ha evet iş grubuyla\" dedi"}
        ]
      }
    ]
  },

  {"t": "msg", "f": "lena", "at": "08:56", "txt": "O duraksama önemli"},
  {"t": "msg", "f": "zoe",  "at": "08:57", "txt": "Ama sonra hiç sormadan şey dedi"},
  {"t": "msg", "f": "zoe",  "at": "08:57", "txt": "\"Sara'yla Malik'in arasında sanırım bir şeyler var\" dedi 🤫"},
  {"t": "msg", "f": "zoe",  "at": "08:58", "txt": "Sürekli beraberlermiş güya"},
  {"t": "msg", "f": "zoe",  "at": "08:58", "txt": "Ne diyorsunuz buna???"},

  // ─── SEÇİM 3 — Deflection catch
  {
    "t": "choice",
    "at": "08:59",
    "options": [
      {
        "label": "A",
        "txt": "Hımmm, şüpheli. Sen sormadan Sara-Malik durumunu anlatmış",
        "replies": [
          {"f": "lena", "at": "08:59", "txt": "Değil mi, sanki bir şey saklıyor gibi"},
          {"f": "zoe",  "at": "09:00", "txt": "Off bilemiyorum, bir yandan ya masumsa"}
        ]
      },
      {
        "label": "B",
        "txt": "Sara'yla Malik beraberse tüm problem çözülür",
        "replies": [
          {"f": "zoe",  "at": "08:59", "txt": "Oh be içim rahatladı"},
          {"f": "lena", "at": "09:00", "txt": "Konuyu Sara'dan Malik'e kaydırdı, fark ettin mi"},
          {"f": "zoe",  "at": "09:00", "txt": "Ya..."}
        ]
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════
  // SAHNE 3a — GECE, GRUP
  // ═══════════════════════════════════════════════════════════
  {"t": "msg", "f": "lena", "at": "23:40", "txt": "Dur bi şey buldum", "gap": true},
  {"t": "msg", "f": "lena", "at": "23:41", "txt": "Sara, Malik'in fotolarını beğenmiş"},
  {"t": "msg", "f": "lena", "at": "23:41", "txt": "Son bir ayın hepsini, üst üste"},
  {"t": "msg", "f": "zoe",  "at": "23:42", "txt": "E demek Ethan doğru söylemiş"},
  {"t": "msg", "f": "zoe",  "at": "23:42", "txt": "Gerçekten aralarında bir şey var"},
  {"t": "msg", "f": "zoe",  "at": "23:43", "txt": "Ben boşuna şüphelendim resmen 🫠"},

  // ─── SEÇİM 4 — Malik-like yorumu
  {
    "t": "choice",
    "at": "23:43",
    "options": [
      {
        "label": "A",
        "txt": "Bu beğeniler çok ani, sahte gibi",
        "replies": [
          {"f": "lena", "at": "23:44", "txt": "Aynen, ben de ona bakıyordum"},
          {"f": "lena", "at": "23:44", "txt": "İki gün öncesine kadar hiç etkileşim yok"},
          {"f": "lena", "at": "23:45", "txt": "Sonra birden 14 beğeni"},
          {"f": "lena", "at": "23:45", "txt": "Biri \"bakın biz yakınız\" demeye çalışıyor gibi"},
          {"f": "zoe",  "at": "23:46", "txt": "Yani sahte mi diyorsun"},
          {"f": "lena", "at": "23:46", "txt": "Organik değil en azından"}
        ]
      },
      {
        "label": "B",
        "txt": "Demek gerçekten beraberler",
        "replies": [
          {"f": "lena", "at": "23:44", "txt": "Dur Zoe"},
          {"f": "lena", "at": "23:44", "txt": "Bu like'lar çok ani"},
          {"f": "lena", "at": "23:45", "txt": "İki gün öncesine kadar hiç etkileşim yok"},
          {"f": "lena", "at": "23:45", "txt": "Sonra birden 14 beğeni?"},
          {"f": "lena", "at": "23:46", "txt": "Bu organik değil"},
          {"f": "lena", "at": "23:46", "txt": "Biri \"bakın biz yakınız\" demeye çalışıyor gibi"}
        ]
      }
    ]
  },

  {"t": "msg", "f": "zoe",  "at": "23:47", "txt": "Lena"},
  {"t": "msg", "f": "zoe",  "at": "23:47", "txt": "Artık ne düşüneceğimi bilmiyorum"},
  {"t": "msg", "f": "zoe",  "at": "23:48", "txt": "Bir an rahatladım sandım, sonra yine şüphelenmeye başladım"},
  {"t": "msg", "f": "zoe",  "at": "23:48", "txt": "Ben Ethan'a inanmak istiyorum sanırım"},
  {"t": "msg", "f": "lena", "at": "23:49", "txt": "Biliyorum canım"},
  {"t": "msg", "f": "zoe",  "at": "23:50", "txt": "Tamam ya artık kafama takmıyorum"},
  {"t": "msg", "f": "zoe",  "at": "23:50", "txt": "Yatıyorum ben, iyi geceler size"},
  {"t": "msg", "f": "lena", "at": "23:51", "txt": "İyi geceler canım"},

  // ═══════════════════════════════════════════════════════════
  // SAHNE 3b — lena_dm (CLIFFHANGER)
  // ═══════════════════════════════════════════════════════════
  {"t": "silence", "x": "birkaç dakika sonra"},
  {"t": "channel", "id": "lena_dm", "divider": "Lena · özel sohbet"},

  {"t": "msg", "f": "lena", "at": "23:56", "txt": "Uyanık mısın????"},
  {"t": "msg", "f": "lena", "at": "23:57", "txt": "Zoe yeni uyudu, haftalardır ilk kez rahat"},
  {"t": "msg", "f": "lena", "at": "23:57", "txt": "Ona şimdi bir şey diyemem"},
  {"t": "msg", "f": "lena", "at": "23:58", "txt": "Yine sabaha kadar gözünü kırpmaz, biliyorum onu"},
  {"t": "msg", "f": "lena", "at": "23:58", "txt": "O kadar yıprandı ki son haftalarda"},
  {"t": "msg", "f": "lena", "at": "23:59", "txt": "Ama ben patlayacağım, birine söylemem lazım"},
  {"t": "msg", "f": "lena", "at": "23:59", "txt": "Sen sağlamsın, sana diyebilirim"},
  {"t": "msg", "f": "lena", "at": "00:00", "txt": "Sara demin beni takip etmeye başladı"},
  {"t": "msg", "f": "lena", "at": "00:00", "txt": "Yani fake hesabımı"},
  {"t": "msg", "f": "lena", "at": "00:01", "txt": "Aylardır o hesaptan onu izliyordum"},
  {"t": "msg", "f": "lena", "at": "00:01", "txt": "Tüm story'lerini, eski postlarını"},
  {"t": "msg", "f": "lena", "at": "00:01", "txt": "Hiç fark etmemişti"},
  {"t": "msg", "f": "lena", "at": "00:02", "txt": "Şimdi birden beni geri takip etti"},
  {"t": "msg", "f": "lena", "at": "00:02", "txt": "Bir şey yazmadı, sadece takip etti"},
  {"t": "msg", "f": "lena", "at": "00:02", "txt": "\"Gördüm seni\" der gibi 🕵️"},
  {"t": "msg", "f": "lena", "at": "00:03", "txt": "Ben hep kontrollüyümdür bilirsin"},
  {"t": "msg", "f": "lena", "at": "00:03", "txt": "Ama şu an elim ayağım titriyor"},
  {"t": "msg", "f": "lena", "at": "00:04", "txt": "Bu kadın bir şey biliyor"},
  {"t": "msg", "f": "lena", "at": "00:04", "txt": "Zoe'yi korumam lazım ama nasıl bilmiyorum"},

  // ─── SEÇİM 5 — YOU Lena'ya (asimetrik bilgi)
  {
    "t": "choice",
    "at": "00:05",
    "options": [
      {
        "label": "A",
        "txt": "Zoe'nin bilmeye hakkı var, söyle",
        "replies": [
          {"f": "lena", "at": "00:05", "txt": "Haklısın, saklamak bana da ağır geliyor"},
          {"f": "lena", "at": "00:05", "txt": "Ama bu haliyle söylersem yıkılır, önce bir somut şey bulayım"}
        ]
      },
      {
        "label": "B",
        "txt": "Şimdi değil, önce tam emin olalım ki kaçamasınlar",
        "replies": [
          {"f": "lena", "at": "00:05", "txt": "Evet, elimde net bir şey yokken olmaz"},
          {"f": "lena", "at": "00:05", "txt": "Ben bu kadını çözene kadar Zoe rahat uyusun"}
        ]
      }
    ]
  },

  {"t": "msg", "f": "lena", "at": "00:06", "txt": "İyi ki varsın, yalnız hissetmiyorum"},

];
