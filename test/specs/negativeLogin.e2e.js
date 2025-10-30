import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import InventoryPage from '../pageobjects/secure.page.js'  

describe('Login to SauceDemo', () => {
    it('User should not be able to login using invalid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login('unstandard_user', 'password!');
        const isInventoryDisplayed = await InventoryPage.InventoryContainer.isDisplayed();
        expect(isInventoryDisplayed).toBe(false);
    });
});