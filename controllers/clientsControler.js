const clientsService = require('../services/clientsServices');

const getAllClients = async (request, response) => {
  const clients = await clientsService.getAllClients()

  response.status(200).json(clients)
}

const getAdressByClientId = async (req, res) => {
  const { id } = req.params;
  const adress = await clientsService.getAdressByClientId(id)

  res.status(200).json(adress)
}

const addClient = async (req, res) => {
  const { body } = req;
  const newClient = await clientsService.addClient(body)

  return res.status(202).json(newClient)

}

module.exports = {
  getAllClients,
  getAdressByClientId,
  addClient,
}