export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_9dRMEnwKJswhjgL6E4YeQeDg00RtWqWWTg",
  s3: {
    REGION: "eu-west-1",
    BUCKET: "democarlos-notesappuploads"
  },
  apiGateway: {
    REGION: "eu-west-1",
    URL: "https://gqferc2j48.execute-api.eu-west-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "eu-west-1",
    USER_POOL_ID: "eu-west-1_heVQhLo6a",
    APP_CLIENT_ID: "69jr65q065u5c890ud0eg4kovr",
    IDENTITY_POOL_ID: "eu-west-1:2728e83c-8368-4699-b798-19414cfca012"
  }
};
