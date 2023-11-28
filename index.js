const express = require('express');
const api = express();
const routes = require('./src/routes/index');

const PORT = 3030;

api.use(express.json());
api.use(routes);

api.listen(PORT, () => {
    console.log("servidor Funcionando!!!");
});