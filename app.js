const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const sequelize = require('./config/database');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('layout', 'layout');
app.use(express.static('public'));

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// routes
const indexRoutes = require('./routes');
app.use('/', indexRoutes);

sequelize.authenticate()
  .then(() => {
    console.log('Database connected!');
  })
  .catch(err => {
    console.error('Database error:', err);
  });

  const Barang = require('./models/barang');
  const Riwayat = require('./models/riwayat');

Barang.hasMany(Riwayat);
Riwayat.belongsTo(Barang);

sequelize.sync()
  .then(() => {
    console.log('Tabel berhasil dibuat');
  });


// jalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
