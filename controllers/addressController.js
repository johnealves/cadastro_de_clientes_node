const clientsModel = require('../models/clientsModel');
const clientsService = require('../services/clientsServices');

const listAddressByClientId = async (req, res) => {
  try {
    const { clientId } = req.params;
    const address = await clientsService.getAdressByClientId(clientId)

    res.status(200).json({ address })
  } catch (error) {
    res.status(500).json({ message: 'bad request' })
  }
}

const addAddressByClient = async (req, res, next) => {
  try {
    const { clientId } = req.params;
    const { body } = req;
    const response = await clientsService.addAdress(body, clientId);

    if (response.err) return next(response)

    res.status(201).json(response)
  } catch (error) {
    res.status(500).json({ message: 'bad request' })
  }
}

const updateAddressByAddressId = async (req, res, next) => {
  try {
    const { addressId } = req.params;
    const response = await clientsService.updateAddress(addressId, req.body)

    if (response.err) return next(response);

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: 'bad request' })
  }
}

const deleteAddressById = async (req, res, next) => {
  try {
    const { addressId } = req.params;
    const result = await clientsService.deleteAddress(addressId)

    if (result.err) return next(result);

    return res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: 'bad request' })
  }
}

module.exports = {
  listAddressByClientId,
  addAddressByClient,
  updateAddressByAddressId,
  deleteAddressById,
}