import { expect, Locator, Page } from '@playwright/test'
import BasePage from '@pages/base.page'

class ProductsPage extends BasePage {
    readonly page: Page
    cartButton: Locator
    cartItemsNumber: Locator
    itemAddToCartButton: (item: string) => Locator
    itemRemoveFromCartButton: (item: string) => Locator
    productsList: Locator
    productsListItem: Locator

    constructor(page: Page) {
        super(page)
        this.page = page
        this.cartButton = page.locator('#shopping_cart_container a')
        this.cartItemsNumber = page.locator('#shopping_cart_container a > span')
        this.itemAddToCartButton = (item: string) =>
            page.locator(`[data-test="add-to-cart-sauce-labs-${item}"]`)
        this.itemRemoveFromCartButton = (item: string) =>
            page.locator(`[data-test="remove-sauce-labs-${item}"]`)
        this.productsList = page.locator('.inventory_list')
        this.productsListItem = page.locator('.inventory_item')
    }

    async checkNumberOfAddedItems(value: string) {
        await expect(this.cartItemsNumber).toHaveText(value)
    }

    async addItemToCartByName(item: string) {
        await this.itemAddToCartButton(item).click()
    }

    async removeItemFromCartByName(item: string) {
        await this.itemRemoveFromCartButton(item).click()
    }
}

export default ProductsPage
