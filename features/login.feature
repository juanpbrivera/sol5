Feature: Búsqueda en Playwright.dev

  @smoke
  Scenario: Buscar "locators"
    Given abro la app
    When busco "locators"
    Then la url contiene "dev"
