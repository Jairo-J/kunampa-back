const {matchedData} = require("express-validator");
const {encrypt, compare} = require("../utils/handlePassword");
const {usersModel} = require("../models");
const {tokenSign} = require("../utils/handleJwt");
const {handleHttpError} = require("../utils/handleError");

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const registerCtrl = async (req, res) => {
    try {
        req = matchedData(req);
        const passwordHash = await encrypt(req.password);
        const body = {...req, password: passwordHash};
        const dataUser = await usersModel.create(body);
        dataUser.set('password', undefined, {strict: false});

        const data = {
            token: await tokenSign(dataUser),
            user: dataUser
        };

        res.send({data});
    } catch (e) {
        handleHttpError(res, 'ERROR_REGISTER_USER')
    }
}

/**
 *
 * @param req
 * @param res
 */
const loginCtrl = async (req, res) => {
    try {
        req = matchedData(req);
        const user = await usersModel.findOne({email: req.email}).select('password name role email');

        if (!user) {
            handleHttpError(res, 'USER_NOT_EXISTS', 404);
            return
        }

        const hashPassword = user.password;
        const check = await compare(req.password, hashPassword);

        user.set('password', undefined, {strict: false});

        if (!check) {
            handleHttpError(res, 'PASSWORD_INVALID', 401);
            return
        }

        const data = {
            token: await tokenSign(user),
            user
        };

        res.send({data});

    } catch (e) {
        handleHttpError(res, 'ERROR_LOGIN_USER');
        console.log('ERROR_LOGIN_USER: ', e);
    }
}

module.exports = {loginCtrl, registerCtrl};
