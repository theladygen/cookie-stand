'use strict';

const hours = ['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm','Daily Location Total'];


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
function buildHeader() {
  //need to add blank cells before the hours so they align
  //better way to add "Daily Location Total" than in the hours array?
  for(let i = 0; i < hours.length; i++) {
    const head = document.createElement('th');
    salesTable.append(head);
    head.textContent = hours[i];
  }
}
buildHeader();

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


// //all location totals by hour row
// function buildFooter() {
//   for(let i = 0; i < totalAllLocations.length; i++) {
//     cookiesSoldPerHr.push(totalAllLocations[i]);
//   }
// }

Location.prototype.totals = function () {
  let grandTotals = 0;
  for(let i = 0; i < hours.length; i++) {
    let hourlyTotals = 0;
    for(let j = 0; j < locations.length; j++) {
      hourlyTotals = hourlyTotals + locations[j].calculateHourlyCookies[i];
      grandTotals = grandTotals + locations[j].calculateHourlyCookies[i];
    }
  }
  const foot = document.createElement('th');
  salesTable.append(foot);
  foot.textContent = grandTotals;
};



let seattle = new Location('Seattle', 23, 65, 6.3);
let tokyo = new Location('Tokyo', 3, 24, 1.2);
let dubai = new Location('Dubai', 11, 38, 3.7);
let paris = new Location('Paris', 20, 38, 3.7);
let lima = new Location('Lima', 2, 16, 4.6);

const locations = [seattle, tokyo, dubai, paris, lima];

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

