const MESSAGES = [

  // ═══════════════════════════════════════════════════════════
  // SAHNE 1 — Çaresizlik + blöf planı (lena_dm) + SEÇİM 1
  // ═══════════════════════════════════════════════════════════
  {"t": "channel", "id": "lena_dm", "divider": "Lena · özel sohbet"},
  {"t": "msg", "f": "lena", "at": "20:00", "txt": "Zoe'yi kaybediyoruz, hiçbir kanıt işe yaramıyor"},
  {"t": "msg", "f": "lena", "at": "20:00", "txt": "Ne göstersem \"Sara iyi biri\" diyor, kabullenmiyor"},
  {"t": "msg", "f": "lena", "at": "20:01", "txt": "Klasik yollar tıkandı resmen"},
  {"t": "msg", "f": "lena", "at": "20:01", "txt": "Aklıma çılgın bir şey geldi ama çok riskli"},
  {"t": "msg", "f": "lena", "at": "20:02", "txt": "Sara'ya gideceğim, Zoe'den nefret ediyormuş gibi yapacağım"},
  {"t": "msg", "f": "lena", "at": "20:02", "txt": "Bana kazık attı ve intikam istiyormuşum gibi"},
  {"t": "msg", "f": "lena", "at": "20:02", "txt": "Sonra \"Zoe'yle Ethan seni kullanıyor\" diyeceğim"},
  {"t": "msg", "f": "lena", "at": "20:03", "txt": "Sen ne dersin, deneyeyim mi?"},

  // ─── SEÇİM 1 — YOU (blöf riski) ───
  {
    "t": "choice",
    "at": "20:03",
    "options": [
      {"label": "A", "txt": "Dene, kaybedecek bir şey kalmadı", "replies": [
        {"f": "lena", "at": "20:03", "txt": "Tamam, ellerim titriyor ama yapıyorum"}
      ]},
      {"label": "B", "txt": "Riskli, ya Zoe'ye söylerse", "replies": [
        {"f": "lena", "at": "20:03", "txt": "Zaten Zoe'yi kaybettik, söylerse de durum aynı, o yüzden deneyeceğim"}
      ]}
    ]
  },

  // ═══════════════════════════════════════════════════════════
  // SAHNE 2 — İntikamcı blöf (blof_grup: Lena, Sen, Sara) + SEÇİM 2
  // ═══════════════════════════════════════════════════════════
  {"t": "silence", "x": "az sonra"},
  {"t": "channel", "id": "blof_grup", "divider": "Lena bir grup oluşturdu: Lena, Sen & Sara"},
  {"t": "msg", "f": "lena", "at": "20:05", "txt": "Sara selam"},
  {"t": "msg", "f": "lena", "at": "20:05", "txt": "Çok saçma gelecek biliyorum, hiç yazışmadık bile"},
  {"t": "msg", "f": "lena", "at": "20:05", "txt": "Yazsam mı diye baya bekledim ama işte, yazdım sonunda"},
  {"t": "msg", "f": "sara", "at": "20:06", "txt": "Evet, tanıyorum seni tabii, Zoe'nin arkadaşısın"},
  {"t": "msg", "f": "lena", "at": "20:06", "txt": "Öyleydim, daha doğrusu eskiden"},
  {"t": "msg", "f": "lena", "at": "20:07", "txt": "Bana çok kötü bir şey yaptı, detayına girmek istemiyorum"},
  {"t": "msg", "f": "lena", "at": "20:07", "txt": "Ama o kadar canımı yaktı ki, cidden çok üzdü beni"},
  {"t": "msg", "f": "lena", "at": "20:07", "txt": "Açık söyleyeyim, ondan intikam alacağım"},
  {"t": "msg", "f": "lena", "at": "20:07", "txt": "Ve tam da bu yüzden sana bunu yazıyorum"},
  {"t": "msg", "f": "sara", "at": "20:07", "txt": "?"},
  {"t": "msg", "f": "lena", "at": "20:08", "txt": "Zoe'yle Ethan seni konuşmuşlar aralarında"},
  {"t": "msg", "f": "lena", "at": "20:08", "txt": "Ethan seninle takılsın diye Zoe göz yumuyormuş"},
  {"t": "msg", "f": "lena", "at": "20:08", "txt": "İlişkileri renklensin, Ethan sıkılmasın diye işte"},
  {"t": "msg", "f": "lena", "at": "20:08", "txt": "Sen onlar için öyle... gelip geçici birisin yani"},
  {"t": "msg", "f": "lena", "at": "20:08", "txt": "Bize sürekli senden bahsedip dalga bile geçiyorlar"},

  // ─── SEÇİM 2 — YOU (blöfü ne kadar zorlayalım) ───
  {
    "t": "choice",
    "at": "20:08",
    "options": [
      {"label": "A", "txt": "Zoe \"harcanabilir\" dedi senin için, aynen böyle", "replies": [
        {"f": "sara", "at": "20:09", "txt": "Saçmalık, kim yer bunu ya"}
      ]},
      {"label": "B", "txt": "İnanmıyorsan Ethan'ın yüzüne bak, anlarsın", "replies": [
        {"f": "sara", "at": "20:09", "txt": "Ne Zoe'yi tanıyorum ne sizi, rahat bırakın"}
      ]}
    ]
  },

  {"t": "msg", "f": "sara", "at": "20:10", "txt": "Kafayı yemişsiniz hepiniz"},
  {"t": "silence", "x": "Sara gruptan ayrıldı"},

  // ─── S2 kapanış — Lena → Sen (lena_dm'e dönüş) ───
  {"t": "channel", "id": "lena_dm", "divider": "Lena · özel sohbet"},
  {"t": "msg", "f": "lena", "at": "20:11", "txt": "gördün mü, \"saçmalık\" dedi ama hepsini okudu"},
  {"t": "msg", "f": "lena", "at": "20:11", "txt": "Yedi bunu bence, şimdi soluğu Zoe'de alır"},

  // ═══════════════════════════════════════════════════════════
  // SAHNE 3 — Sara tezgahı ifşa ediyor + fotolar + SEÇİM 3 + cliffhanger
  // ═══════════════════════════════════════════════════════════
  {"t": "silence", "x": "birkaç saat sonra"},
  {"t": "channel", "id": "group", "divider": "Zoe, Lena & Sen"},
  {"t": "msg", "f": "zoe", "at": "22:15", "txt": "İnanamıyorum neler oluyor", "gap": true},
  {"t": "msg", "f": "zoe", "at": "22:15", "txt": "Sara birden bana yazdı, resmen çıldırdım"},
  {"t": "msg", "f": "zoe", "at": "22:15", "txt": "Elim ayağım titriyor, ne cevap vereceğimi bilemedim"},
  {"t": "msg", "f": "zoe", "at": "22:16", "txt": "Bakın ne attı"},
  // Sara'nın Zoe'ye attığı nefret mesajları SS (Zoe forward ediyor)
  {"t": "photo", "f": "zoe", "at": "22:16", "url": "../../_assets/episodes/ep13/images/s1e13_sara_mesaj_ss.jpg", "cap": ""},
  // Sara'nın "kanıt" olarak attığı Ethan & Sara ayna fotosu (Zoe forward ediyor)
  {"t": "photo", "f": "zoe", "at": "22:16", "url": "../../_assets/episodes/ep13/images/s1e13_sara_ethan_ayna.jpg", "cap": ""},
  {"t": "msg", "f": "zoe", "at": "22:16", "txt": "..."},
  {"t": "msg", "f": "zoe", "at": "22:16", "txt": "Bu foto Ethan'ın evi, şu kanepe onun"},
  {"t": "msg", "f": "zoe", "at": "22:17", "txt": "\"Oldu, bir kez de değil\" ..."},
  {"t": "msg", "f": "zoe", "at": "22:18", "txt": "Aylardır gözümün içine baka baka yalan söylemiş"},
  {"t": "msg", "f": "zoe", "at": "22:18", "txt": "Ama durun"},
  {"t": "msg", "f": "zoe", "at": "22:18", "txt": "\"Arkadaşların grup kurup saldırdı\" ne demek"},
  {"t": "msg", "f": "zoe", "at": "22:19", "txt": "Lena? Sara'ya siz mi yazdınız"},
  {"t": "msg", "f": "zoe", "at": "22:19", "txt": "Arkamdan ne yaptınız siz"},

  // ─── SEÇİM 3 — YOU (Zoe tezgahı öğrendi) ───
  {
    "t": "choice",
    "at": "22:19",
    "options": [
      {"label": "A", "txt": "Blöftü, evet. Ama foto gerçek çıktı, seni uyandırmanın tek yolu buydu", "replies": [
        {"f": "zoe", "at": "22:20", "txt": "Bana yalan söyleyerek mi... kafam almıyor"}
      ]},
      {"label": "B", "txt": "Sadece gerçeği görmen içindi, seni asla incitmek istemedik", "replies": [
        {"f": "zoe", "at": "22:20", "txt": "İyi niyetmiş, arkamdan iş çevirmişsiniz yine de"}
      ]}
    ]
  },

  {"t": "msg", "f": "zoe", "at": "22:22", "txt": "Kafam çok karışık, hem Ethan hem siz"},
  {"t": "msg", "f": "zoe", "at": "22:22", "txt": "Bu iş bu gece bitecek, hepinizle konuşacağım"},

  // ─── CLIFFHANGER — Lena → Sen (lena_dm) ───
  {"t": "channel", "id": "lena_dm", "divider": "Lena · özel sohbet"},
  {"t": "msg", "f": "lena", "at": "22:23", "txt": "Zoe öğrendi... Ethan'ı da bizi de"},
  {"t": "msg", "f": "lena", "at": "22:23", "txt": "Bu gece her şey masaya yatacak"},

];
