import { test, expect } from '@playwright/test'
test.describe('Products page', () => {
    test('Payment process works well', async ({ page }) => {
        await page.goto('')
        await page.locator('[data-test="username"]').fill('standard_user')
        await page.locator('[data-test="password"]').fill(process.env.USER_PASSWORD)
        await page.locator('[data-test="login-button"]').click()

        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        await page.locator('#shopping_cart_container a').click()
        await page.locator('[data-test="checkout"]').click()
        await page.locator('[data-test="firstName"]').fill('Jan')
        await page.locator('[data-test="lastName"]').fill('Kowalski')
        await page.locator('[data-test="postalCode"]').fill('11111')
        await page.locator('[data-test="continue"]').click()
        await page.locator('[data-test="finish"]').click()
        await expect(
            page.getByRole('heading', { name: 'THANK YOU FOR YOUR ORDER' })
        ).toBeVisible()
        await page.locator('[data-test="back-to-products"]').click()
        await expect(page).toHaveURL('/inventory.html')
    })
})
