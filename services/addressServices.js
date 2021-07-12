const addressModel = require('../models/addressModel');
const validateNewAddress = require('../schemas/validateNewAddress');
const validadeDataClient = require('../schemas/validateDataClient')

const getAdressByClientId = async (id) => {
  return await addressModel.getAdressByClientId(id)
}

const findAddress = async (addressId) => {
  const [data] = await addressModel.findAddressById(addressId)
  if(!data) return { err: { code: "invalid_data", message: "wrong addressId format" } }

  return data;
}

const addAdress = async (body, clientId) => {
  const validate = validateNewAddress(body)
  if (validate.err) return validate

  const data = await addressModel.addNewAddress(body, clientId)

  return data;
}

const updateAddress = async (addressId, body) => {
  // const [findedAddress] = await clientsModel.findAddressById(addressId)
  // if(!findedAddress) return { err: { code: "invalid_data", message: "wrong addressId format" } }

  const validateResult = validateNewAddress(body);
  if (validateResult.message) return validateResult;

  const data = await addressModel.updateAddressByAddressId(addressId, body)

  return data
}

const deleteAddress = async (addressId) => {
  // const [findedAddress] = await clientsModel.findAddressById(addressId)
  // if(!findedAddress) return { err: { code: "invalid_data", message: "wrong addressId format" } }

  const data = await addressModel.deletAddressById(addressId)
  return data
}

module.exports = {
  getAdressByClientId,
  findAddress,
  addAdress,
  updateAddress,
  deleteAddress,
}