const chromium = require('chrome-aws-lambda')
const puppeteer = require('puppeteer-core')
const fs = require('fs')

exports.handler = async function (event, context) {
    // Use local Chrome when testing.
    let localChrome = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
    let executable = fs.existsSync(localChrome) ? localChrome : chromium.executablePath

    // Launch Chrome.
    const browser = await puppeteer.launch({
        args: chromium.args,
        executablePath: await executable,
        headless: true,
        // The optimum size for OG images.
        defaultViewport: {height: 630, width: 1200},
    })

    let page = await browser.newPage()

    function populateTemplate(content, data) {
      // Replace all instances of e.g. `{{ title }}` with the title.
      for (const [key, value] of Object.entries(data)) {
          content = content.replace(new RegExp(`{{ ${key} }}`, 'g'), value)
      }
  
      return content;
  }

    // Read the template HTML off of disk.
    let content = fs.readFileSync(__dirname + '/template.html').toString()

    content = populateTemplate(content, {
      // Get the title out of the querystring.
      title: event.queryStringParameters?.title,
      author: event.queryStringParameters?.author
  })

    await page.setContent(content, {
        waitUntil: 'domcontentloaded',
    })

    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'image/png',
            'Cache-Control': 's-maxage=86400',
        },
        body: (await page.screenshot()).toString('base64'),
        isBase64Encoded: true,
    }
}