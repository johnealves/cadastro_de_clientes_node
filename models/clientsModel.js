const connection = require('./connection');

const getAllClients = async () => {
  const [clients] = await connection.execute('SELECT * FROM clients')
  // const clientsAndAndress = await clients.map(async ({clientId, name, cpf_cnpj, birth_date, status, register}) => {
  //   const [address] = await connection.execute(
  //     'SELECT * from address WHERE clientId = (?)', [clientId]
  //   )
  //   return {
  //     clientId,
  //     name,
  //     cpf_cnpj,
  //     birth_date,
  //     status,
  //     register,
  //     address,
  //   }
  // })
  // console.log(clientsAndAndress)

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
    'SELECT * FROM MagIt.clients WHERE clientId = ?', [clientId]
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
  const { name, document, birthDate } = body
  const [{ insertId }] = await connection.execute(
    'INSERT INTO clients (name, cpf_cnpj, birth_date) VALUES (?,?,?)',
    [name, document, birthDate]
  )
  
  return {
    clientId: insertId,
    name,
    document,
    birthDate,
    status: 'active',
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
  const { name, document, birthDate, status = 'active' } = body;
  const result = await connection.execute(
    'UPDATE clients SET `name`= (?), cpf_cnpj = (?), birth_date = (?), status = (?)  WHERE clientId = (?)',
    [name, document, birthDate, status, clientId]
  );

  return {
    clientId,
    name,
    document,
    birthDate,
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