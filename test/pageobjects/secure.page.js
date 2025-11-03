import { $ } from '@wdio/globals'
import Page from './page.js';


class InventoryPage {
    get InventoryContainer() { return $('#inventory_container'); }

async waitloaded() {
    await this.inventoryContainer.waitForDisplayed();
    } 
}
export default new InventoryPage();