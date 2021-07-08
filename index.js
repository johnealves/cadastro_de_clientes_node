const express = require('express');
const bodyParser = require("body-parser");
const clientsController = require('./controllers/clientsControler')

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.get('/clients', clientsController.getAllClients);
app.get('/address/:id', clientsController.getAdressByClientId);

// add data on MagIt.clients
app.post('/client', clientsController.addClient);
app.post('/address/:clientId', clientsController.addAdressByClient)

// update data
app.put('/client/:clientId', clientsController.updateClientById)
app.put('/address/:addressId', clientsController.updateAddressByAddressId)

app.use((err, _req, res, _next) => {
  res.status(422).json(err)
})

app.listen(PORT, () => console.log(`listen port ${PORT}`));