// @ts-check
const { test, expect } = require('@playwright/test');

test('Verify Backend is connected to frontend', async ({ page }) => {
  await page.goto('http://localhost:8080/');

  // Expect a title "to contain" a substring.
  await expect(page.locator('css=h1')).toHaveText('Hello from the Backend!');
  
  //Close the browser window
  await page.close();
});