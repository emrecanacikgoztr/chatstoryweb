# ChatStory Pipeline — TODO

## insta_overlay.py / Story UI Fixes

- [ ] **Reply bar ikonları eksik** — `render_instagram_story()` fonksiyonunda "Mesaj gönder…" kutusunun
  sağına ❤️ ve ✈️ (paper plane) ikonları eklenmeli. Şu an sağ taraf boş kalıyor.
  Etkilenen tüm story outputları yeniden render edilmeli:
  - `s1e6_c_sara_story` (v8 — onaylı raw, overlay yeniden üretilecek)
  - Projedeki diğer tüm `instagram_story` tipi beatler
  - `insta_overlay.py` L368-376 arası — `draw.rounded_rectangle` bloğuna ikon çizimi ekle

---

## Bekleyen Asset Değişiklikleri

- [ ] **Profile picture'lar çok AI görünüyor — yeniden üretilecek**
  Tüm karakterlerin (`_assets/characters/profile_pics/`) profil fotoğrafları fazla yapay/AI duruyor.
  Daha gerçekçi, influencer tarzı görüntülerle değiştirilecek.

---

## Hikaye & Senaryo Güncellemeleri

- [ ] **Zoe garson kazası sahnesi eklenecek**
  Zoe'nin sergide garsona çarpıp şarap döküldüğü anın fotoğrafı senaryoya entegre edilecek.
  **Kullanılacak Asset:** `_tools/outputs/s1e4_a_zoe_outfit/v15.jpg` (Seçildi ve onaylandı)
  Hikayeye bu sahne için yeni bir creative/flow eklenecek.

---

## Bekleyen Kararlar

- [ ] **`s1e4_a_ethan_message` — render yaklaşımı kararlaştırılacak**
  Ethan'ın Zoe'ye attığı DM screenshot'u. İki seçenek:
  - **HTML/CSS**: Engine içinde dinamik olarak render edilir, gerçekçi ve esnek
  - **Imaj**: Replicate ile üretilir, diğer beat'lerle tutarlı ama statik
  Karar sonrası üretim yapılacak.

## Bekleyen Finalize

- [ ] `s1e6_c_sara_story` v8 → `finalize.py --iter 8` (reply bar fix sonrası yapılacak)

