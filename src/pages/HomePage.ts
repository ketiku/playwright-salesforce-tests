import { Page } from "@playwright/test";

export class HomePage {
    private readonly loginButtonSelector = '#Login';

    constructor(private readonly page: Page) {}
}