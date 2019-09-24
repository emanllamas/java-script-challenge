// from data.js
var tbody = document.querySelector("tbody");
var dateInput = document.querySelector("#datetime");
var stateInput = document.querySelector("#state");
var button = document.querySelector("#filter-btn");
var cityInput = document.querySelector("#city");
var countryInput = document.querySelector("#country");
var shapeInput = document.querySelector("#shape");
var tableDataF = data;



// Function build table
function renderTable(tableDataF){
  // First, clear out existing data
  tbody.html("");
  
  tableDataF.forEach(s => {
    var row = tbody.append("tr");
    Object.entries(s).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
}

renderTable();


function handleClick(event){

if (dateInput != "") {
  
  tableDataF = tableDataF.filter(s => {
    var date = s.datetime

  if (date === dateInput) {
    return tableDataF
    }
})}

 else {
   return(tableDataF)
  }


if (stateInput != "") {

  tableDataF = tableDataF.filter(s => {
    var state = s.state

  if (state === stateInput) {
    return tableDataF
    }
})}


if (cityInput != "") {
  
  tableDataF = tableDataF.filter(s => {
    var city = s.city

  if (city === cityInput) {
    return tableDataF
    }
})}

 else {
   return(tableDataF)
  }


if (countryInput != "") {
  
  tableDataF = tableDataF.filter(s => {
    var country = s.country
  
  if (country === countryInput) {
    return tableDataF
    }
  })}
  
  else {
    return(tableDataF)
  }


if (shapeInput != "") {
  
  tableDataF = tableDataF.filter(s => {
    var shape = s.shape
    
  if (shape === shapeInput) {
      return tableDataF
      }
    })}
    
    else {
      return(tableDatF)
      }

  renderTable(tableDataF);
}


button.addEventListener("click", handleClick);































// function handleClick() {

// }

// button.on("click", function() {

//     var inputElement = d3.select(".form-control");
//     var inputValue = inputElement.property("value");

//     console.log(inputValue)
//     console.log(tableData)

//     filteredData = tableData.filter(s => s.datetime === inputValue)

//     console.log(filteredData)
    
//     filteredData.forEach(s => {
//         var row = tbody.append("tr");
//         Object.entries(s).forEach(([key, value]) => {
//           var cell = row.append("td");
//           cell.text(value);
//         });
//       });

// })