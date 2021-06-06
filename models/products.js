
'use strict';
module.exports = function(sequelize, DataTypes) {
  var Product = sequelize.define('Product', {
    productDet_id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
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
    },
    brand_id: {
      type: DataTypes.INTEGER
    }
  }, {
    underscored: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Product.belongsTo(models.Brands, {});
        Product.belongsTo(models.Cart, {});
      }
    }
  });
  return Product;
};
