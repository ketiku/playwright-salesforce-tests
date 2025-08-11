import { Page } from "@playwright/test";
import { HomePage } from "./HomePage";

export class LoginPage {
    private readonly username = 'ketikupeace-l2mk@force.com';
    private readonly password = 'Testing@12';
    constructor(private readonly page: Page) {}
    
    async goto() {
        await this.page.goto('/');
    }

    async fillUsername() {
        await this.page.locator('#username').fill(this.username);
    }

    async fillPassword() {
        await this.page.locator('#password').fill(this.password);
    }

    async clickLoginButton() {
        await this.page.locator('#Login').click()
        .catch(
            async (error) => {
                console.error('Login failed:', error);
                throw error;
            }
        );
        return new HomePage(this.page);
    }
}