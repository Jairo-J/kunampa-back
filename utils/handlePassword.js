const bcryptjs = require('bcryptjs');

/**
 *
 * @param passwordPlain
 * @returns {Promise<*>}
 */
const encrypt = async (passwordPlain) => {
    return await bcryptjs.hash(passwordPlain, 10);
}

/**
 *
 * @param passwordPlain
 * @param hashPassword
 * @returns {Promise<*>}
 */
const compare = async (passwordPlain, hashPassword) => {
    return await bcryptjs.compare(passwordPlain, hashPassword);
}

module.exports = {encrypt, compare}
