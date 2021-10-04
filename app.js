const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");

const app = express();

// Conexión base de datos
const mongoose = require("mongoose");
const uri = "mongodb://localhost:27017/auditplus_db";
const options = { useNewUrlParser: true, useUnifiedTopology: true };

// promises
mongoose.connect(uri, options).then(
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

// Rutas
app.use("/api", require("./routes/facturas"));

const history = require("connect-history-api-fallback");
app.use(history());
app.use(express.static(path.join(__dirname, "public")));

//puertos
//app.listen(3000, function () {
//  console.log('Example app listening on port 3000!');
//});
app.set("puerto", process.env.PORT || 3000);
app.listen(app.get("puerto"), function () {
  console.log("Example app listening on port" + app.get("puerto"));
});
