const {connection} = require('../config/mysql')
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
        connection.query(
            "UPDATE `personas` SET `nombre` = ?, `avatar` = ?, `dni` = ?, `direccion` = ? WHERE `personas`.`id` = ?",
            [body.nombre, body.avatar, body.dni, body.direccion, id],
            (error, result) => {
                if (error){
                    //console.log(error);
                    res.send({message: 'Hubo un error al actualizar los datos de perfil'}, 404);
                } else {
                    //console.log(result);
                    res.send({message: 'Perfil actualizado correctamente'});
                }
            });

    } catch (e) {
        handleHttpError(res, 'ERROR_UPDATE_ITEMS');
        handleHttpError(e);
    }
}

module.exports = {updateItems}
