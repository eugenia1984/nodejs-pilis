const Sequelize = require('sequelize');
const db = new Sequelize('uptasknode', 'username', 'password', {
  host: '127.0.0.1',
  dialect: 'mysql',
  port: '3306 c'
  operatorsAliases: false,
  define: {
    timestamps: false
  },

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 1000
  },
});

module.exports = db;

//Si ya trabajas en un servidor:
//const sequelize = new Sequelize('postgress://user:pass@example.com:5432/dbname');