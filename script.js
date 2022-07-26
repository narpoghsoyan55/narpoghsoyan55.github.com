var clickMeBtn = document.getElementById("openPopup");
var popupDiv = document.getElementsByClassName("popup")[0];
clickMeBtn.onclick = function(){
popupDiv.style.display = "block";
}
var closeBtn = document.getElementById("close");
closeBtn.onclick = function(){
    popupDiv.style.display = "none";
}
var dataArray = ["Dollar", "Rubli", "Amd"];
var showListSpan = document.getElementById("showList");
var listDiv = document.getElementById("List");
showListSpan.onclick = function(){
    var output = "";
    for(let i = 0; i < dataArray.length; i++){
     output += "<p>" +dataArray[i]+ "</p>";
     console.log(dataArray[i]);
    }
    listDiv.innerHTML = output;
}