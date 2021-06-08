module.exports = function (sequelize, DataTypes) {
    const cart = sequelize.define(
      "cart",
      {
        cart_id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        product_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: { model: "products", key: "product_id" },
        },
        stock_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: { model: "stocks", key: "stock_id" },
        },
        size: {
            type: DataTypes.ENUM("XS", "S", "M", "L", "XL"),
            allowNull: false,
        },
        qty: {
            type: DataTypes.BIGINT,
            allowNull: false,
        }
    },{
        createdAt: "created_at",
        updatedAt: "updated_at",
        deletedAt: "deleted_at",
        tableName: "cart",
        underscored: true,
    });
    
    cart.associate = (models) => {
      cart.hasMany(models.products, {
        as: 'Products',
        foreignKey: "product_id",
        onDelete: "cascade",
      });

      cart.hasMany(models.stocks, {
        as: 'Stocks',
        foreignKey: "stock_id",
        onDelete: "cascade",
      });
    };

    return cart;
};
  