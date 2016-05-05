const aws = {
  bucket:         'learning-prototype-user-uploads',
  folderPrefix:   'files/',
  role:           'arn:aws:iam::239810827900:role/learning-prototype-user',
  principal:      'arn:aws:iam::239810827900:saml-provider/auth0-provider',
  // not sure what this is
  // targetClientId: 'jAbmUzhI7KZ5cWG8gsyT3IaTg0dS9KZV' // Auth0 AWS API client id
};

const auth0 = {
  domain:         'learning-prototype.auth0.com',
  clientId:       'zvMJBINrPP41PVpc0OSfNxD3V4nQoVu9'
}

const exports = {
  aws, auth0
};

export default exports;