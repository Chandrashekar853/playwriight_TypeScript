import { Locator, Page } from "playwright/test"

export default class productsPage{
    readonly page : Page;
    readonly productHeading : Locator;
    readonly backPackCartBtn : Locator;
    readonly backPackRemoveBtn : Locator;
    // readonly cartBtn: Locator;


    constructor(page:Page){
        this.page = page;
        this.productHeading = page.locator("(//span[@class='title'])[1]")
        this.backPackCartBtn = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')
        this.backPackRemoveBtn = page.locator('[data-test="remove-sauce-labs-backpack"]')
        // this.cartBtn = page.locator('[data-test="shopping-cart-link"]')
    }

    //Locator
    cartBtn = () => this.page.locator('[data-test="shopping-cart-link"]')



    async backPackAddToCart(){
        await this.backPackCartBtn.click();
    }

    async cartBtnClick(){
        await this.cartBtn().click();
    }
}