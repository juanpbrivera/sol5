import { Before, After, AfterAll, setDefaultTimeout, Status } from '@cucumber/cucumber';
import { WebWorld, generateTestReport } from '@automation/web-automation-framework';

setDefaultTimeout(60_000);

Before(async function (this: WebWorld, scenario) {
  await this.initScenario(
    scenario.pickle.name,
    scenario.gherkinDocument.feature?.name
  );
});

After(async function (this: WebWorld, scenario) {
  await this.cleanupScenario(scenario, Status);
});

AfterAll(async function () {
  await generateTestReport();
});