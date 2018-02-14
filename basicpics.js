const puppeteer = require('puppeteer');
const fs = require('fs');
//const basicpicswide = require('./vasicpics.js');
//const basicpicssmall = require('./vasicpics.js');
var newlink = require('./urlfinder.js');
var sslinks = newlink;


function basicpicswide(slink, name){
console.log("Collecting basic pics widescreen full page height screenshots for " + name);     
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Ann array of viewport sizes for different devices.
  //const viewports = [2560, 1920, 1680, 1600, 1536, 1440, 1366, 1360, 1280, 1080, 1024, 800, 768, 496, 480, 412, 375, 360, 320];
  const viewports = [2560, 1920, 1680, 1600, 1536, 1440, 1366, 1360, 1280, 1080, 1024];
    
  await page.goto(`${slink}`);

  for(let i=0; i < viewports.length; i++) {
    let vw = viewports[i];

    // The height doesn't matter since we are screenshotting the full page.
    await page.setViewport({
      width: vw,
      height: 1000
    });

    await page.screenshot({
      path: "./images/basicshots/" + name + `/widescreen-${vw}.png`,
      fullPage: true
    });
  }

  browser.close();
 
})();
  
    
};
module.exports.basicpicswide = basicpicswide;

function basicpicssmall(slink, name){
console.log("Collecting basic pics small medium screen full page height screenshots for " + name);      
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Ann array of viewport sizes for different devices.
  //const viewports = [2560, 1920, 1680, 1600, 1536, 1440, 1366, 1360, 1280, 1080, 1024, 800, 768, 496, 480, 412, 375, 360, 320];
  const viewports = [800, 768, 496, 480, 412, 375, 360, 320];
    
  await page.goto(`${slink}`);

  for(let i=0; i < viewports.length; i++) {
    let vw = viewports[i];

    // The height doesn't matter since we are screenshotting the full page.
    await page.setViewport({
      width: vw,
      height: 1000
    });

    await page.screenshot({
      path: "./images/basicshots/" + name + `/smallscreen-${vw}.png`,
      fullPage: true
    });
  }

  browser.close();

})();
  
    
};
module.exports.basicpicssmall = basicpicssmall;

function basicpicsbanner(slink, name){
console.log("Collecting basic pics banner images and 1000px page height screenshots for " + name);      
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Ann array of viewport sizes for different devices.
  const viewports = [2560, 1920, 1680, 1600, 1536, 1440, 1366, 1360, 1280, 1080, 1024];
 
    
  await page.goto(`${slink}`);

  for(let i=0; i < viewports.length; i++) {
    let vw = viewports[i];

    // The height doesn't matter since we are screenshotting the full page.
    await page.setViewport({
      width: vw,
      height: 1000
    });

    await page.screenshot({
      path: "./images/banner/" + name + `/banner-${vw}.png`,
      fullPage: false
    });
  }

  browser.close();

})();
  
    
};
module.exports.basicpicsbanner = basicpicsbanner;