const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');
const fs = require('fs');

//var plinks = require('./pic1.js');
var newlink = require('./urlfinder.js');
 
//const iPhone = devices['iPhone 6'];

function phonepicsshort(plinks){


console.log('Screenshots taken now working on  phone screenshots for this many pages ' + plinks.length);    
console.log('This will begin in 5 minutes for the following links ' + plinks);

    
var linkcallCount = 0;
var linkrepeater = setInterval(function () {
var r = linkcallCount;
if (linkcallCount < plinks.length) {
  //console.log('this is where i will shoot out the link  -- ' + plinks[r]); 
  var str = plinks[r];
 var mylink = plinks[r];  
 //console.log("Starting to work on  " + str);
 str = str.replace(/^https?:\/\//,'');    
 var newstr = str.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g,'_');
 fs.mkdirSync("images/phones/" + newstr);   
 
//setTimeout(function () { 
console.log('Folder created for phones and working on ' + newstr);
   setTimeout(function () {    
runphonesfirst(mylink, newstr);
}, 1000*20);
 
    
       // }, 1000*30);  
    linkcallCount += 1;    
   
} else {
clearInterval(linkrepeater);
}
}, 1000*60*5);    
};

module.exports.phonepicsshort = phonepicsshort;    

function runphonesfirst(links, dirname){

var callCount = 0;
var repeater = setInterval(function () {
var x = callCount;       
  
//var phonenames = [ 'Blackberry PlayBook'];
//var phonenames = ['Blackberry PlayBook', 'Blackberry PlayBook landscape'];
var phonenames = [ 'Galaxy Note 3','Galaxy S5', 'iPad Pro', 'iPhone 5', 'iPhone 6 Plus', 'iPhone 6 Plus landscape', 'Nexus 7', 'Nokia N9' ];
      
var urlarray = phonenames;
var thenames = [];  
    
if (callCount < phonenames.length) {
    
    var thearrayname = urlarray[callCount].replace(/ /g,"_");
    var thearraydevice = urlarray[callCount].replace(/ /g," ");

    phonepicsfull(thearrayname, thearraydevice, links, dirname);     
    callCount += 1;    
}
//    else if(callCount <phonenames.length-25) { 
//    console.log('End off the first round');
//} 
else {
clearInterval(repeater);
console.log('The first round of phone shots is done for ' + dirname);
//setTimeout(function () {    
//runphonessecond(links, dirname);
//console.log('The second round of phone shots is starting ' + dirname);
//       }, 1000*10);      

}
}, 1000*5);

function phonepicsfull(phone, thedevice, link, dir){
//console.log("Inside phonepicsfull " + thedevice);   
//var td = "'" + thedevice + "'";
//console.log("The phone name passed into function phonepics full -- " + phone + dir);    
//console.log("The device name with quotes " + td);    
console.log("Working on screenshot for " + thedevice + " from " + dir); 
    
    
  (async() => {
  const browser = await puppeteer.launch();
  let page = await browser.newPage();
  await page.emulate(devices[thedevice]);
  await page.goto(link);
  await page.screenshot({path: "./images/phones/" + dir +`/fulllength-${phone}.png`,
  fullPage: true});
  browser.close();

})();
  

};

};





