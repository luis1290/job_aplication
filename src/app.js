const express = require('express');
const apiRoutes = require('./routes');
const cors = require("cors");

const PORT = process.env.PORT || 8000;

const app = express();


app.use(cors())

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome')
})

// apiRoutes(app);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`)
})