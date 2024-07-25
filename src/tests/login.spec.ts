import { test,  chromium } from "@playwright/test";


test.describe('launch', () => {
    test('Open browser', async() =>{
        const browser = await chromium.launch({
            headless: false
        })
        const context = await browser.newContext()
        const page = await context.newPage();
        await page.goto('https://www.saucedemo.com/')
        await page.fill('#user-name', 'standard_user')
        await page.fill('#password', 'secret_sauce')
        await page.click('#login-button')
        page.locator('text=Products').isVisible
        await page.click('#shopping_cart_container')
        // await browser.close()
    })
    
});