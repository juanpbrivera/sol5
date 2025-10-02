// cucumber.cjs
module.exports = {
  default: {
    require: [
      'support/world.ts',
      'support/hooks.ts',
      'features/steps/*.ts'  // Solo los steps necesarios, no recursivo
    ],
    requireModule: ['ts-node/register/transpile-only'],
    format: ['progress'],
    parallel: 0
  }
};