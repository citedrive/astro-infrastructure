const chromium = require('chrome-aws-lambda')
//const puppeteer = require('puppeteer-core')

exports.handler = async (event, context, callback) => {
  let theTitle = null
  let browser = null
  console.log('spawning chrome headless')

    const executablePath = await chromium.executablePath

    // setup
    browser = await  chromium.puppeteer.launch({
      args: chromium.args,
      executablePath: executablePath,
      headless: chromium.headless,
    })

    // Do stuff with headless chrome
    const page = await browser.newPage()
    const targetUrl = 'https://davidwells.io'

    // Goto page and then do stuff
    await page.goto(targetUrl, {
      waitUntil: ["domcontentloaded", "networkidle0"]
    })

    await page.waitForSelector('#phenomic')

    theTitle = await page.title();

    console.log('done on page', theTitle)



  return callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      title: theTitle,
    })
  })
}