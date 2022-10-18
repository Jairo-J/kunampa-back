const ENGINE_DB = process.env.ENGINE_DB;
const pathModels = (ENGINE_DB === 'nosql') ? './nosql' : './mysql';
// Agregado el nuevo modelo - wish
const models = {
    usersModel: require(`${pathModels}/user`),
    tracksModel: require(`${pathModels}/tracks`),
    storageModel: require(`${pathModels}/storage`),
    wishModel: require(`${pathModels}/wish`),
}

module.exports = models;
