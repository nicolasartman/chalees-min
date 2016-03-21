import Auth0 from 'auth0-js';
// The AWS SDK lacks browser support so this workaround just uses the prebuilt file
// that's loaded in index.html
const AWS = window.AWS;

const awsConfig = {
  bucket:         'learning-prototype-user-uploads',
  folderPrefix:   'files/',
  role:           'arn:aws:iam::239810827900:role/learning-prototype-user',
  principal:      'arn:aws:iam::239810827900:saml-provider/auth0-provider',
  domain:         'learning-prototype.auth0.com',
  clientID:       'zvMJBINrPP41PVpc0OSfNxD3V4nQoVu9',
  // not sure what this is
  // targetClientId: 'jAbmUzhI7KZ5cWG8gsyT3IaTg0dS9KZV' // Auth0 AWS API client id
};

const bucket = new AWS.S3({
  params: {
    Bucket: awsConfig.bucket
  }
});

export function getAwsToken(userIdToken, callback) {
  var auth0 = new Auth0({
    domain:         awsConfig.domain,
    clientID:       awsConfig.clientID,
    // callbackURL:    'dummy'
  });

  auth0.getDelegationToken({
    id_token: userIdToken,
    api: 'aws',
    role: awsConfig.role,
    principal: awsConfig.principal
  }, (error, result) => {
    if (error) {callback(err);}
    else {
      // Set credentials for upload to the s3 bucket
      bucket.config.credentials = new AWS.Credentials(
        result.Credentials.AccessKeyId,
        result.Credentials.SecretAccessKey,
        result.Credentials.SessionToken);

      callback(null, result);
    }
  });
}

/**
 * Uploads a file to the bucket specified using private ACL
 *
 * @param {Bucket} bucket
 * @param {HTMLInputFile} the file to upload
 */
export function uploadFile(userId, file, callback) {
  var objectKey = awsConfig.folderPrefix + userId + '/' + file.name;
  var params = {
    Key: objectKey,
    ContentType: file.type,
    Body: file,
    ACL: 'private'
  };

  bucket.putObject(params, function (err, data) {
    if (err) {callback(err);}
    else {callback(null, data);}
  });
}