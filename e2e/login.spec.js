// @ts-check
//const { test, expect } = require('@playwright/test');
import { test, expect } from '@playwright/test';

const LOCALHOST_URL = 'http://localhost:5173/login'

test('Se muestra el formulario de login', async ({ page }) => {
    await page.goto(LOCALHOST_URL)

    const text = await page.getByLabel('Contraseña')
    const textContent = await text.textContent()

    await expect(textContent).not.toBeNull()
})