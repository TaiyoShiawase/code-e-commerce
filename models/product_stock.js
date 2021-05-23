const {DataTypes} = require('sequelize')
const instance = require('../dbconnection')

const product_stocks = instance.sequelize.define('product_stocks', {
    productStock_id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    productDet_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    size: {
      type: DataTypes.ENUM('XS', 'S', 'M', 'L', 'XL'),
      allowNull: false
    },
    availableStocks: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
},{
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
    tableName: 'product_stocks'
})

exports.model = product_stocks