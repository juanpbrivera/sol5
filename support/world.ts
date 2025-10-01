// support/world.ts
import { setWorldConstructor } from '@cucumber/cucumber';
import { WebWorld } from '@automation/web-automation-framework';

// Registra el WebWorld
setWorldConstructor(WebWorld);

export { WebWorld };