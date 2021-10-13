import express from 'express';
const router = express.Router();
// importar el modelo factura
import factura from '../models/factura';

// Agregar una factura

router.post('/nueva-factura', async(req, res) => {
    const body = req.body; 

    try {
        const facturaDB = await factura.create(body);
        res.status(200).json(facturaDB);
    } catch (error) {
        console.log(error);
    return res.status(500).json({
    mensaje: 'Ocurrio un error',
    error
    })
    }
});
// Exportamos la configuración de express app

// Get con parámetros
router.get('/factura/:id', async(req, res) => {
    const _id = req.params.id;
    try {
    const facturaDB = await factura.findOne({_id});
    res.json(facturaDB);
    } catch (error) {
    return res.status(400).json({
    mensaje: 'Ocurrio un error',
    error
    })
}
});

// Get con todos los documentos
router.get('/factura', async(req, res) => {
    try {
    const facturaDb = await factura.find();
    res.json(facturaDb);
    } catch (error) {
    return res.status(400).json({
    mensaje: 'Ocurrio un error',
    error
    })
    }
});

// Delete eliminar una factura
router.delete('/factura/:id', async(req, res) => {
    const _id = req.params.id;
    try {
    const facturaDb = await factura.findByIdAndDelete({_id});
    if(!facturaDb){
    return res.status(400).json({
    mensaje: 'No se encontró el id indicado',
    error
    })
    }
    res.json(facturaDb); 
    } catch (error) {
    return res.status(400).json({
    mensaje: 'Ocurrio un error',
    error
    })
    }
});

// Put actualizar una factura
router.put('/factura/:id', async(req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
    const facturaDb = await factura.findByIdAndUpdate(
    _id,
    body,
    {new: true});
    res.json(facturaDb); 
    } catch (error) {
    return res.status(400).json({
    mensaje: 'Ocurrio un error',
    error
    })
    }
})



module.exports = router;