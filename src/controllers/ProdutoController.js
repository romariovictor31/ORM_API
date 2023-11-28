const { Model } = require('sequelize');
const modelProduto = require('../models/produto');

class ProdutoController {
    static async listObjects(req, res) {
        try {
            const produtos = await modelProduto.findAll({});
            return res.status(200).send({message: `Estes são os produtos: ${produtos}`});

        } catch (error) {
            return res.status(500).send({message: `${error.message} - falha na requisição`})
        }
    }

    static async createObjects(req, res) {
        try {
            const newProduct = await modelProduto.create({
                Codigo: req.body.Codigo,
                Descricao: req.body.Descricao,
                DataCriacao: req.body.DataCriacao,
                DataAtualizacao: null
            });
            return res.status(200).send({message: "Você acabou de cadastrar o produto."});

        } catch (error) {
            return res.status(500).send({message: `${error.message} - falha no cadastramento`})
        }
    }

    static async updateObjects(req, res) {
        try {
        
            const produtoAtualizado = await modelProduto.findByPk(req.body.Codigo)
        
        if (produtoAtualizado) {
            produtoAtualizado.Descricao = req.body.Codigo;
            produtoAtualizado.DataAtualizacao = new Date();
            await produtoAtualizado.save();
        }
        
        return res.status(200).send({message: "Objeto atualizado"});

        } catch (error) {
            return res.status(500).send({message: `${error.message} - Erro na atualização`})
        }
    }

    static async findObjectById(req, res) {
        try {
        
        const produtoRequisitado = await modelProduto.findByPk(req.body.Codigo);
        
            if (produtoRequisitado != null) {
                return res.status(200).send({message: `O objeto buscado é ${produtoRequisitado}`});
            } else {
                return res.status(400).send({message: "Objeto não achado"})
            };
        
        } catch (error) {
            return res.status(500).send({message: `${error.message} - Erro na atualização`})
        }
    }

    static async deleteObject(req, res) {
        try {
        
        const produtoRequisitado = await modelProduto.findByPk(req.body.Codigo);
        await produtoRequisitado.destroy();
        
            if (produtoRequisitado != null) {
                return res.status(200).send({message: `O objeto selecionado foi deletado com sucesso.`});
            } else {
                return res.status(400).send({message: "Objeto não encontrado, e, portanto, não deletado."})
            };
        
        } catch (error) {
            return res.status(500).send({message: `${error.message} - Erro ao deletar.`})
        }
    }
}

module.exports = ProdutoController;