const connection = require('./connection');

const getAllClients = async () => {
  const [clients] = await connection.execute('SELECT * FROM clients')

  return clients;
}

const getAdressByClientId = async (id) => {
  const [address] = await connection.execute(
    'SELECT * from address WHERE clientId = (?)', [id]
  )

  return address;
}

const findClientById = async (clientId) => {
  const [client] = await connection.execute(
    'SELECT * FROM clients WHERE clientId = ?', [clientId]
  )

  return client
}

const findAddressById = async (addressId) => {
  const [address] = await connection.execute(
    'SELECT * FROM MagIt.address WHERE addressId = ?', [addressId]
  )

  return address;
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
  console.log('chegou na model')
  const { name, cpf_cnpj, legal_entity, birth_date, status } = body
  const [{ insertId }] = await connection.execute(
    'INSERT INTO clients (name, cpf_cnpj, legal_entity, birth_date, status) VALUES (?, ?, ?, ?, ?)',
    [name, cpf_cnpj, legal_entity, birth_date, status ]
  )
  
  return {
    clientId: insertId,
    name,
    cpf_cnpj,
    birth_date,
    status,
  }
}

const addNewAddress = async (body, clientId) => {
  const {address, num, complement, district, cep, city, state} = body
  const [{ insertId }] = await connection.execute(
    'INSERT INTO address (address, num, complement, district, CEP, city, state, clientId) VALUES (?,?,?,?,?,?,?,?)',
    [address, num, complement, district, cep, city, state, clientId]
  )
  
  return { id: insertId, ...body, clientId }
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

const updateAddressByAddressId = async (addressId, body) => {
  const { address, num, complement, district, cep, city, state } = body;
  const result = await connection.execute(
    'UPDATE address SET address = (?), num = (?), complement = (?), district = (?), cep = (?), city = (?), state = (?)  WHERE addressId = (?)',
    [address, num, complement, district, cep, city, state, addressId]
  );

  return {
    addressId,
    address,
    num,
    complement,
    district,
    cep,
    city,
    state
  }
}

const deletAddressById = async (addressId) => {
  const result = await connection.execute(
    'DELETE FROM address WHERE addressId = (?)', [addressId]
  )

  return {}
}

module.exports = {
  getAllClients,
  getAdressByClientId,
  addClient,
  findClientById,
  findAddressById,
  findClientByDocument,
  findClientByName,
  addNewAddress,
  updateClientById,
  updateAddressByAddressId,
  deletAddressById,
}