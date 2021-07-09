const validateNewAddress = (body) => {
  const { address, num, district, cep, city, state } = body;
  if (!address) return { err: { code: 'invalid_data', message: 'address is required' } };
  if (!num) return { err: { code: 'invalid_data', message: 'number is required' } };
  if (!district) return { err: { code: 'invalid_data', message: '"district" is required' } };
  if (!cep) return { err: { code: 'invalid_data', message: '"CEP" is required' } };
  if (!city) return { err: { code: 'invalid_data', message: '"city" is required' } };
  if (!state) return { err: { code: 'invalid_data', message: '"state" is required' } };
  return {}
}

module.exports = validateNewAddress;
