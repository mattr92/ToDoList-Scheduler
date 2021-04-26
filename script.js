//get current day
//Background colro change
//save to local storage using save button

var now = moment();

$("#currentDay").text(now.format("dddd MMMM Do"));

const rows = document.getElementsByClassName("my-row");
let thisHour = parseInt(moment().format('h'));


//getting color to change depending on the hour
Array.from(rows).forEach(row => {
  let
    rowIdString = row.id,
    rowHour;
  if (rowIdString) {
    rowHour = parseInt(rowIdString);
  }
  if (rowHour) {
    // will compare to the hour and adjust color 
    if (thisHour === rowHour) {
      newColor(row, "red");
    } else if ((thisHour < rowHour) && (thisHour > rowHour - 6)) {
      newColor(row, "green");
    } else if ((thisHour > rowHour) && (thisHour < rowHour + 6)) {
      newColor(row, "lightgrey");
    }
  }
});

function newColor(element, color) {
  element.style.backgroundColor = color;
}

//save items into local storage 

var saveItem = localStorage.getItem("text");

function save(){

  var Item = document.getElementById("input").value;
  localStorage.setItem("text, Item");
  document.getElementById("form-control").innerHTML = Item + " SAVED";

}
function get(){
  localStorage.getItem("text");
  document.getElementById("form-control").innerHtml = storedItem + " OPENED"
}