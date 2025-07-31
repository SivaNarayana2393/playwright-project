const {test, expect} = require('@playwright/test');

test ('verify google search', async({page}) => {
    await page.goto('https://www.google.com')
    await page.locator('input[name="q"]').fill('Playwright Github')
    await page.keyboard.press('Enter')
    await page.waitForTimeout(2000)
    await expect(page).toHaveTitle(/Playwright GitHub/)
})