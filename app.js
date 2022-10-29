const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

const corsOpts = {
    origin: '*',

    methods: [
        'GET',
        'POST',
        'PUT',
        'DELETE'
    ],

    allowedHeaders: [
        'Content-Type',
    ],
};

app.use(cors(corsOpts));
app.use(express.json());
//app.use(express.static('storage'));

const port = process.env.PORT || 3000;
const ENGINE_DB = process.env.ENGINE_DB;

/**
 * ROUTES
 */
app.use('/api', require('./routes'));
app.use('/', (req, res) => {
    res.send('hello world');
});

app.listen(port, () => {
    console.log('Tu app esta lista por http://localhost:' + port);
    console.log('************************************************');
});
