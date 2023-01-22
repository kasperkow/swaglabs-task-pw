import CartPage from '@pages/cart.page'
import CheckoutPage from '@pages/checkout.page'
import LoginPage from '@pages/login.page'
import ProductsPage from '@pages/products.page'
import { test, expect } from '@playwright/test'
test.describe('Payments', () => {
    let loginPage: LoginPage
    let productsPage: ProductsPage
    let cartPage: CartPage
    let checkoutPage: CheckoutPage

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page)
        await loginPage.navigateToMainPage()
        await loginPage.login('standard_user')
    })

    test('Payment process works well', async ({ page }) => {
        productsPage = new ProductsPage(page)
        cartPage = new CartPage(page)
        checkoutPage = new CheckoutPage(page)
        await productsPage.addItemToCartByName('bike-light')
        await productsPage.addItemToCartByName('backpack')
        await productsPage.navigateToCart()
        await cartPage.navigateToCheckout()
        await checkoutPage.fillCustomerData()
        await checkoutPage.navigateToOverview()
        await checkoutPage.finishOrder()
        await expect(checkoutPage.orderConfirmationHeader).toBeVisible()
        await checkoutPage.goBackToProductsPage()
    })
})
