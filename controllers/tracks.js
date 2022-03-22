const {tracksModel} = require('../models')

/**
 * Obtener todos los tracks
 *
 * @param req
 * @param res
 */
const getItems = async (req, res) => {
    const data = await tracksModel.find({});

    res.send({data});
}

/**
 * Obtner un track
 *
 * @param req
 * @param res
 */
const getItem = (req, res) => {}

/**
 * Insertar un track
 *
 * @param req
 * @param res
 */
const createItems = async (req, res) => {
    const { body } = req;
    console.log(body);

    const data = await tracksModel.create(body);

    res.send({data});
}
// https://youtu.be/xRXHQlqA3Ak?t=5738

/**
 * Actualizar un track
 *
 * @param req
 * @param res
 */
const updateItems = (req, res) => {}

/**
 * Eliminar un track
 *
 * @param req
 * @param res
 */
const deleteItems = (req, res) => {}

module.exports = {getItems, getItem, createItems, updateItems, deleteItems};
