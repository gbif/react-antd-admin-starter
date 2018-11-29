const environments = {
  prod: {
    dataApi: '//api.gbif.org/v1',
  },
  uat: {
    dataApi: '//api.gbif-uat.org/v1',
  },
  dev: {
    // dataApi: '//registry-demo.gbif-dev.org',
    dataApi: '//api-demo.gbif-dev.org/v1',
    env: 'dev'
  }
};

const domain = window.location.hostname;

let env = environments.dev;
if (domain.endsWith('gbif.org')) {
  env = environments.prod;
} else if (domain.endsWith('gbif-uat.org')) {
  env = environments.uat;
} else if (domain.endsWith('gbif-dev.org')) {
  env = environments.dev;
}

module.exports = env;