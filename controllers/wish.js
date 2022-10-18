const {wishModel, storageModel} = require('../models')
const {handleHttpError} = require("../utils/handleError");
const {matchedData} = require("express-validator");

const createItems = async (req, res) => {
    try {
        console.log('*************************');
        const body = matchedData(req);
        console.log('** BODY-TRACKS-PARSER **: ', body);
        const data = await wishModel.create(body);
        res.send({data});
    }catch (e) {
        handleHttpError(res, 'ERROR_CREATE_ITEMS');
        console.log('ERROR_CREATE_ITEMS: ', e);
    }
}

const getItems = async (req, res) => {
    try {
        // const data = await storageModel.find({});
        const data = await wishModel.findAll();
        res.send({data});
    } catch (e) {
        handleHttpError(res, 'ERROR_LIST_ITEMs_STORAGE');
        console.log('ERROR_LIST_ITEMs_STORAGE: ', e);
    }
}

module.exports = {createItems, getItems}
