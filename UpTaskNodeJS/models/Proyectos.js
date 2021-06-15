const sequelize = require('sequelize');

const db = require('.../config/db');
const { Sequelize } = require('sequelize');
//proyectos es como se nombra la columna de la bd
const Proyectos = db.define('proyectos', {
  id : {
    type: Sequelize.INTEGER,
    primaryKey : true,
    autoIncrement: true
  },
  nombre : type: Sequelize.STRING,
  url : Sequelize.STRING
});

//Para poder importarlo
module.exports = Proyectos;