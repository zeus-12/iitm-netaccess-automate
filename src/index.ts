import puppeteer from "puppeteer";
import dotenv from "dotenv";

dotenv.config();

(async () => {
  const browser = await puppeteer.launch({});
  const page = await browser.newPage();

  await page.goto("https://netaccess.iitm.ac.in/account/login");

  await page.waitForSelector('input[placeholder="username"]');
  await page.type(
    'input[placeholder="username"]',
    process.env.USERNAME as string
  );
  await page.type(
    'input[placeholder="password"]',
    process.env.PASSWORD as string
  );
  await page.click('button[id="submit"]');

  await page.waitForSelector('a[href="/account/approve"]');
  await page.click('a[href="/account/approve"]');

  await page.waitForSelector('input[id="radios-1"]');
  await page.click('input[id="radios-1"]');
  await page.click('button[id="approveBtn"]');

  console.log("Success!");

  await browser.close();
})();
