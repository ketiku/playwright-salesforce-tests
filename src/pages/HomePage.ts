import { expect, Page } from "@playwright/test";

export class HomePage {
    private readonly salesTitle = 'Sales';

    constructor(private readonly page: Page) {}

    async expectSalesTitle() {
        await expect(this.page.getByTitle(this.salesTitle)).toBeVisible({ timeout: 5000 }).catch(
            async (error) => {
                console.error('Sales title not found:', error);
                throw error;
            }
        ).then(() => { console.log('Sales title is visible'); });
    }
}