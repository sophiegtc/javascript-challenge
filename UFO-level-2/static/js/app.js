// from data.js
var tableData = data;

// YOUR CODE HERE!
// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

var tbody = d3.select("tbody");
  data.forEach((ufo) => {
    var row = tbody.append("tr");
    Object.entries(ufo).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement1 = d3.select("#datetime");
  var inputElement2 = d3.select("#city");
  var inputElement3 = d3.select("#state");
  var inputElement4 = d3.select("#country");
  var inputElement5 = d3.select("#shape");
  
  // Get the value property of the input element
  var inputValue1 = inputElement1.property("value");
  var inputValue2 = inputElement2.property("value");
  var inputValue3 = inputElement3.property("value");
  var inputValue4 = inputElement4.property("value");
  var inputValue5 = inputElement5.property("value");

  console.log(tableData);

  var filteredData = tableData;
  if (inputValue1) {
    console.log(inputValue1);
    filteredData = filteredData.filter(filteredData => filteredData.datetime === inputValue1);
  }
  if (inputValue2) {
    console.log(inputValue2);
    filteredData = filteredData.filter(filteredData => filteredData.city === inputValue2);
  }
  if (inputValue3) {
    console.log(inputValue3);
    filteredData = filteredData.filter(filteredData => filteredData.state === inputValue3);
  }
  if (inputValue4) {
    console.log(inputValue4);
    filteredData = filteredData.filter(filteredData => filteredData.country === inputValue4);
  }
  if (inputValue5) {
    console.log(inputValue5);
    filteredData = filteredData.filter(filteredData => filteredData.shape === inputValue5);
  }
  console.log(filteredData);

  var tbody = d3.select("tbody");
    

  d3.select('tbody').html("");

  filteredData.forEach(function(ufo) {
      var row = tbody.append("tr");
       Object.entries(ufo).forEach(function([key, value]) {
         // Append a cell to the row for each value
         // in the weather report object
         var cell = row.append("td");
         cell.text(value);
       });
    });
}