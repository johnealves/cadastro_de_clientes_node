const clientsModel = require('../models/clientsModel');
const validadeNewClient = require('../schemas/validateNewClient')

const getAllClients = async () => {
  const clients = await clientsModel.getAllClients()

  return clients;
}

const getAdressByClientId = async (id) => {
  return await clientsModel.getAdressByClientId(id)
}

const addClient = async (body) => {
  const validate = validadeNewClient(body);
  if (validate.message) return validate;

  const response = await clientsModel.addClient(body);

  return response
}

module.exports = {
  getAllClients,
  getAdressByClientId,
  addClient,
}