#  Sistem Monitoring & Prediksi Stok Barang

Aplikasi web berbasis **Node.js** untuk memantau stok barang secara real-time serta melakukan **prediksi stok sederhana** menggunakan metode **Moving Average**.
Sistem ini dirancang untuk membantu pengambilan keputusan dalam manajemen persediaan.


##  Tujuan Aplikasi

- Monitoring stok barang secara visual
- Menampilkan status stok otomatis (Aman, Menipis, Kritis)
- Melakukan prediksi stok menggunakan algoritma matematis
- Menerapkan konsep **OOP**, **Async/Await**, dan **ORM Sequelize**
- Menggunakan database relasional (**One-to-Many**)
- Menyediakan antarmuka web sederhana menggunakan **EJS**


##  Teknologi yang Digunakan

- **Node.js**
- **Express.js**
- **EJS (Embedded JavaScript Template)**
- **Express EJS Layouts**
- **MySQL**
- **Sequelize ORM**
- **CSS (Custom UI)**
- **Async / Await**
- **Git & GitHub**


##  Fitur Utama

- ✅ CRUD Data Barang (Tambah, Edit, Hapus)
- ✅ Dashboard Monitoring Stok
- ✅ Status Stok Otomatis:
  - 🔥 Kritis (stok < 10)
  - ⚠️ Menipis (stok 10–19)
  - ✅ Aman (stok ≥ 20)
- ✅ Prediksi Stok menggunakan **Moving Average**
- ✅ UI berbasis Card yang responsif
- ✅ Database relasional menggunakan Sequelize
- ✅ Relasi **One-to-Many** (Barang → Riwayat)


##  Algoritma Prediksi (CPMK-1)

Metode **Moving Average** digunakan untuk menghitung prediksi stok berdasarkan data stok sebelumnya.

Rumus:

```
Moving Average = (Total stok historis) / (Jumlah data)
```

Metode ini sederhana namun efektif untuk menunjukkan penerapan algoritma matematis dalam sistem.


##  Struktur Folder

```
sistem-monitoring-prediksi-stok/
│
├── app.js
├── package.json
├── README.md
│
├── config/
│   └── database.js
│
├── models/
│   └── barang.js
│
├── routes/
│   └── index.js
│
├── views/
│   ├── layout.ejs
│   ├── home.ejs
│   ├── tambah.ejs
│   └── edit.ejs
│
└── public/css
    └── style.css
```


## Cara Instalasi & Menjalankan Aplikasi

### 1️ Clone Repository

```bash
git clone https://github.com/ahmadsyarafi09/sistem-monitoring-prediksi-stok.git
cd sistem-monitoring-prediksi-stok
```

### 2️ Install Dependency

```bash
npm install
```

### 3️ Konfigurasi Database

* Buat database MySQL:

```
monitoring_stok_db
```

* Atur koneksi di:

```
config/database.js
```

### 4️ Jalankan Server

```bash
node app.js
```

### 5️ Akses Aplikasi

```
http://localhost:3000
```



## 📊 Tampilan Aplikasi

* Dashboard Monitoring Stok
* Card Barang dengan Status Warna
* Tombol Tambah, Edit, dan Hapus Barang
* Tampilan Prediksi Stok
* UI sederhana dan responsif

##  Kontributor

* Ahmad Syarafi Alghaniy 251.0312.121 KELAS D

Program Studi Teknik Industri
Universitas Pembangunan Nasional “Veteran” Jakarta


## Catatan

Proyek ini dibuat sebagai **Proyek Akhir Pengganti UAS**
Mata Kuliah **Logika Pemrograman**
