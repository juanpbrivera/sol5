import { Before, After, setDefaultTimeout, Status } from '@cucumber/cucumber';
import type { AutomatizacionWeb } from '@automation/web-automation-framework';

setDefaultTimeout(5_000);

Before(async function (this: AutomatizacionWeb) {
  await this.iniciar();
});

After(async function (this: AutomatizacionWeb, scenario) {
  if (scenario.result?.status === Status.FAILED) {
    await this.capturarPantalla(scenario.pickle.name.replace(/\s+/g, '_'));
  }
  await this.limpiar();
});