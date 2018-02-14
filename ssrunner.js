const puppeteer = require('puppeteer');
const fs = require('fs');
//Imports Basic Pics Functions from basicpics.js
const basicpicswide = require('./basicpics.js');
const basicpicssmall = require('./basicpics.js');
const basicpicsbanner = require('./basicpics.js');
//Imports Random Pics Functions from randompics.js
const randompicswide = require('./randompics.js');
const randompicssmall = require('./randompics.js');
//Imports Phone Pics Functions from phonepics.js
const phonepics = require('./phonepics.js');
const phonepicsshort = require('./phonepicsshort.js')
var newlink = require('./urlfinder.js');
var sslinks = newlink;



function screenshot(sslinks){
  //console.log("newlinks = " + sslinks.length);
 fs.mkdirSync("images"); 
 run(sslinks); 
};
module.exports.screenshot = screenshot;


function run(urlarray){
var linkarray = urlarray;
var plink = urlarray;
//console.log("Here are the links from the website " + linkarray);
//console.log("plinks = " + plink.length);
console.log("Links collected now working on screenshots for this many pages " + urlarray.length);
//console.log(linkarray.length);
var callCount = 0;
fs.mkdirSync("images/basicshots");
fs.mkdirSync("images/banner");    
fs.mkdirSync("images/randomshots");
fs.mkdirSync("images/phones");  
//phonepics.phonepics(plink);
phonepicsshort.phonepicsshort(plink); 
    
    
//All the repeat function stuff
var repeater = setInterval(function () {
var x = callCount;

    if (callCount < linkarray.length) {
    callCount += 1;      
 xnamer(linkarray);       
 
function xnamer(links){
 // console.log("We are working with an array that is this long = " + links.length); 
//  console.log("xnamer sslinks includes = " + links);
//  console.log("xnamer sslinks firts link 0 is " + links[0]);     
 var str = urlarray[x];
 var mylink = urlarray[x];
 //console.log("The str starts as  " + str);
 //console.log("Starting to work on  " + str);
 
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
  
};   
      
  } else {
clearInterval(repeater);
setTimeout(function () {  
console.log('All the regular pics are done'); 
phonepics.phonepics(plink);
 }, 1000*60*2);     
  };
}, 1000*60*2);
};

function makefolder(thelink, dirname){      
var dir = dirname;
console.log("A file has been made for images from " + dirname);

fs.mkdirSync("./images/basicshots/" + dir);
fs.mkdirSync("./images/randomshots/" + dir);
fs.mkdirSync("./images/banner/" + dir);
//console.log("Files created"); 

var t = 12;
setTimeout(function () {    
basicpicswide.basicpicswide(thelink, dir);
    setTimeout(function () {    
basicpicssmall.basicpicssmall(thelink, dir);
        setTimeout(function () {
randompicswide.randompicswide(thelink, dir);
            setTimeout(function () {    
randompicssmall.randompicssmall(thelink, dir);
               setTimeout(function () {    
basicpicsbanner.basicpicsbanner(thelink, dir);

        }, 1000*t);
       }, 1000*t);  
      }, 1000*t);      
     }, 1000*t);    
    }, 1000*t);

};