function runphonessecond(links, dirname){

var callCount = 10;
var repeater = setInterval(function () {
var x = callCount;       
  
//var phonenames = [ 'Blackberry PlayBook'];
//var phonenames = ['Blackberry PlayBook', 'Blackberry PlayBook landscape'];
var phonenames = ['Blackberry PlayBook', 'Blackberry PlayBook landscape', 'BlackBerry Z30', 'BlackBerry Z30 landscape', 'Galaxy Note 3', 'Galaxy Note 3 landscape', 'Galaxy Note II', 'Galaxy Note II landscape', 'Galaxy S III', 'Galaxy S III landscape', 'Galaxy S5', 'Galaxy S5 landscape', 'iPad', 'iPad landscape', 'iPad Mini', 'iPad Mini landscape', 'iPad Pro', 'iPad Pro landscape', 'iPhone 4', 'iPhone 4 landscape', 'iPhone 5', 'iPhone 5 landscape', 'iPhone 6', 'iPhone 6 landscape', 'iPhone 6 Plus', 'iPhone 6 Plus landscape', 'Kindle Fire HDX', 'Kindle Fire HDX landscape', 'LG Optimus L70', 'LG Optimus L70 landscape', 'Microsoft Lumia 550', 'Microsoft Lumia 950', 'Microsoft Lumia 950 landscape', 'Nexus 10', 'Nexus 10 landscape', 'Nexus 4', 'Nexus 4 landscape', 'Nexus 5', 'Nexus 5 landscape', 'Nexus 5X', 'Nexus 5X landscape', 'Nexus 6', 'Nexus 6 landscape', 'Nexus 6P', 'Nexus 6P landscape', 'Nexus 7', 'Nexus 7 landscape', 'Nokia Lumia 520', 'Nokia Lumia 520 landscape', 'Nokia N9', 'Nokia N9 landscape'];
      
var urlarray = phonenames;
var thenames = [];  
    
if (callCount < phonenames.length - 31) {
    
    var thearrayname = urlarray[callCount].replace(/ /g,"_");
    var thearraydevice = urlarray[callCount].replace(/ /g," ");

    phonepicsfull(thearrayname, thearraydevice, links, dirname);     
    callCount += 1;    
    
}else {
clearInterval(repeater);
console.log('The second round of phone shots is done ' + dirname);
setTimeout(function () {    
runphonesthird(links, dirname);
console.log('The third round of phone shots is starting ' + dirname);
       }, 1000*10);      

}
}, 1000*5);

function phonepicsfull(phone, thedevice, link, dir){
//console.log("Inside phonepicsfull " + thedevice);   
//var td = "'" + thedevice + "'";
//console.log("The phone name passed into function phonepics full -- " + phone + dir);    
//console.log("The device name with quotes " + td);    
console.log("Working on screenshot for " + thedevice + " from " + dir); 
    
    
  (async() => {
  const browser = await puppeteer.launch();
  let page = await browser.newPage();
  await page.emulate(devices[thedevice]);
  await page.goto(link);
  await page.screenshot({path: "./images/phones/" + dir +`/fulllength-${phone}.png`,
  fullPage: true});
  browser.close();

})();
  

};

};






