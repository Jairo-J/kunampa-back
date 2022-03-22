const mongoose = require('mongoose');

const dbConnect = () => {
    const db_uri = process.env.DB_URI;
    mongoose.connect(db_uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (error, response) => {
        if (!error){
            console.log('**** Conexion Correcta MongoDB ****');
        } else {
            console.log('**** Error de Conexion ****');
        }
    });
}

module.exports = dbConnect
