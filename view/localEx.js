//add some javascript to localExample web site
const BUTTON = document.querySelector("doMathButton");

function doSomeMath(){
    var a = 5;
    var b= 4;
    
    function multiply(){
        var result = a*b;
    }
    
    return multiply;
}

var theResult = doSomeMath();



