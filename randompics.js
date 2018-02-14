const puppeteer = require('puppeteer');
const fs = require('fs');
//const basicpicswide = require('./vasicpics.js');
//const basicpicssmall = require('./vasicpics.js');
var newlink = require('./urlfinder.js');
var sslinks = newlink;

function randompicswide(slink, name){
console.log("Collecting random pics wide screen random screenshots for " + name);     
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

    // Ann array of viewport sizes for different devices.    
  const viewportsw = [1680, 1600, 1536, 1440];
  const viewportsh = [1824, 1866, 1866, 1866, 1860, 1880];
  
  const clipw = [868, 796, 480, 412, 675, 560, 720, 520, 696, 780, 612, 575, 105, 150, 605];
  const cliph = [468, 496, 880, 412, 375, 860, 320, 200, 212, 305, 760, 320, 775, 150, 105];
  
  const clipx = [296, 280, 112, 275, 260, 220, 296, 480, 212, 375, 360, 320, 10];
  const clipy = [796, 280, 412, 475, 760, 520 ,200 ,170 ,750 ,700 ,500, 420, 800];
  
  await page.goto(`${slink}`);

  for(let i=0; i < clipw.length; i++) {
    var rnw = Math.floor((Math.random() * viewportsw.length) + 0);
    var rnh = Math.floor((Math.random() *  viewportsh.length) + 0);
    var clx = Math.floor((Math.random() * clipx.length) + 0);
    var cly = Math.floor((Math.random() *  clipy.length) + 0);
    //console.log("viewport randoms " + rnw + " x " + rnh + " set at " + viewportsw[rnw] + " x " + viewportsh[rnh]);
    //console.log("clip width x height are " + clipx[clx] + " x " + clipy[cly]); 
      
      
    let vw = viewportsw[rnw];
      let vh = viewportsh[rnh];
      let cw = clipw[clx];
      let ch = cliph[cly];
      let cx = clipx[clx];
      let cy = clipy[cly];
    // The height doesn't matter since we are screenshotting the full page.
    await page.setViewport({
      width: vw,
      height: vh
    });
    var un = cw + "x" + ch;
      
    await page.screenshot({
      path: "./images/randomshots/" + name + `/randomw-${un}.png`,
      clip: { x: cx, y: cy, width: cw, height: ch, omitBackground: false },
      //fullPage: true
    });
  }

  browser.close();

})();
    
};
module.exports.randompicswide = randompicswide;

function randompicssmall(slink, name){
console.log("Collecting random pics medium screen random screenshots for " + name);     
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

      // Ann array of viewport sizes for different devices.    
  const viewportsw = [1440, 1366, 1360, 1280, 1080, 1024];
  const viewportsh = [2500, 2500, 2500];
  
  const clipw = [368, 796, 480, 412, 375, 360, 320, 320, 396, 380, 312, 375, 105, 150, 305];
  const cliph = [468, 396, 380, 412, 375, 260, 320, 200, 212, 305, 360, 320, 375, 150, 105];
  
  const clipx = [296, 280, 112, 275, 260, 220, 296, 480, 212, 375, 360, 320, 10];
  const clipy = [796, 1280, 1412, 1475, 760, 520, 1200, 1170, 1250, 700, 500, 420, 800];   
//   const viewportsw = [1440, 1366, 1360, 1280, 1080, 1024];
//  const viewportsh = [2024, 2800, 2768, 2366, 2360, 2280];
//  
//  const clipw = [468, 396, 380, 412, 475, 360, 420, 220, 196, 280, 212, 375];
//  const cliph = [368, 496, 480, 312, 375, 460, 620, 480, 512, 375, 360, 320];
//  
//  const clipx = [296, 280, 212, 275, 260, 220, 296, 280, 212, 375, 296, 280, 212, 375, 360, 320];
//  const clipy = [296, 280, 412, 375, 1296, 1280, 1412, 1375, 360, 320 ,200 ,170 ,150 ,100 ,500, 420];
  
  await page.goto(`${slink}`);

  for(let i=0; i < clipw.length; i++) {
    var rnw = Math.floor((Math.random() * viewportsw.length) + 0);
    var rnh = Math.floor((Math.random() *  viewportsh.length) + 0);
    var clx = Math.floor((Math.random() * clipx.length) + 0);
    var cly = Math.floor((Math.random() *  clipy.length) + 0);
    //console.log("viewport randoms " + rnw + " x " + rnh + " set at " + viewportsw[rnw] + " x " + viewportsh[rnh]);
    //console.log("clip width x height are " + clipx[clx] + " x " + clipy[cly]); 
      
      
    let vw = viewportsw[rnw];
      let vh = viewportsh[rnh];
      let cw = clipw[clx];
      let ch = cliph[cly];
      let cx = clipx[clx];
      let cy = clipy[cly];
    // The height doesn't matter since we are screenshotting the full page.
    await page.setViewport({
      width: vw,
      height: vh
    });
    var un = cw + "x" + ch;
      
    await page.screenshot({
      path: "./images/randomshots/" + name + `/randoms-${un}.png`,
      clip: { x: cx, y: cy, width: cw, height: ch, omitBackground: false },
      //fullPage: true
    });
  }

  browser.close();

})();
    
};

module.exports.randompicssmall = randompicssmall;