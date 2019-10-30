// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the ufo data from data.js
console.log(data);

// // Step 1: Loop Through `data` and console.log each ufo report object
data.forEach(function (ufo) {
  console.log(ufo);
});

// // Step 2:  Use d3 to append one table row `tr` for ufo report object
data.forEach(function (ufo) {
  console.log(ufo);
  var row = tbody.append("tr");
});

// // Step 3:  Use `Object.entries` to console.log each ufo report value
data.forEach(function (ufo) {
  console.log(ufo);
  var row = tbody.append("tr");

  Object.entries(ufo).forEach(function ([key, value]) {
    console.log(key, value);
  });
});

// // Step 5: Use d3 to update each cell's text with
data.forEach(function (ufo) {
  console.log(ufo);
  var row = tbody.append("tr");
  Object.entries(ufo).forEach(function ([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    // in the ufo report object
    var cell = row.append("td");
    cell.text(value);
  });
});


// Select the button
var button = d3.select("#filter-btn");

button.on("click", function () {

  var list = d3.select("tbody");

  // remove any children from the list to
  list.html("");


// Select the input element and get the raw HTML node
var inputElement = d3.select("#datetime");

// Get the value property of the input element
var inputValue = inputElement.property("value");

console.log(inputValue);
console.log(data);

var filteredData = data.filter(event => event.datetime === inputValue);

var tbody1 = d3.select("tbody");

// Console.log the ufo filtered data from data.js
console.log(filteredData);

  // // Step 1: Loop Through `data` and console.log each ufo report object
filteredData.forEach(function (ufo1) {
  console.log(ufo1);
});

// // Step 2:  Use d3 to append one table row `tr` for ufo report object
filteredData.forEach(function (ufo1) {
  console.log(ufo1);
  var row = tbody1.append("tr");
});

// // Step 3:  Use `Object.entries` to console.log each ufo report value
filteredData.forEach(function (ufo1) {
  console.log(ufo1);
  var row = tbody1.append("tr");

  Object.entries(ufo1).forEach(function ([key, value]) {
    console.log(key, value);
  });
});

// // Step 5: Use d3 to update each cell's text with
filteredData.forEach(function (ufo1) {
  console.log(ufo1);
  var row = tbody1.append("tr");
  Object.entries(ufo1).forEach(function ([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    // in the ufo report object
    var cell = row.append("td");
    cell.text(value);
  });
});

});