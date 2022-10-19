
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')

import { defineConfig } from "cypress";

import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
  
): Promise<Cypress.PluginConfigOptions> {
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      
      plugins: [createEsbuildPlugin(config)],
    })
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
  
}
export default defineConfig({
  e2e: {
    specPattern:"cypress/e2e/features/Web_Interface/**/*.feature",
    //baseUrl: "","
    supportFile: false,
    
    setupNodeEvents,
  },  

  watchForFileChanges:false,
  viewportHeight:720,
  viewportWidth:1280,
  defaultCommandTimeout: 60000,
  pageLoadTimeout: 60000,
  experimentalWebKitSupport: true,
  retries:1,


});

  


