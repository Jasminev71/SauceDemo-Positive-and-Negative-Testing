import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class InventoryPage {
    get InventoryContainer() { return $('#inventory_container'); }

async waitloaded() {
    await this.inventoryContainer.waitForDisplayed();
    } 
}
export default new InventoryPage();