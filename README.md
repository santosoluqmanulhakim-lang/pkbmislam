# Portal PKBM Indonesia — Proyek Astro

Website informasi seputar PKBM (Pusat Kegiatan Belajar Masyarakat) berbasis Astro.

## Struktur Proyek

```
src/
├── content/
│   ├── blog/               ← Tambah artikel baru di sini (.md)
│   ├── pkbm-profil/        ← Tambah profil PKBM di sini (.md)
│   └── config.ts           ← Skema/validasi konten
├── layouts/
│   └── BaseLayout.astro    ← Layout utama (navbar, footer, SEO)
├── pages/
│   ├── index.astro         ← Beranda
│   ├── program.astro       ← Halaman Program
│   ├── pendirian.astro     ← Cara mendirikan PKBM
│   ├── faq.astro           ← FAQ
│   ├── kontak.astro        ← Kontak
│   ├── blog/
│   │   ├── index.astro     ← Daftar artikel
│   │   └── [slug].astro    ← Detail artikel (otomatis)
│   ├── profil-pkbm/
│   │   ├── index.astro     ← Daftar profil PKBM
│   │   └── [slug].astro    ← Detail profil (otomatis)
│   └── rss.xml.js          ← RSS Feed
public/
└── robots.txt
```

## Cara Menjalankan

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build untuk produksi
npm run build

# Preview hasil build
npm run preview
```

## Menambah Artikel Blog

Buat file baru di `src/content/blog/nama-artikel.md`:

```markdown
---
title: "Judul Artikel"
description: "Deskripsi singkat (untuk SEO dan preview)"
pubDate: 2025-03-01
author: "Nama Penulis"
tags: ["PKBM", "tag-lain"]
---

Isi artikel di sini menggunakan Markdown...
```

## Menambah Profil PKBM

Buat file baru di `src/content/pkbm-profil/nama-pkbm.md`:

```markdown
---
nama: "Nama PKBM"
kota: "Kota"
provinsi: "Provinsi"
tahunBerdiri: 2020
program: ["Paket A", "Paket C"]
deskripsi: "Deskripsi singkat PKBM"
keunggulan:
  - "Keunggulan 1"
  - "Keunggulan 2"
website: "https://..."  # opsional
---

Profil lengkap dalam Markdown...
```

## Deploy ke Vercel / Netlify

### Vercel
1. Push ke GitHub
2. Import repo di vercel.com
3. Framework: Astro (otomatis terdeteksi)
4. Deploy

### Netlify
1. Push ke GitHub
2. Import repo di app.netlify.com
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy

### Cloudflare Pages
1. Push ke GitHub
2. Buat project baru di pages.cloudflare.com
3. Build command: `npm run build`
4. Build output directory: `dist`

## SEO Checklist

- [ ] Ganti `site` di `astro.config.mjs` dengan domain Anda
- [ ] Update `robots.txt` dengan URL domain Anda
- [ ] Daftarkan sitemap ke Google Search Console: `https://domain.com/sitemap-index.xml`
- [ ] Buat akun Google Search Console dan verifikasi kepemilikan domain
- [ ] Tambahkan Google Analytics atau Umami (opsional)

## Kustomisasi Warna

Edit CSS variables di `src/layouts/BaseLayout.astro`:

```css
:root {
  --clr-primary: #1a6b3a;      /* Hijau utama */
  --clr-accent: #d4a017;       /* Emas/kuning aksen */
  /* ... */
}
```
