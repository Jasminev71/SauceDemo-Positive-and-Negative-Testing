import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import InventoryPage from '../pageobjects/secure.page.js'  
import loginPage from '../pageobjects/login.page.js';

const users = [
    'standard_user',
    'locked_out_user',
    'problem_user',
    'performance_user',
    'error_user',
    'visual_user'
];



describe('Postive Testing for usernames using passwords:', async () => {
    beforeEach(async () => {
        await loginPage.open()
    })
    users.forEach((username) =>
    it(`Username and Password using Valid Creds: ${username}`, async () => {
        await LoginPage.login(username, 'secret_sauce')
    }))
    })

describe('Negative Testing for usernames using wrong Password :) ', async () => {
    beforeEach(async ()  => {
         await loginPage.open()
    }) 
    users.forEach((username) => {
    it(`Username and Password should not match: ${username}`, async () => {
      await LoginPage.login(username, 'beepBoopBeep')
        
     const isInventoryDisplayed = await InventoryPage.InventoryContainer.isDisplayed();
     expect(isInventoryDisplayed).toBe(false);
    })
  })
})


