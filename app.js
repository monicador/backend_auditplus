const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");

const app = express();

// Conexión base de datos
const mongoose = require("mongoose");
//const uri = 'mongodb://localhost:27017/auditplus';
const url =
  "mongodb+srv://auditplus:auditplus123@auditplus.x2ndc.mongodb.net/auditplus?retryWrites=true&w=majority";

const options = { useNewUrlParser: true, useUnifiedTopology: true };

// promises
mongoose.connect(url, options).then(
  () => {
    console.log("Conectado a DB");
  },
  (err) => {
    console.log(err);
  }
);

//MIDDLEWARE
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
//application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//rutas
//app.get('/', function (req, res) {
//  res.send('Hello World!');
//});
app.use("/api", require("./routes/factura"));
app.use("/api", require("./routes/usuario"));

const history = require("connect-history-api-fallback");
app.use(history());
app.use(express.static(path.join(__dirname, "public")));

//puertos
//app.listen(3000, function () {
//  console.log('Example app listening on port 3000!');
//});
app.set("puerto", process.env.PORT || 3000);
app.listen(app.get("puerto"), function () {
  console.log("Escuchando el puerto" + app.get("puerto"));
});
