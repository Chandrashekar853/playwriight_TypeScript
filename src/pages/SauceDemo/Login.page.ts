import { Page } from "playwright/test";


export default class LoginPage {
    private readonly emailBox = '#user-name';
    private readonly passwordBox = '#password';
    private readonly loginInBtn = '#login-button'


    constructor( private page:Page){
    }
    

    // Go to Base URL page
    async navigateToLoginPage(){
        await this.page.goto('/');
    }


    // Login with the application
    async logIn(userName: string, password:  string){
       await this.page.locator(this.emailBox).fill(userName);
       await this.page.locator(this.passwordBox).fill(password);
       await this.page.locator(this.loginInBtn).click()
    }

}