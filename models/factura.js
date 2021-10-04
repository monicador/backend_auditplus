const mongoose =require('mongoose');
const Schema = mongoose.Schema;
const facturaSchema = new Schema({
    noradicacion: {type: String, required: [true, 'Número de Radicación Obligatorio']},
    nit: String,
    prefijo: String,
    nofactura: String,
    fechafactura:{type: Date, default: Date.now},
    valorfactura: String,
    nivel: String,
    tipoid: String,
    idpaciente: String,
    nombrepaciente: String,
    estado: {type: String, default: 'R'}

});

const factura=mongoose.model('factura',facturaSchema)
module.exports = factura;