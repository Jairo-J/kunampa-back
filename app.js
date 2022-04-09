const express = require('express');
const cors = require('cors');
require('dotenv').config();
const dbConnectNoSql = require('./config/mongo');
const {dbConnectMysql} = require('./config/mysql');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('storage'));

const port = process.env.PORT || 3000;
const ENGINE_DB = process.env.ENGINE_DB;

/**
 * ROUTES
 */
app.use('/api', require('./routes'));

app.listen(port, () => {
    console.log('Tu app esta lista por http://localhost:' + port);
});

(ENGINE_DB === 'nosql') ? dbConnectNoSql() : dbConnectMysql();
