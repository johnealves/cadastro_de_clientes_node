const clientsModel = require('../models/clientsModel');
const validateNewAddress = require('../schemas/validateNewAddress');
const validadeDataClient = require('../schemas/validateDataClient')

const getAllClients = async () => {
  const clients = await clientsModel.getAllClients()

  return clients;
}

const getClientById = async (id) => {
  const [findedClient] = await clientsModel.findClientById(id)

  return findedClient;
}

const addClient = async (body) => {
  const { name, cpf_cnpj } = body;
  const validate = validadeDataClient(body);
  if (validate.message) return validate;

  // const [findedUser] = await clientsModel.findClientByName(name)
  // if (findedUser) return { err: { code: 'invalid_data', message: '"name" already exists' } };

  // const [findedByDoc] = await clientsModel.findClientByDocument(cpf_cnpj);
  // if (findedByDoc) return { err: { code: 'indalid_document', message: '"CPF/CNPJ" is already in use' } };

  const response = await clientsModel.addClient(body);

  return response
}

const updateClient = async (clientId, body) => {
  const [findedClient] = await clientsModel.findClientById(clientId)
  if(!findedClient) return { err: { code: "invalid_data", message: "wrong clientId format" } }

  const validate = validadeDataClient(body);
  if (validate.message) return validate;

  const response = await clientsModel.updateClientById(clientId, body)

  return response
}

module.exports = {
  getAllClients,
  getClientById,
  addClient,
  updateClient,
}