function runphonesthird(links, dirname){

var callCount = 20;
var repeater = setInterval(function () {
var x = callCount;       
  
//var phonenames = [ 'Blackberry PlayBook'];
//var phonenames = ['Blackberry PlayBook', 'Blackberry PlayBook landscape'];
var phonenames = ['Blackberry PlayBook', 'Blackberry PlayBook landscape', 'BlackBerry Z30', 'BlackBerry Z30 landscape', 'Galaxy Note 3', 'Galaxy Note 3 landscape', 'Galaxy Note II', 'Galaxy Note II landscape', 'Galaxy S III', 'Galaxy S III landscape', 'Galaxy S5', 'Galaxy S5 landscape', 'iPad', 'iPad landscape', 'iPad Mini', 'iPad Mini landscape', 'iPad Pro', 'iPad Pro landscape', 'iPhone 4', 'iPhone 4 landscape', 'iPhone 5', 'iPhone 5 landscape', 'iPhone 6', 'iPhone 6 landscape', 'iPhone 6 Plus', 'iPhone 6 Plus landscape', 'Kindle Fire HDX', 'Kindle Fire HDX landscape', 'LG Optimus L70', 'LG Optimus L70 landscape', 'Microsoft Lumia 550', 'Microsoft Lumia 950', 'Microsoft Lumia 950 landscape', 'Nexus 10', 'Nexus 10 landscape', 'Nexus 4', 'Nexus 4 landscape', 'Nexus 5', 'Nexus 5 landscape', 'Nexus 5X', 'Nexus 5X landscape', 'Nexus 6', 'Nexus 6 landscape', 'Nexus 6P', 'Nexus 6P landscape', 'Nexus 7', 'Nexus 7 landscape', 'Nokia Lumia 520', 'Nokia Lumia 520 landscape', 'Nokia N9', 'Nokia N9 landscape'];
      
var urlarray = phonenames;
var thenames = [];  
    
if (callCount < phonenames.length - 21) {
    
    var thearrayname = urlarray[callCount].replace(/ /g,"_");
    var thearraydevice = urlarray[callCount].replace(/ /g," ");

    phonepicsfull(thearrayname, thearraydevice, links, dirname);     
    callCount += 1;    
    
}else {
clearInterval(repeater);
console.log('The third round of phone shots is done ' + dirname);
setTimeout(function () {    
runphonesfourth(links, dirname);
console.log('The fourth round of phone shots is starting ' + dirname);
       }, 1000*10);      

}
}, 1000*5);

function phonepicsfull(phone, thedevice, link, dir){
//console.log("Inside phonepicsfull " + thedevice);   
//var td = "'" + thedevice + "'";
//console.log("The phone name passed into function phonepics full -- " + phone + dir);    
//console.log("The device name with quotes " + td);    
console.log("Working on screenshot for " + thedevice + " from " + dir); 
    
    
  (async() => {
  const browser = await puppeteer.launch();
  let page = await browser.newPage();
  await page.emulate(devices[thedevice]);
  await page.goto(link);
  await page.screenshot({path: "./images/phones/" + dir +`/fulllength-${phone}.png`,
  fullPage: true});
  browser.close();

})();
  

};

};








function runphonesfourth(links, dirname){

var callCount = 30;
var repeater = setInterval(function () {
var x = callCount;       
  
//var phonenames = [ 'Blackberry PlayBook'];
//var phonenames = ['Blackberry PlayBook', 'Blackberry PlayBook landscape'];
var phonenames = ['Blackberry PlayBook', 'Blackberry PlayBook landscape', 'BlackBerry Z30', 'BlackBerry Z30 landscape', 'Galaxy Note 3', 'Galaxy Note 3 landscape', 'Galaxy Note II', 'Galaxy Note II landscape', 'Galaxy S III', 'Galaxy S III landscape', 'Galaxy S5', 'Galaxy S5 landscape', 'iPad', 'iPad landscape', 'iPad Mini', 'iPad Mini landscape', 'iPad Pro', 'iPad Pro landscape', 'iPhone 4', 'iPhone 4 landscape', 'iPhone 5', 'iPhone 5 landscape', 'iPhone 6', 'iPhone 6 landscape', 'iPhone 6 Plus', 'iPhone 6 Plus landscape', 'Kindle Fire HDX', 'Kindle Fire HDX landscape', 'LG Optimus L70', 'LG Optimus L70 landscape', 'Microsoft Lumia 550', 'Microsoft Lumia 950', 'Microsoft Lumia 950 landscape', 'Nexus 10', 'Nexus 10 landscape', 'Nexus 4', 'Nexus 4 landscape', 'Nexus 5', 'Nexus 5 landscape', 'Nexus 5X', 'Nexus 5X landscape', 'Nexus 6', 'Nexus 6 landscape', 'Nexus 6P', 'Nexus 6P landscape', 'Nexus 7', 'Nexus 7 landscape', 'Nokia Lumia 520', 'Nokia Lumia 520 landscape', 'Nokia N9', 'Nokia N9 landscape'];
      
var urlarray = phonenames;
var thenames = [];  
    
if (callCount < phonenames.length -11) {
    
    var thearrayname = urlarray[callCount].replace(/ /g,"_");
    var thearraydevice = urlarray[callCount].replace(/ /g," ");

    phonepicsfull(thearrayname, thearraydevice, links, dirname);     
    callCount += 1;    
    
}else {
clearInterval(repeater);
console.log('The fourth round of phone shots is done ' + dirname);
setTimeout(function () {    
runphonesfifth(links, dirname);
console.log('The fifth and final round of phone shots is starting '  + dirname);
       }, 1000*10);      

}
}, 1000*5);

function phonepicsfull(phone, thedevice, link, dir){
//console.log("Inside phonepicsfull " + thedevice);   
//var td = "'" + thedevice + "'";
//console.log("The phone name passed into function phonepics full -- " + phone + dir);    
//console.log("The device name with quotes " + td);    
console.log("Working on screenshot for " + thedevice + " from " + dir); 
    
    
  (async() => {
  const browser = await puppeteer.launch();
  let page = await browser.newPage();
  await page.emulate(devices[thedevice]);
  await page.goto(link);
  await page.screenshot({path: "./images/phones/" + dir +`/fulllength-${phone}.png`,
  fullPage: true});
  browser.close();

})();
  

};

};







