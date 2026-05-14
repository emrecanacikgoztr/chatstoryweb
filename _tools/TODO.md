# ChatStory Pipeline — TODO

## insta_overlay.py / Story UI Fixes

- [ ] **Reply bar ikonları eksik** — `render_instagram_story()` fonksiyonunda "Mesaj gönder…" kutusunun
  sağına ❤️ ve ✈️ (paper plane) ikonları eklenmeli. Şu an sağ taraf boş kalıyor.
  Etkilenen tüm story outputları yeniden render edilmeli:
  - `s1e6_c_sara_story` (v8 — onaylı raw, overlay yeniden üretilecek)
  - Projedeki diğer tüm `instagram_story` tipi beatler
  - `insta_overlay.py` L368-376 arası — `draw.rounded_rectangle` bloğuna ikon çizimi ekle

---

## Bekleyen Finalize

- [ ] `s1e6_c_sara_story` v8 → `finalize.py --iter 8` (reply bar fix sonrası yapılacak)
