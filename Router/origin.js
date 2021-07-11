// const express = require('express');
// const bodyParser = require("body-parser");
// const clientsController = require('./controllers/clientsControlerOrigin');
// const { addAdress } = require('./services/clientsServices');
// const clientsModel = require('./models/clientsModel')

// const app = express();
// const PORT = process.env.PORT || 3000;


// app.use(bodyParser.json());
// app.get('/', (req, res) => res.send("Cadatro de clientes - Mag It"))
// // app.get('/clients', clientsController.getAllClients);
// app.get('/client/:id', clientsController.getClientById)
// // app.post('/addclient', clientsController.addClient);
// app.put('/client/:clientId', clientsController.updateClientById)

// // add data on MagIt.clients
// // app.get('/address/:clientId', clientsController.getAdressByClientId);
// app.post('/address/:clientId', clientsController.addAdressByClient)
// app.put('/address/:addressId', clientsController.updateAddressByAddressId)
// app.delete('/address/:addressId', clientsController.deleteAddressById)

// // update data

// //delete address by id


// // app.get('/clients', async (req, res, next) => {
// //   const result = await clientsModel.getAllClients();

// //   res.status(200).json(result)
// // })

// // app.post('/client/addclient', async (req, res, next) => {
// //   const { body } = req;
// //   const result = await clientsModel.addClient(body)

// //   res.status(200).json(result)
// // })

// app.use((err, _req, res, _next) => {

//   res.status(422).json(err)
// })

// app.listen(PORT, () => console.log(`listen port ${PORT}`));