function runphonesfifth(links, dirname){

var callCount = 40;
var repeater = setInterval(function () {
var x = callCount;       
  
//var phonenames = [ 'Blackberry PlayBook'];
//var phonenames = ['Blackberry PlayBook', 'Blackberry PlayBook landscape'];
var phonenames = ['Blackberry PlayBook', 'Blackberry PlayBook landscape', 'BlackBerry Z30', 'BlackBerry Z30 landscape', 'Galaxy Note 3', 'Galaxy Note 3 landscape', 'Galaxy Note II', 'Galaxy Note II landscape', 'Galaxy S III', 'Galaxy S III landscape', 'Galaxy S5', 'Galaxy S5 landscape', 'iPad', 'iPad landscape', 'iPad Mini', 'iPad Mini landscape', 'iPad Pro', 'iPad Pro landscape', 'iPhone 4', 'iPhone 4 landscape', 'iPhone 5', 'iPhone 5 landscape', 'iPhone 6', 'iPhone 6 landscape', 'iPhone 6 Plus', 'iPhone 6 Plus landscape', 'Kindle Fire HDX', 'Kindle Fire HDX landscape', 'LG Optimus L70', 'LG Optimus L70 landscape', 'Microsoft Lumia 550', 'Microsoft Lumia 950', 'Microsoft Lumia 950 landscape', 'Nexus 10', 'Nexus 10 landscape', 'Nexus 4', 'Nexus 4 landscape', 'Nexus 5', 'Nexus 5 landscape', 'Nexus 5X', 'Nexus 5X landscape', 'Nexus 6', 'Nexus 6 landscape', 'Nexus 6P', 'Nexus 6P landscape', 'Nexus 7', 'Nexus 7 landscape', 'Nokia Lumia 520', 'Nokia Lumia 520 landscape', 'Nokia N9', 'Nokia N9 landscape'];
      
var urlarray = phonenames;
var thenames = [];  
    
if (callCount < phonenames.length) {
    
    var thearrayname = urlarray[callCount].replace(/ /g,"_");
    var thearraydevice = urlarray[callCount].replace(/ /g," ");

    phonepicsfull(thearrayname, thearraydevice, links, dirname);     
    callCount += 1;    
    
} else {
clearInterval(repeater);
}
}, 1000*6);

function phonepicsfull(phone, thedevice, link, dir){
//console.log("Inside phonepicsfull " + thedevice);   
//var td = "'" + thedevice + "'";
//console.log("The phone name passed into function phonepics full -- " + phone + dir);    
//console.log("The device name with quotes " + td);    
console.log("Working on screenshot for " + thedevice + " from " + dir); 
    
    
  (async() => {
  const browser = await puppeteer.launch();
  let page = await browser.newPage();
  await page.emulate(devices[thedevice]);
  await page.goto(link);
  await page.screenshot({path: "./images/phones/" + dir +`/fulllength-${phone}.png`,
  fullPage: true});
  browser.close();

})();
  

};

};
