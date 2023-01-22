# Welcome 👋

Hi! It's a repository with Playwright tests for the saucedemo.com website.
I wanted to present the different techniques and options used to create E2E tests. Therefore, the way of finding locators, as well as the tests themselves, may be inconsistent and not present the most important of the most critical tests.

## How to run tests 🚀

```
Yarn
cp .env.default .env
Yarn run test:all
```

## What I've done ⭐️

-   implemented eslint (with dedicated playwright plugin)
-   implemented prettier
-   implemented husky with pre-commit prettier and eslint check
-   added a few simple smoke tests
-   configured GitHub actions
-   Used environment variable to store password
-   Implemented page object model
-   I wanted to use various locators and functions. That's why some tests are not consistent

## What can I do in the future ⏳

-   cache in GitHub actions (or use specific playwright docker image)
-   use storage state for faster login in
-   add more tests ()
