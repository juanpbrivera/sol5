// support/hooks.ts
import { Before, After, AfterAll, setDefaultTimeout, Status } from '@cucumber/cucumber';
import type { AutomatizacionWeb } from '@automation/web-automation-framework';
import { generateTestReport, ReportingInterceptor } from '@automation/web-automation-framework';

setDefaultTimeout(5_000);  // 30 segundos en lugar de 5

Before(async function (this: AutomatizacionWeb, scenario) {
  // Iniciar captura del escenario
  ReportingInterceptor.startScenario(
    scenario.pickle.name,
    scenario.gherkinDocument.feature?.name
  );
  
  await this.iniciar();
});

After(async function (this: AutomatizacionWeb, scenario) {
  // Capturar screenshot si falla
  if (scenario.result?.status === Status.FAILED) {
    // Limpiar nombre del archivo - quitar caracteres problemáticos
    const nombreArchivo = scenario.pickle.name
      .replace(/[^a-zA-Z0-9\s]/g, '')  // Quitar caracteres especiales
      .replace(/\s+/g, '_')            // Espacios a guiones bajos
      .substring(0, 50);               // Limitar longitud
    
    await ReportingInterceptor.captureScreenshot(
      this.obtenerPagina(), 
      nombreArchivo
    );
  }
  
  // Capturar pasos
  scenario.pickle.steps.forEach((step: any) => {
    const stepStatus = scenario.result?.status === Status.PASSED ? 'passed' : 
                      scenario.result?.status === Status.FAILED ? 'failed' : 'skipped';
    ReportingInterceptor.captureStep(step.text, stepStatus);
  });
  
  // Finalizar escenario
  ReportingInterceptor.endScenario(
    scenario.result?.status === Status.PASSED ? 'passed' : 'failed',
    scenario.result?.message
  );
  
  await this.limpiar();
});

AfterAll(async function () {
  try {
    await generateTestReport();
    console.log('📄 Reporte Word generado exitosamente');
  } catch (error) {
    console.error('❌ Error generando reporte Word:', error);
  }
});