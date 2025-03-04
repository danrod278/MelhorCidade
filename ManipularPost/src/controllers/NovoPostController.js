const {CriarPost} = require('../services/criarPost')
const {carregarDenunciaService} = require("../services/carregarPostService")
const { v4: uuidv4 } = require('uuid');

exports.controllerNovoPost = async (req, res)=>{
    try{
        const form = req.body
        const {cookie, _idUser} = req.body
        const postData = {
            Descricao:{
                Categoria:form.categoria,
                Referencia:form.referencia,
                Ocorrencia:form.ocorrencia,
                ID_usuario:form._idUser,
                
            },
            CodigoDenuncia:uuidv4(),
            StatusDenuncia:"Em aberto",
            CoordenadasOcorrencia:form.CoordenadasOcorrencia
        }
        CriarPost(postData, cookie, _idUser, res, req)

    }catch(err){
        res.status(401).json('Erro ao Criar novo post ', err)
    }

}

exports.carregarDenunciasController = async (req, res)=>{
    try{
        const {CodigoDenuncia, _idUser, cookie} = req.body
        if(CodigoDenuncia){
            carregarDenunciaService(CodigoDenuncia, _idUser, cookie, res)
        }else{
            res.json({mensagem:"É necessáro um código de denuncia válido", acess:false})
        }
    }catch(err){
        console.error("Erro ao carregar denuncia para o usuário", err)
        res.json({mensagem:"Erro ao carregar denuncia para o usuário", erro:err})
    }
}
