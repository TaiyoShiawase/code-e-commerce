module.exports = function (sequelize, DataTypes) {
  const brands = sequelize.define(
    "brands",
    {
      brand_id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      brand_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      createdAt: "created_at",
      updatedAt: "updated_at",
      deletedAt: "deleted_at",
      tableName: "brands",  
      underscored: true,
    }
  );
  brands.associate = (models) => {
    brands.hasMany(models.products, {
      foreignKey: "brand_id",
    });
  };
  return brands;
};
