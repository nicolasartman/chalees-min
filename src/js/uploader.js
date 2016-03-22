import config from './config.js';
import * as auth from './auth.js';

const bucket = new AWS.S3({
  params: {
    Bucket: config.aws.bucket
  }
});

export async function uploadFile(file) {
  const credentials = await auth.fetchAwsCredentials();
  const profile = await auth.fetchUserProfile();
  
  // Set credentials for upload to the s3 bucket
  bucket.config.credentials = new AWS.Credentials(
    credentials.AccessKeyId,
    credentials.SecretAccessKey,
    credentials.SessionToken);
  
  var objectKey = `${config.aws.folderPrefix}${profile.user_id}/${file.name}`;
  var params = {
    Key: objectKey,
    ContentType: file.type,
    Body: file,
    ACL: 'private'
  };
  
  return new Promise((resolve, reject) => {
    console.log('file upload in progress...');
    bucket.putObject(params, function (error, data) {
      console.log('file upload complete in upload.js', error, data);
      if (error) {reject(error);}
      else {resolve(data);}
    });    
  });
}