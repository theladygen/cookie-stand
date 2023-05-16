'use strict';

const hours = ['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm'];


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
  const row = document.createElement('tr');
  salesTable.appendChild(row);
  const blank = document.createElement('th');
  row.appendChild(blank);

  for(let i = 0; i < hours.length; i++) {
    const head = document.createElement('th');
    row.appendChild(head);
    head.textContent = hours[i];
  }
  const total = document.createElement('th');
  row.appendChild(total);
  total.textContent = 'Daily Location Total';
}


//this render function creates a table row, fills it with data, and adds it to the sales table
Location.prototype.render = function() {
  this.calculateHourlyCookies();

  let tableRow = document.createElement('tr');
  salesTable.appendChild(tableRow);
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


//all location totals by hour and Totals written in first cell no worky
function renderTotals() {
  let grandTotal = 0;

  const row = document.createElement('tr');
  salesTable.appendChild(row);
  const totalLabel = document.createElement('th');
  row.appendChild(totalLabel);
  totalLabel.textContent = 'Totals';

  for(let i = 0; i < hours.length; i++) {
    let hourlyTotal = 0;
    for(let j = 0; j < locations.length; j++) {
      hourlyTotal = hourlyTotal + locations[j].cookiesSoldPerHr[i];
      grandTotal = grandTotal + locations[j].cookiesSoldPerHr[i];
    }
    const cell = document.createElement('th');
    row.appendChild(cell);
    cell.textContent = hourlyTotal;
  }

  const foot = document.createElement('th');
  row.appendChild(foot);
  foot.textContent = grandTotal;
}
// totals();



let seattle = new Location('Seattle', 23, 65, 6.3);
let tokyo = new Location('Tokyo', 3, 24, 1.2);
let dubai = new Location('Dubai', 11, 38, 3.7);
let paris = new Location('Paris', 20, 38, 3.7);
let lima = new Location('Lima', 2, 16, 4.6);


const locations = [seattle, tokyo, dubai, paris, lima];

buildHeader();
for(let i = 0; i < locations.length; i++) {
  locations[i].render();
}

renderTotals();
