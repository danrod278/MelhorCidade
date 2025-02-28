const mongoose = require("mongoose")
const Schema = mongoose.Schema

const novoPostSchema = new Schema({
    Descricao:{
        Categoria:{
            type:String,
            required:true
        },
        Referencia:{
            type: String,
            required:false
        },
        Ocorrencia:{
            type:String,
            required:true
        },
        ID_usuario:{
            required:true,
            type:String
        },
        Imagens:[{
            Caminho:{
                required:true,
                type:String
            }
        }]
    },
    CodigoDenuncia:{
        required:true,
        type:String
    },
    StatusDenuncia:{
        type:String,
        required:true
    },
    CoordenadasOcorrencia:{
        latitude:{
            type:Number,
            required:false
        },
        longitude:{
            type:Number,
            required:false
        }
    },
    Validacoes:[{
        _Id_Usuario:{
            required:true,
            type: String
        }
    }],
    comentarios:[{
        _idUsuario:{
            type:String,
            required:true
        },
        _idComentario:{
            type:String,
            required:true
        },
        conteudo:{
            type:String,
            required:true
        }
    }]
}, {timestamps:true})
const Post = mongoose.model("Post", novoPostSchema)

module.exports = {Post}
