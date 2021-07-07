const connection = require('./connection');

const getAllClients = async () => {
  const [clients] = await connection.execute('SELECT * FROM clients')

  return clients
}

const getAdressByClientId = async (id) => {
  const [adress] = await connection.execute(
    'SELECT a.* from clients as c INNER JOIN adress as a WHERE c.clientId = a.clientId'
  )

  return adress;
}

const searchUseByDocument = async (doc) => {
  const [client] = await connection.execute(
    'SELECT * FROM MagIt.clients WHERE cpf_cnpj = ?', [doc]
  )

  return client
}

const addClient = async (body) => {
  const { name, document, birthDate } = body
  const [{ insertId }] = await connection.execute(
    'INSERT INTO clients (name, cpf_cnpj, birth_date) VALUES (?,?,?)',
    [name, document, birthDate]
  )
  
  return {
    id: insertId,
    name,
    document,
    birthDate,
    status: 'active',
  }
}

module.exports = {
  getAllClients,
  getAdressByClientId,
  addClient,
  searchUseByDocument
}