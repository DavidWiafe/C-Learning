var SqlBtn = document.querySelector('#SQL-BTN');
let h1_ = document.querySelector("h1");
var SQLDiv = document.querySelector('.SQL');

var hideSQL = true;

// run once 'SQL' button is click 
SqlBtn.addEventListener('click',function( ) {
    console.log(" Clicked hideSQL = " + hideSQL)
   
    if(hideSQL == true){ // Hide the SQL section
        SQLDiv.style.display = "block";
        SqlBtn.textContent = "Hide SQL Details";
        hideSQL = false;
    }  else if (hideSQL == false){ // show the SQL section
         console.log("did i run?")
        SQLDiv.style.display = "none";
        SqlBtn.textContent = "Display SQL Details";
        hideSQL = true;
    }
  
}
);

var aiBtn = document.querySelector('#AI-btn');
var aiDiv = document.querySelector('.AI');
var hideAI = true;

// run once 'SQL' button is click 
aiBtn.addEventListener('click',function( ) {
   
    if(hideAI == true){ // Hide the SQL section
        aiDiv.style.display = "block";
        aiBtn.textContent = "Hide AI Details";
        hideAI = false;
    }  else if (hideAI == false){ // show the SQL section
         console.log("did i run?")
        aiDiv.style.display = "none";
        aiBtn.textContent = "Display AI Details";
        hideAI = true;
    }
  
}
);

var httpBtn = document.querySelector('#HTTP-Btn');
var httpDiv = document.querySelector('.http');
var hideHTTP = true;

// run once 'SQL' button is click 
httpBtn.addEventListener('click',function( ) {
   
    if(hideHTTP == true){ // Hide the SQL section
        httpDiv.style.display = "block";
        httpBtn.textContent = "Hide HTTP Details";
        hideHTTP = false;
    }  else if (hideHTTP == false){ // show the SQL section
         console.log("did i run?")
         httpDiv.style.display = "none";
        httpBtn.textContent = "Display HTTP Details";
        hideHTTP = true;
    }
  
}
);

//#API-Btn
//.API-Info
var APIBtn = document.querySelector('#API-Btn');
var APIDiv = document.querySelector('.API-Info');
var hideAPI = true;

// run once 'SQL' button is click 
APIBtn.addEventListener('click',function( ) {
   
    if(hideAPI == true){ // Hide the SQL section
        APIDiv.style.display = "block";
        APIBtn.textContent = "Hide API Details";
        hideAPI = false;
    }  else if (hideAPI == false){ // show the SQL section
        APIDiv.style.display = "none";
        APIBtn.textContent = "Display API Details";
        hideAPI = true;
    }
  
}
);

//#Rest_API-Btn
//.RestFUL
var RestAPIBtn = document.querySelector('#Rest_API-Btn');
var RestAPIDiv = document.querySelector('.RestFUL');
var hideRestAPI = true;

// run once 'SQL' button is click 
RestAPIBtn.addEventListener('click',function( ) {
   
    if(hideRestAPI == true){ // Hide the SQL section
        RestAPIDiv.style.display = "block";
        RestAPIBtn.textContent = "Hide Rest API Details";
        hideRestAPI = false;
    }  else if (hideRestAPI == false){ // show the SQL section
        RestAPIDiv.style.display = "none";
        RestAPIBtn.textContent = "Display Rest API Details";
        hideRestAPI = true;
    }
  
}
);

// #javaScript-Btn
// .javaScript
var javaScriptBtn = document.querySelector('#javaScript-Btn');
var javaScriptDiv = document.querySelector('.javaScript');
var hidejavaScript = true;

// run once 'SQL' button is click 
javaScriptBtn.addEventListener('click',function( ) {
   
    if(hidejavaScript == true){ // Hide the SQL section
        javaScriptDiv.style.display = "block";
        javaScriptBtn.textContent = "Hide JavaScript Details";
        hidejavaScript = false;
    }  else if (hidejavaScript == false){ // show the SQL section
        javaScriptDiv.style.display = "none";
        javaScriptBtn.textContent = "Display JavaScript Details";
        hidejavaScript = true;
    }
  
}
);