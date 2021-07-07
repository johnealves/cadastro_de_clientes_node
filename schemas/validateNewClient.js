const clientsModel = require('../models/clientsModel');

const validadeNewClient = async ({ name, document, birthDate }) => {
  if (!name) return { status: 422, message: 'o campo "nome" é obrigatio' };
  if (!document) return { status: 422, message: 'o campo "cpf/cnpj" é obrigatio' };
  if (!birthDate) return { status: 422, message: 'o campo "data de nascimento" é obrigatio' };
  
  const docRegex = /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/
  const regexTest = docRegex.test(document);
  if (!regexTest) return { status: 422, message: 'informe um CPF OU CNPJ valido' };

  return null;
}

module.exports = validadeNewClient
