const {tracksModel} = require('../models')
const { handleHttpError } = require('../utils/handleError');
const {matchedData} = require('express-validator');

/**
 * Obtener todos los tracks
 *
 * @param req
 * @param res
 */
// https://youtu.be/xRXHQlqA3Ak?t=21275
const getItems = async (req, res) => {
    try {
        const user = req.user;

        // const data = await tracksModel.find({});
        const data = await tracksModel.findAllData();
        res.send({data, user});
    } catch (e) {
        handleHttpError(res, 'ERROR_GET_ITEMS');
        console.log('ERROR_GET_ITEMS: ', e);
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
        const body = matchedData(req);
        const {id} = body;
        const data = await tracksModel.findById(id);
        res.send({data});
    } catch (e) {
        handleHttpError(res, 'ERROR_GET_ITEM');
    }
}

/**
 * Insertar un track
 *
 * @param req
 * @param res
 */
// https://youtu.be/xRXHQlqA3Ak?t=20684
const createItems = async (req, res) => {
    try {
        console.log('*************************');
        const body = matchedData(req);
        console.log('** BODY-TRACKS-PARSER **: ', body);
        const data = await tracksModel.create(body);
        res.send({data});
    } catch (e) {
        handleHttpError(res, 'ERROR_CREATE_ITEMS');
        console.log('ERROR_CREATE_ITEMS: ', e);
    }
}

/**
 * Actualizar un track
 *
 * @param req
 * @param res
 */
const updateItems = async (req, res) => {
    try {
        const {id, ...body} = matchedData(req);
        const data = await tracksModel.findOneAndUpdate(id, body);
        res.send({data});
    } catch (e) {
        handleHttpError(res, 'ERROR_UPDATE_ITEMS');
    }
}

/**
 * Eliminar un track
 * @param req
 * @param res
 */
const deleteItems = async (req, res) => {
    try {
        const body = matchedData(req);
        const {id} = body;

        // Borrado fisico
        // const data = await tracksModel.deleteOne({_id: id});

        // Borrado logico
        const data = await tracksModel.delete({_id: id});
        res.send({data});
    } catch (e) {
        handleHttpError(res, 'ERROR_DELETE_ITEM');
    }
}

module.exports = {getItems, getItem, createItems, updateItems, deleteItems};
