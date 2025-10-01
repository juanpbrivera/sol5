module.exports = {
  default: {
    requireModule: ['ts-node/register/transpile-only'],
    require: [
      // 1) REGISTRO del World del framework (ejecuta setWorldConstructor):
      '@automation/web-automation-framework/dist/cucumber/world/WebWorld.js',
      // 2) tus hooks y steps:
      'support/hooks.ts',
      'features/steps/**/*.ts'
    ],
    format: ['progress', 'json:reports/cucumber.json'],
    publishQuiet: true,
    parallel: 1,
    worldParameters: { env: 'cert' }
  }
};