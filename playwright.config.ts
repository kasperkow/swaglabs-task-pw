import type { PlaywrightTestConfig } from '@playwright/test'
import { devices } from '@playwright/test'
import * as dotenv from 'dotenv'

dotenv.config()

const config: PlaywrightTestConfig = {
    testDir: './tests',
    timeout: 60 * 1000,
    fullyParallel: true,
    retries: 1,
    reporter: [['list'], ['html', { open: process.env.CI ? 'never' : 'on-failure' }]],
    use: {
        baseURL: 'https://www.saucedemo.com/',
        screenshot: 'only-on-failure',
        video: 'on',
        trace: 'on-first-retry',
    },
    projects: [
        {
            name: 'chromium',
            use: {
                ...devices['Desktop Chrome'],
            },
        },

        {
            name: 'firefox',
            use: {
                ...devices['Desktop Firefox'],
            },
        },

        {
            name: 'webkit',
            use: {
                ...devices['Desktop Safari'],
            },
        },
    ],
}

export default config
