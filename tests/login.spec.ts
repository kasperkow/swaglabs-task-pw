import { test, expect } from '@playwright/test'
test.describe('Login', () => {
    test('User should login to page with valid credentials', async ({ page }) => {
        await page.goto('')
        await page.locator('[data-test="username"]').fill('standard_user')
        await page.locator('[data-test="password"]').fill(process.env.USER_PASSWORD)
        await page.locator('[data-test="login-button"]').click()
        await expect(page).toHaveURL('inventory.html')
    })

    test('User should not login when account is locked', async ({ page }) => {
        await page.goto('')
        await page.locator('[data-test="username"]').fill('locked_out_user')
        await page.locator('[data-test="password"]').fill(process.env.USER_PASSWORD)
        await page.locator('[data-test="login-button"]').click()
        const warning = page.locator('[data-test="error"]')
        await expect(warning).toBeVisible()
        await expect(page).toHaveURL('')
    })
})
