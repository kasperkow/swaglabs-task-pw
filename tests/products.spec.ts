import LoginPage from '@pages/login.page'
import ProductsPage from '@pages/products.page'
import { test, expect } from '@playwright/test'
test.describe('Products page', () => {
    let loginPage: LoginPage
    let productsPage: ProductsPage

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page)
        await loginPage.navigateToMainPage()
        await loginPage.login('standard_user')
    })

    test('Cart should display number of added items', async ({ page }) => {
        productsPage = new ProductsPage(page)
        await productsPage.addItemToCartByName('backpack')
        await productsPage.checkNumberOfAddedItems('1')
        await productsPage.addItemToCartByName('bike-light')
        await productsPage.checkNumberOfAddedItems('2')
        await productsPage.addItemToCartByName('bolt-t-shirt')
        await productsPage.checkNumberOfAddedItems('3')
        await productsPage.addItemToCartByName('fleece-jacket')
        await productsPage.checkNumberOfAddedItems('4')
        await productsPage.addItemToCartByName('onesie')
        await productsPage.checkNumberOfAddedItems('5')
        await productsPage.removeItemFromCartByName('backpack')
        await productsPage.checkNumberOfAddedItems('4')
        await productsPage.removeItemFromCartByName('bike-light')
        await productsPage.checkNumberOfAddedItems('3')
        await productsPage.removeItemFromCartByName('bolt-t-shirt')
        await productsPage.checkNumberOfAddedItems('2')
        await productsPage.removeItemFromCartByName('fleece-jacket')
        await productsPage.checkNumberOfAddedItems('1')
        await productsPage.removeItemFromCartByName('onesie')
        await expect(productsPage.cartItemsNumber).toBeHidden()
    })

    test('There should be menu with working links', async ({ page }) => {
        productsPage = new ProductsPage(page)
        await productsPage.openMenu()
        await expect.soft(productsPage.menuProductsLink).toBeVisible()
        await expect.soft(productsPage.menuAboutLink).toBeVisible()
        await expect.soft(productsPage.menuLogoutLink).toBeVisible()
        await expect.soft(productsPage.menuResetLink).toBeVisible()
        await expect.soft(productsPage.menuProductsLink).toHaveAttribute('href', '#')
        await expect
            .soft(productsPage.menuAboutLink)
            .toHaveAttribute('href', 'https://saucelabs.com/')
        await expect.soft(productsPage.menuResetLink).toHaveAttribute('href', '#')
        await expect.soft(productsPage.menuLogoutLink).toHaveAttribute('href', '#')
    })

    test('There should be visible main elements', async ({ page }) => {
        productsPage = new ProductsPage(page)
        await expect.soft(productsPage.logoImg).toBeVisible()
        await expect.soft(productsPage.productsList).toBeVisible()
        await expect.soft(productsPage.productsListItem).toHaveCount(6)
        await expect.soft(productsPage.shoppingCartLink).toBeVisible()
        await expect.soft(productsPage.footerSocialList).toBeVisible()
        await expect.soft(productsPage.footerSocialList.locator('li')).toHaveCount(3)
    })
})
