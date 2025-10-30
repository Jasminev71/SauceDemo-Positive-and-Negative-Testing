import { $ } from '@wdio/globals'
import Page from './page.js';
 
class SauceDemoLogin extends Page {
    get username () {
        return $('#user-name');
    }

    get password () {
        return $('#password');
    }

    get loginBtn () {
        return $('#login-button');
    }
     async open() {
        await super.open("https://www.saucedemo.com/");
        await this.username.waitForDisplay
     }
    
    async login (username, password) {
        await this.username.setValue(username);
        await this.password.setValue(password);
        
        await this.loginBtn.click();
    }
}
export default new SauceDemoLogin();

