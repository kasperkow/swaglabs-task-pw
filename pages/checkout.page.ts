import { expect, Locator, Page } from '@playwright/test'
import BasePage from './base.page'

class CheckoutPage extends BasePage {
    readonly page: Page
    checkoutStepButton: Locator
    firstNameInput: Locator
    lastNameInput: Locator
    postalCodeInput: Locator
    continueButton: Locator
    finishButton: Locator
    orderConfirmationHeader: Locator
    backToProductsButton: Locator

    constructor(page: Page) {
        super(page)
        this.page = page
        this.checkoutStepButton = page.locator('[data-test="checkout"]')
        this.firstNameInput = page.locator('[data-test="firstName"]')
        this.lastNameInput = page.locator('[data-test="lastName"]')
        this.postalCodeInput = page.locator('[data-test="postalCode"]')
        this.continueButton = page.locator('[data-test="continue"]')
        this.finishButton = page.locator('[data-test="finish"]')
        this.orderConfirmationHeader = page.getByRole('heading', {
            name: 'THANK YOU FOR YOUR ORDER',
        })
        this.backToProductsButton = page.locator('[data-test="back-to-products"]')
    }

    async fillCustomerData(
        firstName = 'Jan',
        lastName = 'Kowalski',
        postalCode = '11111'
    ) {
        await this.firstNameInput.fill(firstName)
        await this.lastNameInput.fill(lastName)
        await this.postalCodeInput.fill(postalCode)
    }

    async navigateToOverview() {
        await this.continueButton.click()
    }

    async finishOrder() {
        await this.finishButton.click()
    }

    async goBackToProductsPage() {
        await this.backToProductsButton.click()
        await expect(this.page).toHaveURL('/inventory.html')
    }
}

export default CheckoutPage
