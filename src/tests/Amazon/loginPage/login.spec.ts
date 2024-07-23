import LoginPage from "../../../pages/SauceDemo/Login.page";
import { test } from '@playwright/test';


test("Login SauceDemo", async ({page})=>{
    const loginObj = new LoginPage(page);
    await loginObj.navigateToLoginPage()
    await loginObj.logIn('standard_user', 'secret_sauce')
})