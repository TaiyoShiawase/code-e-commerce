const {DataTypes} = require('sequelize')
const instance = require('../dbconnection')

const product_details = instance.sequelize.define('product_details', {
    productDet_id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    productDet_uuid: {
      type: DataTypes.STRING,
      allowNull: false
    },
    filename: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    desc: {
      type: DataTypes.STRING,
    },
    type: {
      type: DataTypes.ENUM('Hoodie', 'Shirt'),
      allowNull: false
    },
    unit_price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    }
},{
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
    tableName: 'product_details'
})

exports.model = product_details