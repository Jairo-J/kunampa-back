const jwt = require('jsonwebtoken');
const getProperties = require('../utils/handlePropertiesEngine');

const JWT_SECRET = process.env.JWT_SECRET;
const propertiesKey = getProperties();

/**
 *
 * @param user
 * @returns {Promise<*>}
 */
const tokenSign = async (user) => {
    return jwt.sign({
        _id: user._id,
        role: user.role
    }, JWT_SECRET, {
        expiresIn: '2h'
    });
}

/**
 *
 * @param tokenJwt
 * @returns {Promise<null|*>}
 */
const verifyToken = async (tokenJwt) => {
    try {
        return jwt.verify(tokenJwt, JWT_SECRET);
    } catch (e) {
        console.log('ERROR-VERIFY-TOKEN: ', e);
        return null;
    }
}

module.exports = {tokenSign, verifyToken};

