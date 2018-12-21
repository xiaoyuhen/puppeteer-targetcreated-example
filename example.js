const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    devtools: true,
  });
  await browser.on('targetcreated', async (target) => {
    const newTarget = await target.page()
    const content = await newTarget.content()
    
    console.log(content)
  })

  const page = await browser.newPage();
  await page.goto('http://localhost:3000');
  await page.click('a')
  await page.screenshot({path: 'example.png'});


  // await browser.close();
})();