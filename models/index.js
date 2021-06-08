'use strict';

const fs = require('fs');
const path = require('path');
const {Sequelize, DataTypes} = require('sequelize');

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config, {logging: false,});
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config, {logging: false,});
}

// fs
//   .readdirSync(__dirname)
//   .filter(file => {
//     return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
//   })
//   .forEach(file => {
//     const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
//     db[model.name] = model;
//   });


const models = [
    require("./brand")(sequelize, DataTypes),
    require("./product")(sequelize, DataTypes),
    require("./stocks")(sequelize, DataTypes),
    require("./cart")(sequelize, DataTypes),
  ];  

// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });


models.forEach((model) => {
	db[model.name] = model;
});

models.forEach((model) => {
	if (db[model.name].associate) {
		db[model.name].associate(db);
	}
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
