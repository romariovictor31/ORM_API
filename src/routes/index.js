const express = require('express');
const produtoRouter = require('./produtoRouter')

const app = express();

const routes = (app) => {
    app.route('/').get((req, res) => res.status(200).send('Rota primaria'));
    app.use(express.json(), produtoRouter );
}

module.exports = routes;