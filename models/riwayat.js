const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Riwayat = sequelize.define('Riwayat', {
  jumlah: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  barangId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = Riwayat;
