import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const usuarioSchema = new Schema({
    nomusuario: {type: String, required: [true, 'Nombre de usuario obligatorio']},
    contrasena: String,
    tipoid: String,
    identificacion: String,
    nombreusuario: String,
    rol:String
});

const usuario=mongoose.model('usuario',usuarioSchema)
export default usuario;