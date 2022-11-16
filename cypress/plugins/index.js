const createBundler = require('@bahmutov/cypress-esbuild-preprocessor')
const fs = require('fs-extra')
const path = require('path')
module.exports = (on, config) => {
  on('file:preprocessor', createBundler())

  function processConfigName(on, config) {

    const file = config.env.name || "qa"
    return getConfigFile(file).then(function(file) {
      return file;
    })
    
  }

  function getConfigFile(on, config) {

    const pathToConfigFile = path.resolve('cypress', 'config', `${file}.json`)
    return fs.readJson(pathToConfigFile)
  }

  //Return the configuration file detail
  return processConfigName(on, config);

}