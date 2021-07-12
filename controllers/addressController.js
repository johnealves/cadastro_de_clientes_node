const clientsModel = require('../models/clientsModel');
const addressService = require('../services/addressServices');

const listAddressByClientId = async (req, res) => {
  try {
    const { clientId } = req.params;
    const address = await addressService.getAdressByClientId(clientId)

    res.status(200).json({ address })
  } catch (error) {
    res.status(500).json({ message: 'bad request' })
  }
}

const getAddressByAddressId = async (req, res, next) => {
  try {
    const { addressId } = req.params
    const data = await addressService.findAddress(addressId)

    if (data.err) return next(data);

    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ message: 'bad request' })
  }
}

const addAddressByClient = async (req, res, next) => {
  try {
    const { clientId } = req.params;
    const { body } = req;
    const response = await addressService.addAdress(body, clientId);

    if (response.err) return next(response)

    res.status(201).json(response)
  } catch (error) {
    res.status(500).json({ message: 'bad request' })
  }
}

const updateAddressByAddressId = async (req, res, next) => {
  try {
    const { addressId } = req.params;
    const response = await addressService.updateAddress(addressId, req.body)

    if (response.err) return next(response);

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: 'bad request' })
  }
}

const deleteAddressById = async (req, res, next) => {
  try {
    const { addressId } = req.params;
    const result = await addressService.deleteAddress(addressId)

    if (result.err) return next(result);

    return res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: 'bad request' })
  }
}

module.exports = {
  listAddressByClientId,
  getAddressByAddressId,
  addAddressByClient,
  updateAddressByAddressId,
  deleteAddressById,
}