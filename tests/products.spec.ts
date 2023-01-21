import { test, expect } from '@playwright/test'
test.describe('Products page', () => {
    test('Cart should display number of added items', async ({ page }) => {
        await page.goto('')
        await page.locator('[data-test="username"]').fill('standard_user')
        await page.locator('[data-test="password"]').fill(process.env.USER_PASSWORD)
        await page.locator('[data-test="login-button"]').click()
        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        const cart = page.locator('#shopping_cart_container a > span')
        await expect(cart).toHaveText('1')

        await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        await expect(cart).toHaveText('2')
        await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
        await expect(cart).toHaveText('3')
        await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click()
        await expect(cart).toHaveText('4')
        await page.locator('[data-test="add-to-cart-sauce-labs-onesie"]').click()
        await expect(cart).toHaveText('5')
        await page
            .locator(
                '[data-test="add-to-cart-test\\.allthethings\\(\\)-t-shirt-\\(red\\)"]'
            )
            .click()
        expect(cart).toHaveText('6')
        await page.locator('[data-test="remove-sauce-labs-backpack"]').click()
        await expect(cart).toHaveText('5')

        await page.locator('[data-test="remove-sauce-labs-bike-light"]').click()
        await expect(cart).toHaveText('4')
        await page.locator('[data-test="remove-sauce-labs-bolt-t-shirt"]').click()
        await expect(cart).toHaveText('3')
        await page.locator('[data-test="remove-sauce-labs-fleece-jacket"]').click()
        await expect(cart).toHaveText('2')
        await page.locator('[data-test="remove-sauce-labs-onesie"]').click()
        await expect(cart).toHaveText('1')
        await page
            .locator('[data-test="remove-test\\.allthethings\\(\\)-t-shirt-\\(red\\)"]')
            .click()
        expect(cart).toBeHidden()
    })

    test('There should be menu with working links', async ({ page }) => {
        await page.goto('')
        await page.locator('[data-test="username"]').fill('standard_user')
        await page.locator('[data-test="password"]').fill(process.env.USER_PASSWORD)
        await page.locator('[data-test="login-button"]').click()

        await page.locator('#react-burger-menu-btn').click()
        await expect(page.getByRole('link', { name: 'All Items' })).toBeVisible()
        await expect(page.getByRole('link', { name: 'About' })).toBeVisible()
        await expect(page.getByRole('link', { name: 'Reset App State' })).toBeVisible()
        await expect(page.getByRole('link', { name: 'Logout' })).toBeVisible()

        await expect(page.getByRole('link', { name: 'All Items' })).toHaveAttribute(
            'href',
            '#'
        )
        await expect(page.getByRole('link', { name: 'About' })).toHaveAttribute(
            'href',
            'https://saucelabs.com/'
        )
        await expect(page.getByRole('link', { name: 'Reset App State' })).toHaveAttribute(
            'href',
            '#'
        )
        await expect(page.getByRole('link', { name: 'Logout' })).toHaveAttribute(
            'href',
            '#'
        )
    })

    test('There should be visible main elements', async ({ page }) => {
        await page.goto('')
        await page.locator('[data-test="username"]').fill('standard_user')
        await page.locator('[data-test="password"]').fill(process.env.USER_PASSWORD)
        await page.locator('[data-test="login-button"]').click()

        await expect(page.locator('.app_logo')).toBeVisible()
        await expect(page.locator('.inventory_list')).toBeVisible()
        await expect(page.locator('.inventory_item')).toHaveCount(6)
        await expect(page.locator('#shopping_cart_container a')).toBeVisible()
        await expect(page.locator('ul.social')).toBeVisible()
        await expect(page.locator('ul.social > li')).toHaveCount(3)
    })
})
