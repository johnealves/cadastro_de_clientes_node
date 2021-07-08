const validadeDataClient = async ({ name, document, birthDate }) => {
  if (!name) return { err: { code: "invalid_data", message: 'o campo "nome" é obrigatio' }};
  if (!document) return { err: { code: "invalid_data", message: 'o campo "cpf/cnpj" é obrigatio' }};
  if (!birthDate) return { err: { code: "invalid_data", message: 'o campo "data de nascimento" é obrigatio' }};
  
  const docRegex = /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/
  const regexTest = docRegex.test(document);
  if (!regexTest) return { err: { code: "invalid_data", message: 'informe um CPF OU CNPJ valido' }};

  return null;
}

module.exports = validadeDataClient;
