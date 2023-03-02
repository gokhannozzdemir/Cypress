/// <reference types="cypress" />
/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars

const path = require("path");
const fs = require("fs-extra");
const cucumber = require('cypress-cucumber-preprocessor').default

function getConfigurationFileByEnvName(env) {
  const fileLocation = path.resolve("cypress/config", `config.${env}.json`);
  return fs.readJson(fileLocation);
}

module.exports = (on, config) => {
  const envFile = config.env.fileConfig || "prod";
  on('file:preprocessor', cucumber())
  return getConfigurationFileByEnvName(envFile);
}