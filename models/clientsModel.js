const connection = require('./connection');

const getAllClients = async () => {
  const [clients] = await connection.execute('SELECT * FROM clients')

  return clients;
}

const findClientById = async (clientId) => {
  const [client] = await connection.execute(
    'SELECT * FROM clients WHERE clientId = ?', [clientId]
  )

  return client
}

const findClientByDocument = async (document) => {
  const [client] = await connection.execute(
    'SELECT * FROM MagIt.clients WHERE cpf_cnpj = ?', [document]
  )

  return client
}

const findClientByName = async (name) => {
  const [client] = await connection.execute(
    'SELECT * FROM MagIt.clients WHERE name = ?', [name]
  )

  return client
}

const addClient = async (body) => {
  const { name, cpf_cnpj, legal_entity, birth_date, status } = body
  const [{ insertId }] = await connection.execute(
    'INSERT INTO clients (name, cpf_cnpj, legal_entity, birth_date, status) VALUES (?, ?, ?, ?, ?)',
    [name, cpf_cnpj, legal_entity, birth_date, status]
  )
  
  return {
    clientId: insertId,
    ...body,
  }
}

const updateClientById = async (clientId, body) => {
  const { name, cpf_cnpj, legal_entity, birth_date, status } = body;
  console.log(`nome ${name}`)
  console.log(`cpf_cnpj ${cpf_cnpj}`)
  console.log(`legal_entity ${legal_entity}`)
  console.log(`birth_date ${birth_date}`)
  console.log(`status ${status}`)
  const result = await connection.execute(
    'UPDATE clients SET `name`= (?), cpf_cnpj = (?), legal_entity = (?), birth_date = (?), status = (?)  WHERE clientId = (?)',
    [name, cpf_cnpj, legal_entity, birth_date, status, clientId]
  );

  return {
    clientId,
    name,
    cpf_cnpj,
    legal_entity,
    birth_date,
  }
}

module.exports = {
  getAllClients,
  addClient,
  findClientById,
  findClientByDocument,
  findClientByName,
  updateClientById,
}