import { Locator, Page } from '@playwright/test'

class BasePage {
    readonly page: Page
    openMenuButton: Locator
    menuProductsLink: Locator
    menuAboutLink: Locator
    menuLogoutLink: Locator
    menuResetLink: Locator
    logoImg: Locator
    footerSocialList: Locator
    shoppingCartLink: Locator

    constructor(page: Page) {
        this.page = page
        this.openMenuButton = page.locator('#react-burger-menu-btn')
        this.menuProductsLink = page.getByRole('link', { name: 'All Items' })
        this.menuAboutLink = page.getByRole('link', { name: 'About' })
        this.menuLogoutLink = page.getByRole('link', { name: 'Logout' })
        this.menuResetLink = page.getByRole('link', { name: 'Reset App State' })
        this.logoImg = page.locator('.app_logo')
        this.footerSocialList = page.locator('ul.social')
        this.shoppingCartLink = page.locator('#shopping_cart_container a')
    }

    async navigateToMainPage() {
        await this.page.goto('')
    }

    async openMenu() {
        await this.openMenuButton.click()
    }

    async navigateToCart() {
        await this.shoppingCartLink.click()
    }
}

export default BasePage
