const express = require('express');
const ProdutoController = require('../controllers/ProdutoController');

const routes = express.Router();

routes.get("/produto", ProdutoController.listObjects);
routes.get("/produto/:id", ProdutoController.findObjectById);
routes.post("/produto", ProdutoController.createObjects);
routes.put("/produto/:id", ProdutoController.updateObjects);
routes.delete("/produto/:id", ProdutoController.deleteObject)


module.exports = routes;