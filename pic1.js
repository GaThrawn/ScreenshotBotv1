const puppeteer = require('puppeteer');
const fs = require('fs');
var newlink = require('./urlfinder.js');
var sslinks = newlink;

function screenshot(sslinks){
 // console.log("Running screenshot from pic1 and adding links from var x " + sslinks);  
  
  //console.log("newlinks = " + sslinks.length);
 fs.mkdirSync("images"); 
 run(sslinks); 
};
module.exports.screenshot = screenshot;

//
//
//function xnamer(links){
//  console.log("xnamer sslinks length = " + links.length); 
////  console.log("xnamer sslinks includes = " + links);
////  console.log("xnamer sslinks firts link 0 is " + links[0]);
//  for (x=0 ; x < links.length ; x++) {      
// var str = links[x];
// var mylink = links[x];
// console.log("The str starts as  " + str);
// 
// 
// //var strlength = str.length;
// str = str.replace(/^https?:\/\//,'');     
// //console.log("THE sting length is " + strlength);
//
// //console.log("The string after the http is striped is  " + str);     
// //var res = str.slice(1, 15);     
//  //console.log("The Link is  " + links[x]);
//
//
//var newstr = str.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g,'_');
////var newstr1 = str.replace(/.com/g, '_com');
//console.log("The NewString Is  " + newstr);  // oranges are round, and oranges are juicy. 
////console.log("The NewString1 Is  " + newstr1);      
//      
//var dir = "./" + newstr + "'";
//fs.mkdirSync(dir);  
//  
//  basicpics(mylink, dir);
//  };  
// 
//};
//
//
//
//function basicpics(slink, name){
//     
//(async () => {
//  const browser = await puppeteer.launch();
//  const page = await browser.newPage();
//
//  // Ann array of viewport sizes for different devices.
//  const viewports = [1600, 1000, 800, 600, 500];
//
//  await page.goto(`${slink}`);
//
//  for(let i=0; i < viewports.length; i++) {
//    let vw = viewports[i];
//
//    // The height doesn't matter since we are screenshotting the full page.
//    await page.setViewport({
//      width: vw,
//      height: 1000
//    });
//
//    await page.screenshot({
//      path: "./" + name + `/screen-${vw}.png`,
//      fullPage: true
//    });
//  }
//
//  browser.close();
//
//})();
//   
//};
function run(urlarray){
var linkarray = urlarray;
console.log("Here are the links from the website " + linkarray);
console.log("We are working with an array that is this long = " + urlarray.length);
//console.log(linkarray.length);
var callCount = 0;

//All the repeat function stuff
var repeater = setInterval(function () {
var x = callCount;

    if (callCount < linkarray.length) {
    callCount += 1;
    //console.log("The call count is at " + callCount);     
    //console.log("The link array is this long " + callCount);
        
 xnamer(linkarray);       
 
function xnamer(links){

 // console.log("We are working with an array that is this long = " + links.length); 
//  console.log("xnamer sslinks includes = " + links);
//  console.log("xnamer sslinks firts link 0 is " + links[0]);
      
 var str = urlarray[x];
 var mylink = urlarray[x];
 //console.log("The str starts as  " + str);
 console.log("Starting to work on  " + str);
 
 //var strlength = str.length;
 str = str.replace(/^https?:\/\//,'');     
 //console.log("THE sting length is " + strlength);

 //console.log("The string after the http is striped is  " + str);     
 //var res = str.slice(1, 15);     
  //console.log("The Link is  " + links[x]);


var newstr = str.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g,'_');
//var newstr1 = str.replace(/.com/g, '_com');
//console.log("The NewString Is  " + newstr);  // oranges are round, and oranges are juicy. 
//console.log("The NewString1 Is  " + newstr1);      

makefolder(mylink, newstr);    
;  
  
 
 
};   
      
  } else {
    clearInterval(repeater);
  }
}, 1000*30);
};

function makefolder(thelink, dirname){      
var dir = "'" + dirname + "'";
console.log("A file has been made for images from " + dirname);

fs.mkdirSync("./images/" + dir);
fs.mkdirSync("./images/" + dir + "basicshots");
fs.mkdirSync("./images/" + dir + "randoms");
console.log("Files created");            
basicpics(thelink, dir);
//randompics(thelink, dir);
};

function basicpics(slink, name){
     
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Ann array of viewport sizes for different devices.
  const viewports = [2560, 1920, 1680, 1600, 1536, 1440, 1366, 1360, 1280, 1080, 1024, 800, 768, 496, 480, 412, 375, 360, 320];
  console.log("Starting screenshot process for " + slink);
  await page.goto(`${slink}`);

  for(let i=0; i < viewports.length; i++) {
    let vw = viewports[i];

    // The height doesn't matter since we are screenshotting the full page.
    await page.setViewport({
      width: vw,
      height: 1000
    });

    await page.screenshot({
      path: "./" + name + "/basicshots" + `/screen-${vw}.png`,
      fullPage: true
    });
  }

  browser.close();

})();
  
    
};

function randompics(slink, name){
     
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
    
   const viewportsw = [1024, 800, 768, 496, 480, 412, 375, 360, 320];
  const viewportsh = [1024, 800, 768, 496, 480, 412, 375, 360, 320];
  
  var rnw = Math.floor((Math.random() * 0) + viewportsw.length);
  var rnh = Math.floor((Math.random() * 0) + viewportsh.length);
  console.log("the width x height are " + viewportsw[rnw] + " x " + viewportsh[rnh]);
  console.log("the width x height are " + viewportsw[rnw] + " x " + viewportsh[rnh]); 
  
  // Ann array of viewport sizes for different devices.
  
  await page.goto(`${slink}`);

  for(let i=0; i < viewportsw.length; i++) {
   
      
      
    let vw = viewportsw[i];
      let vh = viewportsh[i];
    // The height doesn't matter since we are screenshotting the full page.
    await page.setViewport({
      width: vw,
      height: vh
    });

    await page.screenshot({
      path: "./" + name + "/randoms" + `/screen-${vw}.png`,
      fullPage: true
    });
  }

  browser.close();

})();
  
    
};