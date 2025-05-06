import { test, expect } from '@playwright/test';

test.describe("Test the consistent homepage UI", ()=>{
	test.beforeEach(async({page})=>{
		await page.goto("https://rishav.rt.gw");
	});

	test("The homepage UI should not break", async({page})=>{
		await page.waitForTimeout(3000);

		// Capture the screenshot and compare with the baseline
		await expect(page).toHaveScreenshot('website-homepage.png',{
			timeout: 2000, // Set the timeout for the screenshot action
			fullPage: true, // Capture a full-page screenshot
		});
	})
})