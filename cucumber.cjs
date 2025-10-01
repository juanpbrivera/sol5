// cucumber.cjs
const { createConfig } = require('@automation/web-automation-framework/cucumber/cucumber.base');

module.exports = createConfig({
  paths: {
    world: 'support/world.ts',
    hooks: 'support/hooks.ts',
    steps: [
      'features/steps/**/*.ts',
      'test/steps/**/*.ts',
      'test/step-definitions/**/*.ts'
    ]
  }
});