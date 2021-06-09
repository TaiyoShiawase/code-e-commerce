module.exports = function (sequelize, DataTypes) {
  const products = sequelize.define(
    "products",
    {
      product_id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      brand_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: { model: "brands", key: "brand_id" },
      },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        desc: {
          type: DataTypes.STRING,
        },
        type: {
          type: DataTypes.ENUM("Hoodie", "Shirt"),
          allowNull: false,
        },
        unit_price: {
          type: DataTypes.DECIMAL(10, 2),
          allowNull: false,
        },
      },
    {
      createdAt: "created_at",
      updatedAt: "updated_at",
      deletedAt: "deleted_at",
      tableName: "products",
      underscored: true,
    }
  );
  products.associate = (models) => {
    products.hasMany(models.stocks, {
      foreignKey: "stock_id",
      onDelete: "cascade",
    });
    products.belongsTo(models.brands, {
      foreignKey: "brand_id",
      onDelete: "cascade",
    });
  };
  return products;
};
