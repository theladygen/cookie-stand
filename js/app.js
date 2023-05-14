'use strict';

const hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];


function Locations(name, minCust, maxCust, avgCookieSale) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  this.cookiesSoldPerHr = [];
  this.totalAllLocations = [];
}



Locations.prototype.randomCustPerHr = function() {
  return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
};



Locations.prototype.calculateHourlyCookies = function() {
  for (let i = 0; i < hours.length; i++) {
    let custPerHr = this.randomCustPerHr();
    console.log(custPerHr);
    let cookiesSold = Math.ceil(custPerHr * this.avgCookieSale);
    console.log(cookiesSold);
    this.cookiesSoldPerHr.push(cookiesSold);
  }
};



const salesNumbersContainer = document.getElementById('storeSales');



Locations.prototype.displaySalesNumbers = function() {
  console.log(this.displaySalesNumbers);
  this.calculateHourlyCookies();

  // const cookieTable = document.createElement('table');
  // salesNumbersContainer.appendChild(cookieTable);

  // const headerRow = document.createElement('tr');
  // cookieTable.appendChild(headerRow);
  // for (let i = 0; i < hours.length; i++) {
  //   headerRow.textContent = hours[i];
  // }
  // let cookieTable = document.querySelector('table');
  // salesNumbersContainer.append(cookieTable);

  // let tableHead = document.createElement('tr');
  // let tableHours = document.createElement('th');
  // tableHead.appendChild(tableHours);
  // tableHours.textContent = 'hours';

  let tableRow = document.createElement('tr');
  salesNumbersContainer.append(tableRow);

  const store = document.createElement('td');
  tableRow.appendChild(store);
  store.textContent = this.name;

  const hourlySales = document.createElement('td');
  tableRow.appendChild(hourlySales);
  for(let i = 0; i < this.cookiesSoldPerHr.length; i++) {
    hourlySales.textContent = this.cookiesSoldPerHr;
  }


  let totalDailyCookies = 0;

  for (let i = 0; i < hours.length; i++) {
    totalDailyCookies = this.cookiesSoldPerHr[i] + totalDailyCookies;
  }
  const totalAllStoresPerHr = document.createElement('td');
  tableRow.appendChild(totalAllStoresPerHr);
  totalAllStoresPerHr.textContent = this.totalAllLocations;
};



function totalAllLocations() {

  for(let i = 0; i < totalAllLocations.length; i++) {
    this.displaySalesNumbers.push(totalAllLocations[i]);
  }
}


let seattle = new Locations('Seattle', 23, 65, 6.3);
let tokyo = new Locations('Tokyo', 3, 24, 1.2);
let dubai = new Locations('Dubai', 11, 38, 3.7);
let paris = new Locations('Paris', 20, 38, 3.7);
let lima = new Locations('Lima', 2, 16, 4.6);

console.log(seattle);
console.log(tokyo);
console.log(dubai);
console.log(paris);
console.log(lima);

totalAllLocations();

// get functions for hourly cookies and daily location totals into tr/td's
// get nested functions for getting totals of ALL locations EACH hour combined along bottom

