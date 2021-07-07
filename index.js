const express = require('express');
const bodyParser = require("body-parser");
const clientsController = require('./controllers/clientsControler')

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.get('/clients', clientsController.getAllClients);

app.get('/client/:id', clientsController.getAdressByClientId);

app.post('/client', clientsController.addClient);

app.listen(PORT, () => console.log(`listen port ${PORT}`));