var SqlBtn = document.querySelector('#SQL-BTN');
let h1_ = document.querySelector("h1");
var SQLDiv = document.querySelector('.SQL');

console.log("button =" );
console.log(SqlBtn);
console.log("h1 =");
console.log(h1_);
console.log("SQL Div =");
console.log(SQLDiv);

var hideSQL = true;

SqlBtn.addEventListener('click',function( ) {
    console.log(" Clicked hideSQL = " + hideSQL)
    if(hideSQL == true){
        SQLDiv.style.display = "block";
        SqlBtn.textContent = "Hide SQL Details";
        hideSQL = false;
    } 
     else if (hideSQL == false){
         console.log("did i run?")
        SQLDiv.style.display = "none";
        SqlBtn.textContent = "Display SQL Details";
        hideSQL = true;
    }
  
}
);

console.log("hideSQL = " + hideSQL)
/*
function openDiv() {
  var div = document.getElementsByClassName("SQL");
  div.style.display = "block";
  var h1_ = document.getElementById("Main-Learning");
  h1_1.style.color = "blue";
}*/