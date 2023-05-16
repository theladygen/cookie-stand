'use strict';

const hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];


function Location(name, minCust, maxCust, avgCookieSale) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  this.cookiesSoldPerHr = [];
}



Location.prototype.randomCustPerHr = function() {
  return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
};



Location.prototype.calculateHourlyCookies = function() {
  for (let i = 0; i < hours.length; i++) {
    let custPerHr = this.randomCustPerHr();
    console.log(custPerHr);
    let cookiesSold = Math.ceil(custPerHr * this.avgCookieSale);
    console.log(cookiesSold);
    this.cookiesSoldPerHr.push(cookiesSold);
  }
};



const salesTable = document.getElementById('sales-table');


//this render function creates a table row, fills it with data, and adds it to the sales table
Location.prototype.render = function() {
  this.calculateHourlyCookies();

  let tableRow = document.createElement('tr');
  salesTable.append(tableRow);

  const store = document.createElement('td');
  tableRow.appendChild(store);
  store.textContent = this.name;

  for(let i = 0; i < this.cookiesSoldPerHr.length; i++) {
    const hourlySales = document.createElement('td');
    tableRow.appendChild(hourlySales);
    hourlySales.textContent = this.cookiesSoldPerHr[i];
  }


  let totalDailyCookies = 0;

  for (let i = 0; i < hours.length; i++) {
    totalDailyCookies = totalDailyCookies + this.cookiesSoldPerHr[i];
  }
  const total = document.createElement('td');
  tableRow.appendChild(total);
  total.textContent = totalDailyCookies;
};



function buildSalesTable () {
  buildHeader();
//loop over locations and render them
//all location totals by hour row
}

function buildHeader() {
  //this function is going to create a row printing all hours in colums then add row (append)
}

function totalAllLocations() {

  for(let i = 0; i < totalAllLocations.length; i++) {
    this.displaySalesNumbers.push(totalAllLocations[i]);
  }
}

let seattle = new Location('Seattle', 23, 65, 6.3);
let tokyo = new Location('Tokyo', 3, 24, 1.2);
let dubai = new Location('Dubai', 11, 38, 3.7);
let paris = new Location('Paris', 20, 38, 3.7);
let lima = new Location('Lima', 2, 16, 4.6);

const locations = [seattle, tokyo, dubai, paris, lima];

buildSalesTable();