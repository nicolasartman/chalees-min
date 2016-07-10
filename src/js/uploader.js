import * as auth from './auth.js';

// The AWS SDK lacks commonjs support so this workaround just uses the

// prebuilt file that's loaded in index.html
// const AWS = window.AWS;

// const bucket = new AWS.S3({
//   params: {
//     Bucket: config.aws.bucket
//   }
// });

export async function uploadFile(file) {
  console.warn('TODO');
  return;
  
  // const credentials = await auth.fetchAwsCredentials();
  // const {profile} = await auth.authorize();
  //
  // // TODO: figure out why this is needed, since AWS' SDK already has credentials configured
  // bucket.config.credentials = new AWS.Credentials(
  //     credentials.AccessKeyId,
  //     credentials.SecretAccessKey,
  //     credentials.SessionToken);
  // AWS.config.region = 'ap-southeast-1';
  //
  //
  // var objectKey = `${config.aws.folderPrefix}${profile.user_id}/${file.name}`;
  // var params = {
  //   Key: objectKey,
  //   ContentType: file.type,
  //   Body: file,
  //   ACL: 'private'
  // };
  //
  // return new Promise((resolve, reject) => {
  //   log('file upload in progress...');
  //   bucket.putObject(params, function (error, data) {
  //     log('file upload complete in upload.js', error, data);
  //     if (error) {reject(error);}
  //     else {
  //       bucket.getSignedUrl('getObject', {
  //         Key: objectKey,
  //         Expires: 60 * 60 * 24 * 30
  //       }, (error, url) => {
  //         if (error) {reject(error);}
  //         else {resolve(url);}
  //       });
  //     }
  //   });
  // });
}