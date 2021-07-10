const express = require('express');
const bodyParser = require("body-parser");
const clientsController = require('./controllers/clientsControler');
const { addAdress } = require('./services/clientsServices');
const clientsModel = require('./models/clientsModel')

const app = express();
const PORT = process.env.PORT || 3000;


app.use(bodyParser.json());
app.get('/', (req, res) => res.send("Cadatro de clientes - Mag It"))
app.get('/clients', clientsController.getAllClients);
app.get('/client/:id', clientsController.getClientById)
app.get('/address/:id', clientsController.getAdressByClientId);

// add data on MagIt.clients
app.post('/addclient', clientsController.addClient);
app.post('/address/:clientId', clientsController.addAdressByClient)

// update data
app.put('/client/:clientId', clientsController.updateClientById)
app.put('/address/:addressId', clientsController.updateAddressByAddressId)

//delete address by id
app.delete('/address/:addressId', clientsController.deleteAddressById)

// app.get('/clients', async (req, res, next) => {
//   const result = await clientsModel.getAllClients();

//   res.status(200).json(result)
// })

// app.post('/client/addclient', async (req, res, next) => {
//   const { body } = req;
//   const result = await clientsModel.addClient(body)

//   res.status(200).json(result)
// })

app.use((err, _req, res, _next) => {

  res.status(422).json(err)
})

app.listen(PORT, () => console.log(`listen port ${PORT}`));