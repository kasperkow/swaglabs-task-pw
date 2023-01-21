import { test, expect } from '@playwright/test'

test('true', async ({ page }) => {
    expect(true).toBeTruthy()
})

test('Visit base page', async ({ page }) => {
    await page.goto(`/`)
})
