// support/world.ts
import { setWorldConstructor } from '@cucumber/cucumber';  // Usa la instancia local
import { AutomatizacionWeb } from '@automation/web-automation-framework';

// Registrar desde la instancia local de Cucumber
setWorldConstructor(AutomatizacionWeb);