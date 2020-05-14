const dev = {
  STRIPE_KEY: "pk_test_9dRMEnwKJswhjgL6E4YeQeDg00RtWqWWTg",
  s3: {
    REGION: "eu-west-1",
    BUCKET: "notes-app-2-api-dev-serverlessdeploymentbucket-15gj82aokvnfw"
  },
  apiGateway: {
    REGION: "eu-west-1",
    URL: "https://qz5zonqupj.execute-api.eu-west-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "eu-west-1",
    USER_POOL_ID: "eu-west-1_jI2A0hkKS",
    APP_CLIENT_ID: "4a2q8k80ca69evv3elt9b9h4u7",
    IDENTITY_POOL_ID: "eu-west-1:8711bc4d-310d-4363-be4d-c069433c911f"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_9dRMEnwKJswhjgL6E4YeQeDg00RtWqWWTg",
  s3: {
    REGION: "eu-west-1",
    BUCKET: "notes-app-2-api-prod-serverlessdeploymentbucket-czwns7mycl6n"
  },
  apiGateway: {
    REGION: "eu-west-1",
    URL: "https://h9fg9iq3u0.execute-api.eu-west-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "eu-west-1",
    USER_POOL_ID: "eu-west-1_srda8SP0r",
    APP_CLIENT_ID: "1grkq5idimp6qo5fofv8snrr55",
    IDENTITY_POOL_ID: "eu-west-1:9cddfc36-7825-48cc-bca9-7388a4da07cd"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

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
