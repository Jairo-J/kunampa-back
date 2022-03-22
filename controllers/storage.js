const {storageModel} = require('../models')

const PUBLIC_URL = process.env.PUBLIC_URL;

/**
 * Obtener todos los tracks
 *
 * @param req
 * @param res
 */
const getItems = async (req, res) => {
    const data = await storageModel.find({});

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
const createItem = async (req, res) => {
    const { body, file } = req;
    console.log(file);
    const fileData = {
        filename: file.filename,
        url: `${PUBLIC_URL}/${file.filename}`
    }
    const data = await storageModel.create(fileData);

    res.send({data});
}

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

module.exports = {getItems, getItem, createItem, updateItems, deleteItems};
