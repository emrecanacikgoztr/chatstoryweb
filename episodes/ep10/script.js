const MESSAGES = [

  // ═══════════════════════════════════════════════════════════
  // SAHNE 1 — Charm direnç (kısa, grup) — döngü tekrarını atlıyoruz
  // ═══════════════════════════════════════════════════════════
  {"t": "msg", "f": "lena", "at": "14:00", "txt": "Naber, ne yaptın bugün"},
  {"t": "msg", "f": "zoe",  "at": "14:00", "txt": "Ethan'la kahvedeydik, Sara da vardı"},
  {"t": "msg", "f": "zoe",  "at": "14:01", "txt": "Fena değildi, o kadar kötü biri değilmiş"},
  {"t": "msg", "f": "lena", "at": "14:01", "txt": "Hmm, iyi bari"},
  {"t": "msg", "f": "zoe",  "at": "14:02", "txt": "Neyse akşam Ethan'dayım, sonra yazarım"},

  // ═══════════════════════════════════════════════════════════
  // SAHNE 2 — Zoe KENDİ yakalıyor (grup, canlı) — döngü kırılır
  // ═══════════════════════════════════════════════════════════
  {"t": "msg", "f": "zoe", "at": "21:15", "txt": "Kızlar çabuk bir şey soracağım", "gap": true},
  {"t": "msg", "f": "zoe", "at": "21:15", "txt": "Ethan mutfakta, hızlı yazıyorum"},
  {"t": "msg", "f": "zoe", "at": "21:16", "txt": "Az önce telefonuna bildirim geldi"},
  {"t": "msg", "f": "zoe", "at": "21:16", "txt": "Ben göremeden sildi, ekranda bir şey çaktı"},
  {"t": "msg", "f": "zoe", "at": "21:16", "txt": "\"İş, boş ver\" dedi, telefonu ters çevirdi"},
  {"t": "msg", "f": "zoe", "at": "21:17", "txt": "Ama o kadar hızlı sildi ki"},
  {"t": "msg", "f": "zoe", "at": "21:17", "txt": "Bakın normalde geçerdim bunu"},
  {"t": "msg", "f": "zoe", "at": "21:18", "txt": "Bu sefer geçemedim"},
  {"t": "msg", "f": "zoe", "at": "21:18", "txt": "İş mesajını insan böyle telaşla siler mi"},
  {"t": "msg", "f": "lena", "at": "21:18", "txt": "..."},
  {"t": "msg", "f": "lena", "at": "21:18", "txt": "Sen mi diyorsun bunu şimdi"},
  {"t": "msg", "f": "zoe", "at": "21:19", "txt": "Ethan geliyor, ne yapayım"},

  // ─── SEÇİM 1 — Zoe ne yapsın (mini-yüzleşme, 1/2) ───
  {
    "t": "choice",
    "at": "21:19",
    "options": [
      {
        "label": "A",
        "txt": "Sor, \"kimdi o\" de, tepkisini gör",
        "replies": [
          {"f": "zoe", "at": "21:20", "txt": "Sordum. Bir an durdu, \"iş arkadaşı\" dedi"}
        ]
      },
      {
        "label": "B",
        "txt": "Sus, belli etme, telefonu izle",
        "replies": [
          {"f": "zoe", "at": "21:20", "txt": "Sustum. Telefonu cebine attı, yanından ayırmıyor"}
        ]
      },
      {
        "label": "C",
        "txt": "Şaka gibi sor \"beni mi aldatıyorsun 😄\"",
        "replies": [
          {"f": "zoe", "at": "21:20", "txt": "Dedim. Gülmedi, garip baktı"}
        ]
      }
    ]
  },

  {"t": "msg", "f": "zoe", "at": "21:21", "txt": "Ama rahat değil, tuhaf davranıyor"},
  {"t": "msg", "f": "zoe", "at": "21:21", "txt": "Ne yapayım, bırakayım mı üsteleyeyim mi"},

  // ─── SEÇİM 2 — Zoe nasıl devam etsin (mini-yüzleşme, 2/2) — değişken sonuç ───
  {
    "t": "choice",
    "at": "21:21",
    "options": [
      {
        "label": "A",
        "txt": "Üstele, \"telefonu göster\" de",
        "replies": [
          {"f": "zoe", "at": "21:22", "txt": "Dedim. \"Saçmalama\" deyip güldü ama vermedi"},
          {"f": "zoe", "at": "21:22", "txt": "Gözüme de bakmadı bir kere"}
        ]
      },
      {
        "label": "B",
        "txt": "Bırak şimdi, sonra araştır",
        "replies": [
          {"f": "zoe", "at": "21:22", "txt": "Bıraktım şimdilik ama içimde taş gibi kaldı"},
          {"f": "zoe", "at": "21:22", "txt": "O rahatlamış gibi hemen konuyu değiştirdi"}
        ]
      },
      {
        "label": "C",
        "txt": "\"Bana güven vermiyorsun\" de",
        "replies": [
          {"f": "zoe", "at": "21:22", "txt": "\"Sen yine başladın\" dedi, ters çevirdi"},
          {"f": "zoe", "at": "21:22", "txt": "Ama gözünü kaçırdı, bakamadı bana"}
        ]
      }
    ]
  },

  // ─── ORTAK SONUÇ (hangi şık olursa olsun — Zoe kırılıyor, geri çekilmiyor) ───
  {"t": "msg", "f": "zoe", "at": "21:25", "txt": "Eskiden inanırdım kızlar"},
  {"t": "msg", "f": "zoe", "at": "21:25", "txt": "Ama artık inanmıyorum"},
  {"t": "msg", "f": "zoe", "at": "21:26", "txt": "İlk kez bu kadar eminim bir şey olduğuna"},

  // ═══════════════════════════════════════════════════════════
  // SAHNE 3 — Zoe → YOU itirafı (zoe_dm, gece) + cliffhanger
  // ═══════════════════════════════════════════════════════════
  {"t": "silence", "x": "aynı gece, geç saat"},
  {"t": "channel", "id": "zoe_dm", "divider": "Zoe · özel sohbet"},
  {"t": "msg", "f": "zoe", "at": "23:40", "txt": "Uyanık mısın"},
  {"t": "msg", "f": "zoe", "at": "23:41", "txt": "Lena'ya yazamadım, sana yazıyorum"},
  {"t": "msg", "f": "zoe", "at": "23:41", "txt": "Ona hâlâ küsüm"},
  {"t": "msg", "f": "zoe", "at": "23:42", "txt": "Ama içimde tutamıyorum"},
  {"t": "msg", "f": "zoe", "at": "23:42", "txt": "O bildirim aklımdan çıkmıyor"},
  {"t": "msg", "f": "zoe", "at": "23:43", "txt": "Aslında biliyorum bir şeyler olduğunu"},
  {"t": "msg", "f": "zoe", "at": "23:43", "txt": "Ama bakmak istemiyorum, anlıyor musun"},
  {"t": "msg", "f": "zoe", "at": "23:44", "txt": "Baksam her şey dağılacak"},

  // ─── SEÇİM 3 — YOU Zoe'ye (itirafa tepki) ───
  {
    "t": "choice",
    "at": "23:44",
    "options": [
      {
        "label": "A",
        "txt": "Yanındayım, hissettiklerin normal",
        "replies": [
          {"f": "zoe", "at": "23:44", "txt": "İyi ki varsın, Lena'ya soramazdım"}
        ]
      },
      {
        "label": "B",
        "txt": "Bakmaktan korkman zaten cevap değil mi",
        "replies": [
          {"f": "zoe", "at": "23:44", "txt": "Biliyorum ya... ama yüzleşmek zor"}
        ]
      },
      {
        "label": "C",
        "txt": "Ne gördün tam olarak, anlat",
        "replies": [
          {"f": "zoe", "at": "23:44", "txt": "O bildirim, silme hızı, gözünü kaçırması"}
        ]
      }
    ]
  },

  {"t": "msg", "f": "zoe", "at": "23:45", "txt": "Sen de bir şeyler biliyorsun galiba"},
  {"t": "msg", "f": "zoe", "at": "23:45", "txt": "Lena'yla bir şeyler konuşuyordunuz, hissediyorum"},
  {"t": "msg", "f": "zoe", "at": "23:46", "txt": "Varsa söyle, dürüst ol"},
  {"t": "msg", "f": "zoe", "at": "23:46", "txt": "Artık gerçeği kaldırabilirim"},

  // ─── SEÇİM 4 — YOU söyle/sus (★ ilk kez YOU bilgi taşıyor) — cliffhanger A/B ayrı ───
  {
    "t": "choice",
    "at": "23:47",
    "options": [
      {
        "label": "A",
        "txt": "Söyle, bilmen gereken bir şey var",
        "replies": [
          {"f": "you", "at": "23:47", "txt": "Zoe, sana bir şey söylemem lazım"},
          {"f": "you", "at": "23:47", "txt": "Lena boşuna şüphelenmiyordu"},
          {"f": "you", "at": "23:47", "txt": "Alex ağzından kaçırmış — Sara yıllardır Ethan'a ilgiliymiş"},
          {"f": "you", "at": "23:48", "txt": "Yeni iş arkadaşı değil yani, Ethan onu sana yanlış tanıttı"},
          {"f": "zoe", "at": "23:48", "txt": "..."},
          {"f": "zoe", "at": "23:49", "txt": "Yani en başından yalan"},
          {"f": "zoe", "at": "23:49", "txt": "\"Yeni tanıştık\" demişti bana, o da mı yalan"},
          {"f": "zoe", "at": "23:49", "txt": "Bir sürü şey yerine oturdu şimdi"},
          {"f": "zoe", "at": "23:50", "txt": "Teşekkür ederim, gerçekten"},
          {"f": "zoe", "at": "23:50", "txt": "Artık kaçmayacağım"},
          {"f": "zoe", "at": "23:51", "txt": "Yarın Ethan işe gidince, telefonunu her şeyini kontrol edeceğim"},
          {"f": "zoe", "at": "23:51", "txt": "Kendi gözümle göreceğim, ne varsa"}
        ]
      },
      {
        "label": "B",
        "txt": "Sus, kendin görmen lazım",
        "replies": [
          {"f": "you", "at": "23:47", "txt": "Sana bir şey söylemeyeceğim"},
          {"f": "you", "at": "23:47", "txt": "Çünkü benden duyman değil, kendin görmen lazım"},
          {"f": "zoe", "at": "23:48", "txt": "Haklısın"},
          {"f": "zoe", "at": "23:48", "txt": "Kimse söylemesin, ben kendim göreceğim"},
          {"f": "zoe", "at": "23:48", "txt": "Başkası söylerse yine kaçarım, biliyorum kendimi"},
          {"f": "zoe", "at": "23:49", "txt": "Ama kendim görürsem inkâr edemem"},
          {"f": "zoe", "at": "23:49", "txt": "Bu sefer bakacağım gerçekten"},
          {"f": "zoe", "at": "23:50", "txt": "Yarın Ethan işe gidince, telefonunu her şeyini kontrol edeceğim"},
          {"f": "zoe", "at": "23:51", "txt": "Sağ ol, konuşmak iyi geldi"}
        ]
      }
    ]
  },

];
