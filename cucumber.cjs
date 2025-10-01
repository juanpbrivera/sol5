// cucumber.cjs
module.exports = {
  default: {
    requireModule: ['ts-node/register/transpile-only'],
    require: [
      'support/world.ts',
      'support/hooks.ts',
      'features/steps/**/*.ts'
    ],
    format: ['progress', 'json:reports/cucumber.json'],
    publishQuiet: true,
    parallel: 1,
    worldParameters: { 
      env: 'cert',
      browser: process.env.BROWSER  // Pasa el browser como parámetro
    }
  }
};