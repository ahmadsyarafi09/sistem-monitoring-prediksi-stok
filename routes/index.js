const express = require('express');
const router = express.Router();
const Barang = require('../models/barang');
const Riwayat = require('../models/riwayat');



// DASHBOARD (READ)
router.get('/', async (req, res) => {
  try {
    const dataBarang = await Barang.findAll();
    res.render('home', { barangs: dataBarang });
  } catch (error) {
    res.send(error);
  }
});



// FORM TAMBAH BARANG
router.get('/tambah', (req, res) => {
  res.render('tambah');
});



// SIMPAN DATA BARANG (CREATE)
router.post('/tambah', async (req, res) => {
  try {
    const { nama_barang, stok } = req.body;

    await Barang.create({
      nama_barang,
      stok
    });

    res.redirect('/');
  } catch (error) {
    res.send(error);
  }
});

//SIMPAN DATA RIWAYAT
router.get('/prediksi/:id', async (req, res) => {
  const barang = await Barang.findByPk(req.params.id, {
    include: Riwayat
  });

  const data = barang.Riwayats
    .slice(-3)
    .map(r => r.jumlah);

  let rataRata = 0;
  if (data.length > 0) {
    rataRata = data.reduce((a, b) => a + b, 0) / data.length;
  }

  res.render('prediksi', {
    barang,
    rataRata
  });
});



// FORM EDIT BARANG
router.get('/edit/:id', async (req, res) => {
  try {
    const barang = await Barang.findByPk(req.params.id);
    res.render('edit', { barang });
  } catch (error) {
    res.send(error);
  }
});



// PROSES UPDATE BARANG
router.post('/edit/:id', async (req, res) => {
  try {
    const { nama_barang, stok } = req.body;

    await Barang.update(
      { nama_barang, stok },
      { where: { id: req.params.id } }
    );

    res.redirect('/');
  } catch (error) {
    res.send(error);
  }
});

// HAPUS BARANG
router.get('/hapus/:id', async (req, res) => {
  try {
    await Barang.destroy({
      where: { id: req.params.id }
    });

    res.redirect('/');
  } catch (error) {
    res.send(error);
  }
});

// TAMBAH RIWAYAT STOK (stok masuk / keluar)
router.post('/barang/:id/riwayat', async (req, res) => {
  try {
    const barang = await Barang.findByPk(req.params.id);

    if (!barang) {
      return res.send('Barang tidak ditemukan');
    }

    const jumlah = parseInt(req.body.jumlah);

    await Riwayat.create({
      jumlah: jumlah,
      barangId: barang.id
    });

    barang.stok += jumlah;
    await barang.save();

    res.redirect('/');
  } catch (error) {
    res.send(error);
  }
});

// RELASI
Barang.hasMany(Riwayat, { foreignKey: 'barangId', onDelete: 'CASCADE' });
Riwayat.belongsTo(Barang, { foreignKey: 'barangId' });

module.exports = {
  Barang,
  Riwayat
};


module.exports = router;
