const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Riwayat = require('./riwayat');

const Barang = sequelize.define('Barang', {
  nama_barang: {
    type: DataTypes.STRING,
    allowNull: false
  },
  stok: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

Barang.hasMany(Riwayat);
Riwayat.belongsTo(Barang);

module.exports = Barang;
