import puppeteer from 'puppeteer'
import { writeFileSync, mkdirSync } from 'fs'

const screens = ['welcome', 'genres', 'artists', 'tuner', 'profile', 'building', 'complete']
const base = 'http://localhost:5173'

mkdirSync('export', { recursive: true })

const browser = await puppeteer.launch()
const page = await browser.newPage()
await page.setViewport({ width: 393, height: 852, deviceScaleFactor: 2 })

for (const screen of screens) {
  await page.goto(`${base}/?screen=${screen}`, { waitUntil: 'networkidle0' })
  await new Promise(r => setTimeout(r, 500))
  const html = await page.content()
  writeFileSync(`export/${screen}.html`, html)
  console.log(`saved ${screen}`)
}

await browser.close()
console.log('done — files are in ./export/')