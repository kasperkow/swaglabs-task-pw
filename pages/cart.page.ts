import { Locator, Page } from '@playwright/test'
import BasePage from './base.page'

class CartPage extends BasePage {
    readonly page: Page
    checkoutStepButton: Locator

    constructor(page: Page) {
        super(page)
        this.page = page
        this.checkoutStepButton = page.locator('[data-test="checkout"]')
    }

    async navigateToCheckout() {
        await this.checkoutStepButton.click()
    }
}

export default CartPage
