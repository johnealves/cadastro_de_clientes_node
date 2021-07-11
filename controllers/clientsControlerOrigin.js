// const clientsService = require('../services/clientsServices');
// // const clientsModel = require('')

// const getAllClients = async (request, response) => {
//   const data = await clientsService.getAllClients()

//   response.status(200).json(data)
// }

// const getClientById = async (req, res) => {
//   const { id } = req.params;
//   const result = await clientsService.getClientById(id)

//   res.status(200).json(result)
// }

// const getAdressByClientId = async (req, res) => {
//   const { clientId } = req.params;
//   const address = await clientsService.getAdressByClientId(clientId)

//   res.status(200).json({ address })
// }

// const addClient = async (req, res, next) => {
//   const { body } = req;
//   const response = await clientsService.addClient(body)
//   if (response.err) return next(response)

//   return res.status(201).json(response)
// }

// const addAdressByClient = async (req, res, next) => {
//   const { clientId } = req.params;
//   const { body } = req;
//   const response = await clientsService.addAdress(body, clientId);

//   if (response.err) return next(response)

//   return res.status(201).json(response)
// }

// const updateClientById = async (req, res, next) => {
//   const { clientId } = req.params
//   const response = await clientsService.updateClient(clientId, req.body)

//   if (response.err) return next(response)

//   return res.status(200).json(response)
// }

// const updateAddressByAddressId = async (req, res, next) => {
//   const { addressId } = req.params;
//   const response = await clientsService.updateAddress(addressId, req.body)

//   if (response.err) return next(response);

//   return res.status(200).json(response);
// }

// const deleteAddressById = async (req, res, next) => {
//   const { addressId } = req.params;
//   const result = await clientsService.deleteAddress(addressId)

//   if (result.err) return next(result);

//   return res.status(200).json(result);
// }

// module.exports = {
//   getAllClients,
//   getClientById,
//   getAdressByClientId,
//   addClient,
//   addAdressByClient,
//   updateClientById,
//   updateAddressByAddressId,
//   deleteAddressById,
// }