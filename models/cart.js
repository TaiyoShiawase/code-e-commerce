
'use strict';
module.exports = function(sequelize, DataTypes) {
  var Cart = sequelize.define('Cart', {
    cart_id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    qty: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    perUnitprice: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    product_id: {
      type: DataTypes.INTEGER
    }
    
  }, {
    underscored: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Cart.hasMany(models.Product, {
          onDelete: 'cascade'
        });
      }
    }
  });
  return Product;
};
