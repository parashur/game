const url = 'https://l9f7kw4qff.execute-api.us-east-2.amazonaws.com/elearning';
const envObject = {
  elearningServiceUrl: url
};
export const environment = {
  production: true,
  elearningServiceUrl: envObject.elearningServiceUrl,
  disableConsole: true
};
