const clientsModel = require('../models/clientsModel');
const clientsService = require('../services/clientsServices');

const listAll = async (_req, res) => {
  try {
    const data = await clientsService.getAllClients()

    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ message: 'bad request' })
  }
}

const getClientById = async (req, res, next) => {
  try {
    const { clientId } = req.params;
    const result = await clientsService.getClientById(clientId)

    res.status(200).json(result)
  } catch (error) {
    res.status(500).json({ message: 'bad request' })
  }
}

const addClient = async (req, res, next) => {
  console.log('chegou no controler')
  try {
    const { body } = req;
    const data = await clientsService.addClient(body)
    if (data.err) return next(data)

    return res.status(201).json(data)
  } catch (error) {
    res.status(500).json({ message: 'bad request' })
  }
}

const updateClientById = async (req, res, next) => {
  try {
    const { clientId } = req.params
    const data = await clientsService.updateClient(clientId, req.body)

    if (data.err) return next(data)

    return res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ message: 'bad request' })
  }
}

module.exports = {
  listAll,
  getClientById,
  addClient,
  updateClientById,
}