//add some html

$(document).ready(function(){

//alert('ddd');

// Helps with IE debugging.
function  getScript2 (url, callback) {
        var head    = document.getElementsByTagName("head")[0];
        var script  = document.createElement("script");
        var done    = false; // Handle Script loading

        script.src  = url;
        script.onload = script.onreadystatechange = function() { // Attach handlers for all browsers
            if ( !done && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete") ) {
                done = true;
                if (callback) { callback(); }
                script.onload = script.onreadystatechange = null; // Handle memory leak in IE
            }
        };

        head.appendChild(script);
        return undefined; // We handle everything using the script element injection
    };
// -----------------------------------------


// create a dummy block to inject js
$("<div></div>").attr('id','calyx-js').appendTo('body');

getScript2('https://raw.githubusercontent.com/CALYXie/demodevel/master/init.js');


});
