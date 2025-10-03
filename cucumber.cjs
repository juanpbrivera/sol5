// cucumber.cjs
module.exports = {
  default: {
    require: [
      '@automation/web-automation-framework/dist/cucumber/world/AutomatizacionWeb.js',
      'support/hooks.ts',
      'features/steps/*.ts'  // Solo los steps necesarios, no recursivo
    ],
    requireModule: ['ts-node/register/transpile-only'],
    format: ['progress'],
    parallel: 0
  }
};