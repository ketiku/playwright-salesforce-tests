import test from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test('Login Test', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.fillUsername();
    await loginPage.fillPassword();
    const homePage = await loginPage.clickLoginButton();

    await homePage.expectSalesTitle();
})