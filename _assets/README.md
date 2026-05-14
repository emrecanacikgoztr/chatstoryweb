# _assets/ — Görsel asset yapısı

Tüm görseller bu klasörde tutulur, projenin geri kalanından ayrı.

```
_assets/
├── characters/                ← master shot'lar (sezon boyunca sabit)
│   ├── zoe_master.png
│   ├── lena_master.png
│   ├── ethan_master.png
│   ├── alex_master.png
│   └── sara_master.png
│
└── episodes/
    └── ep01/
        └── images/            ← episode-specific üretilmiş görseller
            ├── lena_gym.jpg
            ├── zoe_cozy.jpg
            ├── twocups.jpg
            ├── alex.jpg
            └── twocups_seed.jpg   ← composition anchor (dokunma)
```

## Mantık

- **characters/**: Bir karakteri tanımlayan canon master shot. Bir kere belirle,
  sezon boyunca aynı kalır. Tüm episode generator'lar bu dosyalardan beslenir.
- **episodes/<ep>/images/**: O episode için üretilmiş oyun-içi görseller.
  Bunlar `_tools/<ep>_regen.py` ile üretilir.

## Yeni episode eklendiğinde

1. `_assets/episodes/ep02/images/` klasörünü oluştur
2. `_tools/ep02_regen.py` script'ini yaz (ep01_regen.py'yi template olarak kullan)
3. `episodes/ep02/script.js`'te URL'leri `../../_assets/episodes/ep02/images/...` formatında kullan
