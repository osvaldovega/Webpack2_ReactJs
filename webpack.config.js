// Base on the parameter sent {env} the webpack config get build
function buildConfig(env) {
  return require('./config/' + env + '.js')({ env: env })
}

module.exports = buildConfig;
