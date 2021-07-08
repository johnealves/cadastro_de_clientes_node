const clientsModel = require('../models/clientsModel');
const validateNewAddress = require('../schemas/validateNewAddress');
const validadeDataClient = require('../schemas/validateDataClient')

const getAllClients = async () => {
  const clients = await clientsModel.getAllClients()

  return clients;
}

const getAdressByClientId = async (id) => {
  return await clientsModel.getAdressByClientId(id)
}

const addClient = async (body) => {
  const { name, document } = body;
  const validate = validadeNewClient(body);
  if (validate.message) return validate;

  const [findedUser] = await clientsModel.findClientByName(name)
  if (findedUser) return { err: { code: 'invalid_data', message: '"name" already exists' } };

  const [findedByDoc] = await clientsModel.findClientByDocument(document);
  console.log(findedByDoc)
  if (findedByDoc) return { err: { code: 'indalid_document', message: '"CPF/CNPJ" is already in use' } };

  const response = await clientsModel.addClient(body);

  return response
}

const addAdress = async (body, clientId) => {
  const validate = validateNewAddress(body)
  if (validate.err) return validate

  const response = await clientsModel.addNewAddress(body, clientId)

  return response;
}

const updateClient = async (clientId, body) => {
  const [findedClient] = await clientsModel.findClientById(clientId)
  if(!findedClient) return { err: { code: "invalid_data", message: "wrong clientId format" } }

  const validate = validadeDataClient(body);
  if (validate.message) return validate;

  const response = await clientsModel.updateClientById(clientId, body)

  return response
}

const updateAddress = async (addressId, body) => {
  const [findedAddress] = await clientsModel.findAddressById(addressId)
  if(!findedAddress) return { err: { code: "invalid_data", message: "wrong addressId format" } }

  const validateResult = validateNewAddress(body);
  if (validateResult.message) return validateResult;

  const result = await clientsModel.updateAddressByAddressId(addressId, body)

  return result
}

module.exports = {
  getAllClients,
  getAdressByClientId,
  addClient,
  addAdress,
  updateClient,
  updateAddress
}