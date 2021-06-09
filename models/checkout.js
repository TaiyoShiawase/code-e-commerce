const {DataTypes} = require('sequelize')
const instance = require('../dbconnection')


const checkout = instance.sequelize.define('checkouts', {
    checkout_id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    account_id: {
        type: DataTypes.BIGINT,
        allowNull: false
    }
},{
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
    tableName: 'checkouts',
    underscored: true
})

exports.model = checkout