module.exports = function (sequelize, DataTypes) {
  const stocks = sequelize.define(
    "stocks",
    {
      stock_id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      product_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {model: "products", key: "product_id",},
      },
      size: {
        type: DataTypes.ENUM("XS", "S", "M", "L", "XL"),
        allowNull: false,
      },
      availableStocks: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      createdAt: "created_at",
      updatedAt: "updated_at",
      deletedAt: "deleted_at",
      tableName: "stocks",
      underscored: true,
    }
  );
//   stocks.associate = (models) => {
//     stocks.belongsTo(models.products, {
//       foreignKey: "product_id",
//     });
//   };
  return stocks;
};
