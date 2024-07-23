import {test} from "playwright/test";


test('Kick start with playWright', () => {
    console.log("My first Test")
});

test('launch chrome',async ({page})=>{
    await page.goto("https://www.google.com")
    await page.getByLabel('Google apps').click();
    console.log('my first test')
})

test('Practice', async ({page})=>{
    await page.goto('https://saucedemo.com')
    await page.locator("//*[@name='user-name']").fill('standard_user')
    await page.locator("//*[@name='password']").fill('secret_sauce')
    await page.locator("//*[@name='login-button']").click()
})