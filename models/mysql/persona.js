const {sequelize} = require('../../config/mysql');
const {DataTypes} = require('sequelize');

const Persona = sequelize.define(
    'persona',
    {
        nombre: {
            type: DataTypes.STRING
        },
        avatar: {
            type: DataTypes.STRING
        },
        dni: {
            type: DataTypes.INTEGER
        },
        direccion: {
            type: DataTypes.STRING
        }
    },
    {
        timestamps: false
    }
);

module.exports = Persona;
