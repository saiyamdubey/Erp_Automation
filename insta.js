// const puppeteer = require('puppeteer');

// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();

//   // Enable the network domain to capture network requests
//   await page.goto('https://www.instagram.com/p/CtBG7E9yH9H');
//   await page.setRequestInterception(true);

//   page.on('request', (request) => {
//     // Capture only image requests
//     if (request.resourceType() === 'image') {
//       console.log('Image Request URL:', request.url());
//       console.log('Image Request Headers:', request.headers());
//     }

//     request.continue();
//   });

//   // Wait for a few seconds to capture network requests
//   await page.waitForTimeout(5000);

//   await browser.close();
// })();

const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: "new",
  });
  const page = await browser.newPage();

  await page.goto("https://www.instagram.com/p/CtBG7E9yH9H");
  await page.setRequestInterception(true);


  page.on("request", (request) => {
    // Capture only image requests
    if (request.resourceType() === "image") {
      // Check if the image request URL contains the Instagram CDN domain
      if (request.url()) {
        console.log("Main Image Request URL:", request.url());
        console.log("Main Image Request Headers:", request.headers());
      }
    }

    request.continue();
  });

  // Wait for a few seconds to capture network requests
  await page.waitForTimeout(5000);

  // Continue processing the main image request if found
  if (mainImageRequest) {
    const mainImageResponse = await mainImageRequest.response();
    const mainImageUrl = mainImageRequest.url();
    const mainImageHeaders = mainImageResponse.headers();

    console.log("Main Image URL:", mainImageUrl);
    console.log("Main Image Headers:", mainImageHeaders);
  } else {
    console.log("Main image not found.");
  }

  await browser.close();
})();
