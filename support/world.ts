// support/world.ts
import { setWorldConstructor } from '@cucumber/cucumber';
import { WebWorld } from '@automation/web-automation-framework';

// Registra el WebWorld con la instancia local de Cucumber
setWorldConstructor(WebWorld);

export { WebWorld };