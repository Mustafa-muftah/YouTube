import { expect, Page, test } from "@playwright/test";
import * as playwrightUtilis from"./utilis/playwrightUtilis.js"

test("search page test", async ({}) => {
  const execution = async function (page: Page) {
    await page.goto("http://localhost:5173");

   const textFeild = page.locator('[data-testid="text-feild"]')
   const searchBtn = page.locator('[data-testid="search-button"]')
   const removeBtn = page.locator('[data-testid="remove-button"]')
   const video = page.locator('[data-testid="video"]')
   const channel = page.locator('[data-testid="channel"]')
   const filterBtnToggle= page.locator('[data-testid="toggle-filter-button"]')
   const videoTypeFilter= page.locator('[data-testid="video-type-filter"]')


   await textFeild.fill('sea');
   await searchBtn.click()

   await page.waitForSelector('[data-testid="progress-bar"]')

   expect(await page.waitForSelector('[data-testid="video"]')).toBeTruthy()
   expect(await page.waitForSelector('[data-testid="channel"]')).toBeTruthy()   

    await removeBtn.click();

    expect(video).toBeHidden();
    expect(channel).toBeHidden();

   
    await textFeild.fill('Reach');

    await searchBtn.click();

    await filterBtnToggle.click()

    await videoTypeFilter.click()

    await videoTypeFilter?.selectOption("channel")

    await page.waitForTimeout(2000)

    await expect(video).toBeHidden()

    await videoTypeFilter.click()

    await videoTypeFilter?.selectOption("Video")

    await page.waitForTimeout(2000)

   await expect(channel).toBeHidden() 

  };
  await playwrightUtilis.runPageTest("searchScreen.spec.ts", 99, execution);
});
