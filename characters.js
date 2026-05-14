/**
 * ChatStory — Character Bible
 * Her karakter değişikliğinde bu dosyayı güncelle.
 * Script yazarken bu dosyaya bak.
 */

const CHARACTERS = {

  zoe: {
    name: 'Zoe',
    age: 29,
    job: 'Marka & Pazarlama',
    color: '#7b9ec9',
    physical: 'Orta boy, atletik değil ama obez de değil. Hep zayıflama konusu konuşuluyor. Koyu kahve saçlar, dağınık ama kasıtlı. Dudak kalemi asla eksik değil.',
    personality: 'Hafif şapşal, tatlı. Bir şeyi çok geç anlıyor ama anladığında en sert tepkiyi veriyor. Kötü niyetli insanlar dünyasında yaşamıyor — ruj izini şapşal olduğu için görmüyor. Sınırları yok, herkese evet diyor.',
    texting: 'Hızlı, yazım hatalı, kısa kısa mesajlar. Emoji abartılı. BÜYÜK HARF çok. "Haha" ile başlayan mesajlar genellikle ciddi. Sesli mesaj atıyor ama karışıyor.',
    role: 'Hikayenin duygusal merkezi. Her şey onun etrafında dönüyor ama o en son anlıyor.',
    secret: 'Aslında hissediyor ama bakmamayı seçiyor. Ethan\'la olmak "hayatı çözülmüş" hissi veriyor — 29 yaşında bunu kaybetmek istemiyor.',
  },

  lena: {
    name: 'Lena',
    age: 28,
    job: 'Avukat',
    color: '#d4845a',
    physical: 'Doğu Asyalı. Uzun boylu, ince, bakımlı. Uzun boylu olmasının femininitesine zarar verdiğini düşünüyor. Minimal makyaj, iyi ürünler. Göz altı morluğu, çok kahve içiyor.',
    personality: 'Dışarıdan soğuk, içeriden aşırı düşünen. Her şeyi analiz ediyor. Ethan meselesini ilk fark ediyor ama söyleyemiyor. Alex\'le kontrol edemediği bir his — Zoe onu hislerini yaşamaya itiyor.',
    texting: 'Düzgün yazar, yazım hatası yapmaz. Tam cümle, noktalama bile koyar. Emoji ölçülü. Sesli mesaj atmaz. Ama çok heyecanlanınca Zoe gibi yazmaya başlar — kendini ele verir.',
    role: 'Hikayenin zekası. Zoe\'nin görmediğini görüyor. Alex üzerinden Sara\'yı bulacak.',
    secret: 'Alex\'e Ethan meselesini anlatıyor. Kendi mutluluğu arkadaşının acısını ortaya çıkaracak.',
  },

  you: {
    name: 'You',
    age: null,
    job: null,
    color: '#a0c4a0',
    physical: null,
    personality: 'Sessiz üçüncü kişi. Zoe ve Lena\'nın arkadaşı.',
    texting: 'Sadece seçim noktalarında konuşuyor.',
    role: 'Oyuncu. Hikayeyi yönlendirmiyor — küçük anlarda etkisi var.',
    secret: null,
  },

  ethan: {
    name: 'Ethan',
    age: 35,
    job: 'Finans / Yatırım',
    color: '#68d391',
    physical: 'Yakışıklı ama gösterişsiz. İyi giyinir — casual ama pahalı. Güven veriyor.',
    personality: 'Karizmatik, stratejik. Her mesajı bir hamle. Odanın en sakin insanı. Zoe\'yi seviyor — gerçekten. Ama kendini durduramıyor.',
    texting: 'Az ama doğru zamanda yazıyor. Kısa, net, güven verici. Emoji yok. Geç cevap veriyor ama hesaplı.',
    role: 'Hiç görünmeyen merkez karakter. Sadece mesaj, sesli mesaj ve fotoğraf.',
    secret: 'Sara\'yla ne yaşadığı sezon sonuna kadar net değil. Kötü adam değil — sadece zayıf.',
  },

  alex: {
    name: 'Alex',
    age: 32,
    job: 'Creative Director — Reklam Ajansı',
    color: '#b794f4',
    physical: 'Uzun — Lena\'dan uzun. Yaratıcı sektör giyimi. Sosyal medyası mükemmel, gerçek hayatta daha sıradan.',
    personality: 'Çekici ama hesaplı. Zampara — her kadına özel hissettiriyor ama hepsine aynı şeyi yapıyor. Lena gibi mantıklı birini bile kandırabilecek biri.',
    texting: 'Kelime seçimleri iyi. Doğru uzunlukta mesajlar. Cevap süresi tutarsız — bu Lena\'yı çıldırtıyor.',
    role: 'Hikayenin katalizörü. Sara\'nın adının ortaya çıkmasının köprüsü.',
    secret: 'Ethan\'ı tanıyor. Lena\'ya gerçekten ilgi duyuyor mu? Sezon sonuna kadar net değil.',
  },

  sara: {
    name: 'Sara',
    age: 28,
    job: 'Finans — Ethan\'ın iş arkadaşı',
    color: '#f6ad55',
    physical: 'Zoe\'nin tam tersi. Daha ince, daha bakımlı, kurumsal güzel. Bir kez fark edince gözden kaçmıyor.',
    personality: 'Zekâsını göstermiyor — en güçlü silahı bu. Ne istediğini biliyor ve gidiyor.',
    texting: 'Hikayede doğrudan yazmıyor. Screenshot\'larda dolaylı görünüyor. Kısa, net, profesyonel. Emoji yok.',
    role: 'Görünmeyen tehdit. Bölüm 3\'e kadar sadece bir isim.',
    secret: 'Ethan\'ın ilişkili olduğunu biliyor. Ethan ona Zoe hakkında ne söyledi?',
  },

};

// Renk referansları (script yazarken kullan)
// lena  → #d4845a  (sol, turuncu)
// zoe   → #7b9ec9  (sol, mavi)
// you   → #a0c4a0  (sağ, yeşil)
// ethan  → #68d391  (sadece screenshot'larda)
// alex  → #b794f4  (ileriki bölümlerde)
// sara  → #f6ad55  (ileriki bölümlerde)
