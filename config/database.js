const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  'monitoring_stok_db', // nama database
  'root',               // username default XAMPP
  '',                   // password default XAMPP (kosong)
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);

module.exports = sequelize;
