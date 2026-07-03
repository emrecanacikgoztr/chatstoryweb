const MESSAGES = [

  // ═══════════════════════════════════════════════════════════
  // SAHNE 1 — Ethan yüzleşmesi + ayrılık (group) + SEÇİM 1, 2
  // Ethan mesajları: Zoe grupta canlı aktarıyor (asset yok)
  // ═══════════════════════════════════════════════════════════
  {"t": "channel", "id": "group", "divider": "Zoe, Lena & Sen"},
  {"t": "msg", "f": "zoe", "at": "22:30", "txt": "Ethan'a yazdım, ellerim titriyor ama yapıyorum", "gap": true},
  {"t": "msg", "f": "zoe", "at": "22:30", "txt": "Yanımda kalın olur mu, ona her şeyi soracağım"},
  {"t": "msg", "f": "zoe", "at": "22:31", "txt": "Fotoyu suratına attım, bak ne diyor"},
  {"t": "msg", "f": "zoe", "at": "22:31", "txt": "\"o foto çok eski ya, ne alaka şimdi\" diyor"},
  {"t": "msg", "f": "zoe", "at": "22:31", "txt": "\"Sara manyağın teki, sana kafa buluyor\""},
  {"t": "msg", "f": "zoe", "at": "22:32", "txt": "\"sen beni tanımıyor musun cidden\" falan"},
  {"t": "msg", "f": "zoe", "at": "22:32", "txt": "Yine aynı, her şeyi tersine çeviriyor"},

  // ─── SEÇİM 1 — YOU (Zoe'yi nasıl yönlendirelim) ───
  {
    "t": "choice",
    "at": "22:32",
    "options": [
      {"label": "A", "txt": "Kanıtları tek tek say, kaçamasın", "replies": [
        {"f": "zoe", "at": "22:33", "txt": "Kanıtları tek tek saydım, kaçış bırakmadım"},
        {"f": "zoe", "at": "22:33", "txt": "Fotodaki kanepe senin dedim, Sara \"bir kez değil\" diyor dedim"},
        {"f": "zoe", "at": "22:33", "txt": "\"İş arkadaşı\" dediğin kadın bu Ethan dedim"},
        {"f": "zoe", "at": "22:34", "txt": "Sıkıştı, cevabı: \"tamam... bir kere oldu, bir hata yaptım\""}
      ]},
      {"label": "B", "txt": "Direkt ayrıl, başka bir şey deme", "replies": [
        {"f": "zoe", "at": "22:33", "txt": "Hiçbir şey yazmadım. Öylece bekledim"},
        {"f": "zoe", "at": "22:33", "txt": "\"neden susuyorsun öyle\" dedi, \"Zoe?\" dedi"},
        {"f": "zoe", "at": "22:34", "txt": "Sessizlik uzayınca patladı: \"tamam... bir kere oldu, bir hata yaptım\""}
      ]}
    ]
  },

  // ─── ortak devam (convergence) ───
  {"t": "msg", "f": "zoe", "at": "22:35", "txt": "Bir de \"sana hislerim gerçek, Sara bir hiçti\" diyor"},
  {"t": "msg", "f": "zoe", "at": "22:35", "txt": "\"Bir kez\" ha. Sara \"bir kez değil\" diyor"},
  {"t": "msg", "f": "zoe", "at": "22:35", "txt": "İkiniz de yalancısınız, birbirinize yakışıyorsunuz dedim"},
  {"t": "msg", "f": "zoe", "at": "22:36", "txt": "Bitti Ethan, ayrılıyoruz dedim"},
  {"t": "msg", "f": "zoe", "at": "22:36", "txt": "Şimdi de \"Zoe lütfen böyle gitme, konuşalım\" diye yalvarıyor"},

  // ─── SEÇİM 2 — YOU (Ethan'ın son yalvarışı, canon: cevap görünmez) ───
  {
    "t": "choice",
    "at": "22:37",
    "options": [
      {"label": "A", "txt": "Cevap verme, hak etmiyor", "replies": [
        {"f": "zoe", "at": "22:38", "txt": "Cevap vermedim. Telefonu bıraktım"}
      ]},
      {"label": "B", "txt": "Tek kelime et, kapat", "replies": [
        {"f": "zoe", "at": "22:38", "txt": "Yazmaya başladım... sonra sildim. Telefonu kapattım"}
      ]}
    ]
  },

  {"t": "msg", "f": "zoe", "at": "22:39", "txt": "Kapattım. Ona bir kelime bile fazla"},
  {"t": "msg", "f": "zoe", "at": "22:39", "txt": "İçim garip bir şekilde rahat şimdi"},

  // ═══════════════════════════════════════════════════════════
  // SAHNE 2 — Tezgah hesabı + barışma (group) + SEÇİM 3
  // ═══════════════════════════════════════════════════════════
  {"t": "silence", "x": "biraz sonra"},
  {"t": "msg", "f": "zoe", "at": "22:45", "txt": "Tamam, Ethan bitti"},
  {"t": "msg", "f": "zoe", "at": "22:45", "txt": "Ama bir de sizinle konuşacağım"},
  {"t": "msg", "f": "zoe", "at": "22:46", "txt": "Sara'ya o grubu kurup yazan gerçekten siz miydiniz"},
  {"t": "msg", "f": "lena", "at": "22:46", "txt": "Evet. Ben kurdum, o blöfü ben yaptım"},
  {"t": "msg", "f": "lena", "at": "22:46", "txt": "Kızmakta haklısın ama başka yol kalmamıştı"},
  {"t": "msg", "f": "zoe", "at": "22:47", "txt": "Arkamdan iş çevirdiniz, bana söylemeden"},
  {"t": "msg", "f": "zoe", "at": "22:47", "txt": "Aylardır beni koruduğunuzu söyleyip yalan attınız"},

  // ─── SEÇİM 3 — YOU (kendini nasıl savunursun) ───
  {
    "t": "choice",
    "at": "22:47",
    "options": [
      {"label": "A", "txt": "Sana yüz kere gerçeği gösterdik, inanmadın. Tek yol buydu", "replies": [
        {"f": "zoe", "at": "22:48", "txt": "Biliyorum... ben inanmak istemedim"}
      ]},
      {"label": "B", "txt": "Yalan attık evet, ama seni kaybetmemek için", "replies": [
        {"f": "zoe", "at": "22:48", "txt": "Kaybetmek mi... asıl ben sizi itmişim"}
      ]}
    ]
  },

  {"t": "msg", "f": "zoe", "at": "22:49", "txt": "Aslında hep biliyordum, değil mi"},
  {"t": "msg", "f": "zoe", "at": "22:49", "txt": "Siz gördünüz diye kızdım, çünkü yüzleşmek istemedim"},
  {"t": "msg", "f": "zoe", "at": "22:50", "txt": "Lena... seni Sara için itmiştim. Özür dilerim"},
  {"t": "msg", "f": "lena", "at": "22:50", "txt": "Boşver şimdi onları. Buradayım işte, hep buradaydım"},
  {"t": "msg", "f": "zoe", "at": "22:51", "txt": "Sizi kaybetmediğim için şanslıyım"},
  {"t": "msg", "f": "lena", "at": "22:51", "txt": "Eski üçlü geri döndü sayılır 🤍"},

  // ═══════════════════════════════════════════════════════════
  // SAHNE 3 — YOU ↔ Sara hesaplaşması (sara_dm → group) + SEÇİM 4
  // ═══════════════════════════════════════════════════════════
  {"t": "silence", "x": "gece ilerlerken"},
  {"t": "channel", "id": "sara_dm", "divider": "Sara · özel sohbet"},
  {"t": "msg", "f": "sara", "at": "23:10", "txt": "Mutlu musunuz?"},
  {"t": "msg", "f": "sara", "at": "23:10", "txt": "Ethan'ı benden kopardınız, o benim tek şansımdı"},
  {"t": "msg", "f": "sara", "at": "23:11", "txt": "Herkes bir şey kazandı, ben yine yapayalnız kaldım"},

  // ─── SEÇİM 4 — YOU (Sara'ya karşılık) ───
  {
    "t": "choice",
    "at": "23:11",
    "options": [
      {"label": "A", "txt": "Kimse elinden almadı, zaten senin değildi", "replies": [
        {"f": "sara", "at": "23:12", "txt": "Ben istediğimi alırım, hep aldım. Göreceksiniz"}
      ]},
      {"label": "B", "txt": "Zoe'ye bir daha yaklaşma, bitti", "replies": [
        {"f": "sara", "at": "23:12", "txt": "Sen kim oluyorsun bana sınır koyan! Ethan o salak Zoe'ye fazlaydı zaten"}
      ]}
    ]
  },

  {"t": "msg", "f": "sara", "at": "23:13", "txt": "Yıllarımı verdim ben ona, siz bir gecede batırdınız"},
  {"t": "msg", "f": "sara", "at": "23:13", "txt": "Nefret ediyorum hepinizden"},
  {"t": "msg", "f": "sara", "at": "23:14", "txt": "Ama ben pes etmem, intikamımı almadan durmam"},
  {"t": "msg", "f": "sara", "at": "23:14", "txt": "Bunu aklınızda tutun."},
  {"t": "silence", "x": "Sara çevrimdışı"},

  {"t": "channel", "id": "group", "divider": "Zoe, Lena & Sen"},
  {"t": "msg", "f": "zoe", "at": "23:15", "txt": "Sara sana da mı yazdı? Ne dedi"},
  {"t": "msg", "f": "zoe", "at": "23:15", "txt": "Boşver, o kadını hayatımdan sildim"},

  // ═══════════════════════════════════════════════════════════
  // SAHNE 4 — Kapanış (group, seçimsiz) — SEZON FİNALİ
  // ═══════════════════════════════════════════════════════════
  {"t": "silence", "x": "gecenin sonu"},
  {"t": "msg", "f": "zoe", "at": "23:20", "txt": "İçim hem bomboş hem tuhaf bir şekilde hafif"},
  {"t": "msg", "f": "zoe", "at": "23:20", "txt": "Aylardır ilk kez rahat nefes alıyorum"},
  {"t": "msg", "f": "lena", "at": "23:21", "txt": "Atlattın işte. En kötüsü geride kaldı"},
  {"t": "msg", "f": "zoe", "at": "23:21", "txt": "Sizi dinlemem aylar sürdü, özür dilerim"},
  {"t": "msg", "f": "zoe", "at": "23:22", "txt": "Sen olmasan bugüne asla gelemezdim"},
  {"t": "msg", "f": "zoe", "at": "23:24", "txt": "Yarın yeni bir gün. Yeni bir sayfa"},
  {"t": "msg", "f": "lena", "at": "23:24", "txt": "Üçümüz yine buradayız, hep olduğu gibi 🤍"},
  {"t": "msg", "f": "zoe", "at": "23:25", "txt": "İyi geceler canlarım"},

];
