import { test, expect } from '@playwright/test';
const UI_URL = "http://localhost:5173/"


test('should allow user to sign in', async ({ page }) => {
  await page.goto(UI_URL);

  await page.getByRole("link", { name: "Sign In" }).click();

  await expect(page.getByRole("heading", { name: "Sign In" })).toBeVisible();

  await page.locator("[name=email]").fill("yashjaiswal2509@gmail.com");
  await page.locator("[name=password]").fill("D$4dr7@WH@eKEi");

  await page.getByRole("button", { name: "Sign in" }).click();

  await expect(page.getByText("Sign In Successfull!!")).toBeVisible();
  await expect(page.getByRole("link", { name: "My Bookings" })).toBeVisible();
  await expect(page.getByRole("link", { name: "My Hotels" })).toBeVisible();
  await expect(page.getByRole("button", { name: "Sign Out" })).toBeVisible();

});



test('should allow user to register', async ({ page }) => {

  const testEmail = `test_register_${Math.floor(Math.random() * 90000) + 10000}@test.com`;
  await page.goto(UI_URL)

  await page.getByRole("link", { name: "Sign In" }).click();
  await page.getByRole("link", { name: "Create an account here" }).click();

  await expect(
    page.getByRole("heading", { name: "Create An Account" })
  ).toBeVisible();

  await page.locator("[name=firstName]").fill("test_firstName")
  await page.locator("[name=lastName]").fill("test_lastName")
  await page.locator("[name=email]").fill(testEmail)
  await page.locator("[name=password]").fill("password123")
  await page.locator("[name=confirmPassword]").fill("password123")

  await page.getByRole("button", { name: "Create Account" }).click();

  await expect(page.getByText("Registration Success!!")).toBeVisible();
  await expect(page.getByRole("link", { name: "My Bookings" })).toBeVisible();
  await expect(page.getByRole("link", { name: "My Hotels" })).toBeVisible();
  await expect(page.getByRole("button", { name: "Sign Out" })).toBeVisible();
})