
function links() {
var request = require('request');
var cheerio = require('cheerio');
var URL = require('url-parse');
const puppeteer = require('puppeteer');
//const screenshot = require('./pic1.js'); 
const screenshot = require('./ssrunner.js');
const phonepics = require('./phonepics.js'); 
    
var START_URL = "https://www.dancingbearaspen.com/";
var MAX_PAGES_TO_VISIT = 1;

    
//WHERE FUN STARTS    
    

var pagesVisited = {};
var numPagesVisited = 0;
var pagesToVisit = [];
var url = new URL(START_URL);
var baseUrl = url.protocol + "//" + url.hostname;

var urllink = [];   
console.log("Starting to collect links from " + START_URL);    

    
pagesToVisit.push(START_URL);

    
//CRAWL STARTS HERE
//
function crawl() {
  //Checks the number of pages vs Max pages to visit
  if(numPagesVisited >= MAX_PAGES_TO_VISIT) {
    //console.log("Reached max limit of number of pages to visit set to " + MAX_PAGES_TO_VISIT);
    //console.log("THIS IS THE URLLINK ARRAY WHEN ALL IS SAID AND DONE  " + urllink);
    var newlink = urllink;  
    //console.log("THIS IS THE NEWLINK ARRAY WHEN ALL IS SAID AND DONE" + newlink);
    module.exports.newlink = newlink;
    screenshot.screenshot(newlink);
    //phonepics.phonepics(newlink);  
    return;
  }
  var nextPage = pagesToVisit.pop();
  if (nextPage in pagesVisited) {
    // We've already visited this page, so repeat the crawl
    crawl();
    
  } else {
       
// New page we haven't visited
visitPage(nextPage, crawl);


      
//console.log("The nextPage is " + nextPage);

 
  }
}
crawl();
function visitPage(url, callback) {
  //console.log("THIS IS THE URL  " + url);
 
    
    
    
  function link(url){
    //console.log("THIS IS THE URL INSIDE LINK FUNCTION  " + url);
    var thepage = url;
    //console.log("var thepage = " + thepage);
    var thepage = urllink.push(url);
    //console.log("var nextPage = " + nextPage);
    //console.log("var thepage = " + thepage);
    
    
    //console.log("the link function is working var urllink is " + urllink);
    //module.exports.link = link; 
};

link(url);    
    
    
    
    
  // Add page to our set
  pagesVisited[url] = true;
  numPagesVisited++;
  // Make the request
  //console.log("Visiting page " + url);
  request(url, function(error, response, body) {
     // Check status code (200 is HTTP OK)
    // console.log("Status code: " + response.statusCode);
     if(response.statusCode !== 200) {
       callback();
       return;
     
     }
     // Parse the document body
     var $ = cheerio.load(body);
     var i = 1;
      if(i === 0) {   
       console.log('Word ' + SEARCH_WORD + ' found at page ' + url);
     } else {
       collectInternalLinks($);
       // In this short program, our callback is just calling crawl()
       callback();
       
     }
  });
}


function collectInternalLinks($) {
    var relativeLinks = $("a[href^='/']");
    //console.log("Found " + relativeLinks.length + " relative links on " + START_URL);
    //console.log("Urls pagesToVisit " + pagesToVisit);
    
//var websiteurls = pagesToVisit;
//module.exports.websiteurls = websiteurls;    
    relativeLinks.each(function() {
        pagesToVisit.push(baseUrl + $(this).attr('href'));
    });
}
   

//ends links function    
};
//links();


module.exports.links = links;

//for (x=0 ; x <= numPagesVisited ; x++) {
//var x = 0;
//};

//fs.writeFile("./urls.json", (rsb), (err) => {
//if (err) {
//    console.error(err);
//    return;
// };
//});