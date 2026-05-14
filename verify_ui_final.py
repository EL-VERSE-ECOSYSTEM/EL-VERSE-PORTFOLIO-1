import asyncio
from playwright.async_api import async_playwright

async def verify():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()
        await page.goto("http://localhost:8080")

        # Wait for content
        await page.wait_for_selector("text=EL SPACE")

        # Take screenshots
        await page.screenshot(path="hero_section.png", full_page=False)

        # Scroll to services
        await page.locator("#services").scroll_into_view_if_needed()
        await page.screenshot(path="services_section.png", full_page=False)

        # Check floating support
        await page.screenshot(path="floating_support.png", full_page=False)

        await browser.close()

if __name__ == "__main__":
    asyncio.run(verify())
