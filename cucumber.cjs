// cucumber.cjs
module.exports = {
  default: {
    requireModule: ['ts-node/register/transpile-only'],
    require: [
      // Registra el World directamente desde support
      'support/world.ts',
      // tus hooks y steps
      'support/hooks.ts',
      'features/steps/**/*.ts'
    ],
    format: ['progress', 'json:reports/cucumber.json'],
    publishQuiet: true,
    parallel: 1,
    worldParameters: { env: 'cert' }
  }
};