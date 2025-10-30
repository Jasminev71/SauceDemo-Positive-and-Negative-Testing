import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import InventoryPage from '../pageobjects/secure.page.js'  

describe('Login to SauceDemo', () => {
  it('allows the user to login with valid credentials', async () => {
    await LoginPage.open();
    await LoginPage.login('standard_user', 'secret_sauce');
  });
});

