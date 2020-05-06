//windows object
/*
window.open();

function windowOperations(){
    var newWindow = window.open("http://www.google.com.au","newwindow","height = 200,width=300");
    newWindow.moveTo(200,500);
    newWindow.close();
}


//screen object

alert("Screen width : " + screen.width + "\n Screen Height : " + screen.height + "\n Color Depth : " 
+screen.colorDepth + "\n Window Width : " + window.innerWidth + "\n Window Height : "
 + window.innerHeight + "\n Screen Avaliable Width : " + screen.availWidth +
 "\n Screen Avaliable Height : " + screen.availHeight + "\n Screen Pixel Depth : " 
 + screen.pixelDepth);


//navigator object

function navigatorProperties(){
    document.write("<br> The App Code Name is : " +navigator.appCodeName);
    document.write("<br> The App Name is : " + navigator.appName);
    document.write("<br> The product is : " + navigator.product);
    document.write("<br> Is the cookie enabled : " + navigator.cookieEnabled);
    document.write("<br> The platform is : " + navigator.platform);
    document.write("<br> The user agent is : " + navigator.userAgent);
}

navigatorProperties();
*/

//location object

function locationProperties(){
    console.log("<br> Href of the location : " + location.href);
    console.log("<br> Protocal of the location : " + location.protocol);
    console.log("<br> Host of the location : " + location.host);
    console.log("<br> Hostname of the location : " + location.hostname);
    console.log("<br> Pathname of the location : " + location.pathname);
    //console.log("<br> Assign function of the location : " + location.assign("https://www.google.com.au"));
}

locationProperties();


