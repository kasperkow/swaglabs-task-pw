import { Locator, Page } from '@playwright/test'
import BasePage from './base.page'

class LoginPage extends BasePage {
    readonly page: Page
    loginInput: Locator
    passwordInput: Locator
    loginButton: Locator
    warningMessage: Locator

    constructor(page: Page) {
        super(page)
        this.page = page
        this.loginInput = page.locator('[data-test="username"]')
        this.passwordInput = page.locator('[data-test="password"]')
        this.loginButton = page.locator('[data-test="login-button"]')
        this.warningMessage = page.locator('[data-test="error"]')
    }

    /**
     * Login to site via UI
     * @param login
     * @param password default -> USER_DEFAULT_PASSWORD
     */

    async login(login: string, password = process.env.USER_PASSWORD) {
        await this.loginInput.fill(`${login}`)
        await this.passwordInput.fill(`${password}`)
        await this.loginButton.click()
    }
}

export default LoginPage
