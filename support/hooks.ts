// support/hooks.ts
import { Before, After, AfterAll, setDefaultTimeout, Status } from '@cucumber/cucumber';
import { AutomatizacionWeb } from '@automation/web-automation-framework';  // Sin "type"

setDefaultTimeout(5_000);

Before(async function (this: AutomatizacionWeb, scenario) {
  await this.iniciarEscenario(scenario);
});

After(async function (this: AutomatizacionWeb, scenario) {
  await this.finalizarEscenario(scenario, Status);
});

AfterAll(async function () {
  await AutomatizacionWeb.generarReporte();
});