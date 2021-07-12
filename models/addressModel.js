const connection = require('./connection');

const getAdressByClientId = async (id) => {
  const [address] = await connection.execute(
    'SELECT * from address WHERE clientId = (?)', [id]
  )

  return address;
}

const findAddressById = async (addressId) => {
  const [address] = await connection.execute(
    'SELECT * FROM address WHERE addressId = ?', [addressId]
  )
  
  return address;
}

const addNewAddress = async (body, clientId) => {
  const {address, num, complement, district, cep, city, state} = body
  const [{ insertId }] = await connection.execute(
    'INSERT INTO address (address, num, complement, district, cep, city, state, clientId) VALUES (?,?,?,?,?,?,?,?)',
    [address, num, complement, district, cep, city, state, clientId]
  )
  
  return { id: insertId, ...body, clientId }
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
  getAdressByClientId,
  findAddressById,
  addNewAddress,
  updateAddressByAddressId,
  deletAddressById,
}