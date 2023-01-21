import { test, expect } from '@playwright/test'

test('true', async ({ page }) => {
    expect(true).toBeTruthy()
})
