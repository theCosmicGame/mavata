import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
    UserPoolId: "us-east-2_LDNLbAkiA",
    ClientId: "1prdp671cqtti4a9hogo2rd08g",
}

export default new CognitoUserPool(poolData);