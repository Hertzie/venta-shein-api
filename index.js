const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;
const cors = require("cors");

let app = express();
app.use(cors());

//Rutas
const categoriasRoute = require('./src/routes/categorias.route');

//Uso de rutas
app.use(categoriasRoute);

app.listen(PORT, () => console.log("Servidor corriendo en puerto: " + PORT));