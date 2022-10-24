const {connection} = require('../config/mysql')
const { handleHttpError } = require('../utils/handleError');
const {matchedData} = require('express-validator');

/**
 * Actualizar un track
 *
 * @param req
 * @param res
 */
const getItems = async (req, res) => {
    try {
        const url_bse = process.env.PUBLIC_URL
        const {id} = matchedData(req);
        // pagina a buscar
        let {page} = req.query;
        page = (page) ? page : '1';
        const per_page = 10;
        pageSQL = (page > 0) ? (page-1)*per_page : 0;

        // total de registros
        let totalR = 0;
        // total de paginas
        let totalPaginas = 1;
        // Obtener el total de registros
        connection.query(
            "SELECT COUNT(*) AS totalR FROM (SELECT COUNT(compras.id) FROM compras INNER JOIN compra_flores ON compras.id = compra_flores.idCompra  WHERE compras.idCliente = ? GROUP BY compras.id) t;",
            [id],
            (error, result) => {
                if (error){
                    console.log(error);
                    res.status(404).send({message: 'Hubo un error al obtener los pediso de compra.'})
                    //res.send({message: 'Hubo un error al obtener los pediso de compra.'}, 404);
                } else {
                    //console.log(result);
                    totalR = result[0].totalR;
                    totalPaginas = Math.ceil(totalR / per_page);
                    //console.log({'total': totalR, 'paginasT': totalPaginas})

                    // Links de las paginas
                    let links = [];
                    for (let i = 1; i <= totalPaginas; i++ ){
                        links[i-1] = {
                            'url': url_bse + '/api/pedido/' + id + '?page=' + i,
                            'label': i,
                            'active': (page === i.toString())
                        };
                    }

                    // Obtener los registros
                    connection.query(
                        "SELECT `compras`.`id` AS `idPedido`, CONCAT('# ', `compras`.`id`, ' ',`compras`.`nombres`) AS `pedido`, `compras`.`created_at`, `compras`.`total`, `compra_flores`.`estado` FROM `compras` INNER JOIN `compra_flores` ON `compras`.`id` = `compra_flores`.`idCompra`  WHERE `compras`.`idCliente` = ? GROUP BY `compras`.`id` LIMIT ?,?",
                        [id, pageSQL, per_page],
                        (error, result) => {
                            if (error){
                                console.log(error);
                                res.status(404).send({message: 'Hubo un error al obtener los pediso de compra.'})
                                //res.send({message: 'Hubo un error al obtener los pediso de compra.'}, 404);
                            } else {
                                //console.log(result);

                                // res.send({'page': page, 'total': totalR, 'per_page': per_page,'data': result, 'links': links});
                                res.send({'total': totalR, 'per_page': per_page,'data': result, 'links': links});
                            }
                        });


                }
            });


        //res.send({id: id, 'param': page});

    } catch (e) {
        handleHttpError(res, 'ERROR_UPDATE_ITEMS');
        handleHttpError(e);
    }
}

module.exports = {getItems}
