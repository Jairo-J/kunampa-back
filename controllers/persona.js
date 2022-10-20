const {personaModel} = require('../models')
const { handleHttpError } = require('../utils/handleError');
const {matchedData} = require('express-validator');

/**
 * Actualizar un track
 *
 * @param req
 * @param res
 */
const updateItems = async (req, res) => {
    try {
        const {id, ...body} = matchedData(req);
        // const data = await personaModel.findOneAndUpdate(id, body);
        const data = await personaModel.update(body, {
            where: {
                id: id
            }
        });
        // TODO: Pendiente la documentacion y la validacion de cargar imagen
        res.send({data});
    } catch (e) {
        handleHttpError(res, 'ERROR_UPDATE_ITEMS');
    }
}

module.exports = {updateItems}
