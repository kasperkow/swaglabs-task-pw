import LoginPage from '@pages/login.page'
import { test, expect } from '@playwright/test'
test.describe('Login', () => {
    let loginPage: LoginPage

    test('User should login to page with valid credentials', async ({ page }) => {
        loginPage = new LoginPage(page)
        await loginPage.navigateToMainPage()
        await loginPage.login('standard_user')
        await expect(page).toHaveURL('inventory.html')
    })

    test('User should not login when account is locked', async ({ page }) => {
        loginPage = new LoginPage(page)
        await loginPage.navigateToMainPage()
        await loginPage.login('locked_out_user')
        await expect(loginPage.warningMessage).toBeVisible()
        await expect(page).toHaveURL('')
    })
})
