const express = require("express");
const router = express.Router();
// importar el modelo factura
const Factura = require("../models/Factura");

// Agregar una factura

router.post("/facturas/crear", async (req, res) => {
  const body = req.body;

  try {
    var nuevaFactura = await Factura.create(body);
    res.status(200).json(nuevaFactura);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ocurrió un error.",
      error,
    });
  }
});
// Exportamos la configuración de express app

// Get con parámetros
router.get("/facturas/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const factura = await Factura.findOne({ _id });
    res.json(factura);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

// Get con todos los documentos
router.get("/facturas", async (req, res) => {
  try {
    const facturas = await Factura.find();
    res.json(facturas);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

// Delete eliminar una factura
router.delete("/facturas/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const factura = await Factura.findByIdAndDelete({ _id });
    if (!factura) {
      return res.status(400).json({
        mensaje: "No se encontró el id indicado",
        error,
      });
    }
    res.json(factura);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

// Put actualizar una factura
router.put("/facturas/:id", async (req, res) => {
  const _id = req.params.id;
  const body = req.body;
  try {
    const factura = await Factura.findByIdAndUpdate(_id, body, { new: true });
    res.json(factura);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

module.exports = router;
