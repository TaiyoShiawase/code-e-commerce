
// const {DataTypes} = require('sequelize')
// const instance = require('../dbconnection')

'use strict';
module.exports = function(sequelize, DataTypes) {
  var Brands = sequelize.define('Brands', {
    brand_id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    brand_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    underscored: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Brands.hasMany(models.Product, {
        onDelete: 'cascade'
        });
      }
    }
  });
  return Brands;
};
