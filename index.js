const express = require('express');
const bodyParser = require('body-parser');
const clientsController = require('./controllers/clientController');
const addressController = require('./controllers/addressController');


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(bodyParser.json());

// client resquests
app.get('/clients', clientsController.listAll)
  .get('/client/:clientId', clientsController.getClientById)
  .post('/addclient', clientsController.addClient)
  .put('/client/:clientId', clientsController.updateClientById);

// address request
app.get('/address/:clientId', addressController.listAddressByClientId)
  .get('/address/find/:addressId', addressController.getAddressByAddressId)
  .post('/address/:clientId', addressController.addAddressByClient)
  .put('/address/:addressId', addressController.updateAddressByAddressId)
  .delete('/address/:addressId', addressController.deleteAddressById);

app.use((err, _req, res, _next) => {

  res.status(422).json(err)
})

app.listen(PORT, () => console.log(`listen port ${PORT}`));
