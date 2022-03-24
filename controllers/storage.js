const fs = require('fs');
const {storageModel} = require('../models')
const {handleHttpError} = require('../utils/handleError');
const {matchedData} = require('express-validator');

const PUBLIC_URL = process.env.PUBLIC_URL;
const MEDIA_PATH = `${__dirname}/../storage`;

/**
 * Obtener todos los tracks
 *
 * @param req
 * @param res
 */
const getItems = async (req, res) => {
    try {
        const data = await storageModel.find({});
        res.send({data});
    } catch (e) {
        handleHttpError(res, 'ERROR_LIST_ITEMs_STORAGE');
    }
}

/**
 * Obtner un track
 *
 * @param req
 * @param res
 */
const getItem = async (req, res) => {
    try {
        const {id} = matchedData(req);
        const data = await storageModel.findById(id);
        res.send({data});
    } catch (e) {
        handleHttpError(res, 'ERROR_DETAIL_ITEM_STORAGE');
    }
}

/**
 * Insertar un track
 *
 * @param req
 * @param res
 */
const createItem = async (req, res) => {
    const { file } = req;
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
const updateItems = async (req, res) => {}

/**
 * Eliminar un track
 *
 * @param req
 * @param res
 */
const deleteItem = async (req, res) => {
    try {
        const {id} = matchedData(req);
        const dataFile = await storageModel.findById(id);

        await storageModel.deleteOne({_id: id});

        const {filename} = dataFile;
        const filePath = `${MEDIA_PATH}/${filename}`;
        fs.unlinkSync(filePath);
        const data = {
            filePath,
            deleted: 1
        };
        res.send({data});
    } catch (e) {
        console.log('ERROR-STORAGE: ', e);
        handleHttpError(res, 'ERROR_DELETE_ITEM_STORAGE');
    }
}

module.exports = {getItems, getItem, createItem, updateItems, deleteItem};
