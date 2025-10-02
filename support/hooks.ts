import { Before, After, AfterAll, setDefaultTimeout, Status } from '@cucumber/cucumber';
import { WebWorld, generateWordReport, ReportingInterceptor } from '@automation/web-automation-framework';

setDefaultTimeout(60_000);

Before(async function (this: WebWorld, scenario) {
  // Inicia captura de datos
  ReportingInterceptor.startScenario(
    scenario.pickle.name,
    scenario.gherkinDocument.feature?.name
  );
  
  await this.init();
  
  // Adjunta interceptors a la página
  if (this.page) {
    ReportingInterceptor.attachToPage(this.page);
  }
});

After(async function (this: WebWorld, scenario) {
  // Captura screenshot si falla
  if (scenario.result?.status === Status.FAILED && this.page) {
    const screenshotName = scenario.pickle.name.replace(/\s+/g, '_');
    await ReportingInterceptor.captureScreenshot(this.page, screenshotName);
  }
  
  // Captura los pasos
  scenario.pickle.steps.forEach((step, idx) => {
    const stepStatus = scenario.result?.status === Status.PASSED ? 'passed' : 
                      idx === 0 && scenario.result?.status === Status.FAILED ? 'failed' : 'skipped';
    ReportingInterceptor.captureStep(step.text, stepStatus);
  });
  
  // Finaliza el escenario
  ReportingInterceptor.endScenario(
    scenario.result?.status === Status.PASSED ? 'passed' : 'failed',
    scenario.result?.message
  );
  
  await this.cleanup();
});

// Genera reporte Word al final
AfterAll(async function () {
  const capturedData = ReportingInterceptor.getCapturedData();
  
  if (capturedData.length > 0 && process.env.SKIP_WORD_REPORT !== 'true') {
    const outputPath = `reports/test-report-${Date.now()}.docx`;
    
    try {
      await generateWordReport(capturedData, outputPath);
      console.log(`\n📄 Reporte Word generado: ${outputPath}`);
    } catch (error) {
      console.error('❌ Error generando reporte:', error);
    }
  }
  
  ReportingInterceptor.reset();
});