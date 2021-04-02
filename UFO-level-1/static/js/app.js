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

// Add data into table
var tbody = d3.select("tbody");

data.forEach((data) => {
  var row = tbody.append("tr");
  Object.entries(data).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(tableData);

  var filteredData = tableData.filter(date => date.datetime === inputValue);

  console.log(filteredData);


 
  d3.select('tbody').html("");
  
  filteredData.forEach((filteredData) => {
  var row = tbody.append("tr");
  Object.entries(filteredData).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});
} 

  