const {sequelize} = require('../../config/mysql');
const {DataTypes} = require('sequelize');

const Wish = sequelize.define(
    'wish',
    {
        idCliente: {
            type: DataTypes.INTEGER
        },
        idFlor: {
            type: DataTypes.INTEGER
        }
    },
    {
        timestamps: true
    }
);

module.exports = Wish;
