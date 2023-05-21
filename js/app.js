'use strict';

const hours = [
  '6:00am',
  '7:00am',
  '8:00am',
  '9:00am',
  '10:00am',
  '11:00am',
  '12:00pm',
  '1:00pm',
  '2:00pm',
  '3:00pm',
  '4:00pm',
  '5:00pm',
  '6:00pm',
  '7:00pm'
];

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
    let cookiesSold = Math.ceil(custPerHr * this.avgCookieSale);
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

Location.prototype.render = function() {
  this.calculateHourlyCookies();

  let tableRow = document.createElement('tr');
  salesTable.appendChild(tableRow);
  const store = document.createElement('td');
  tableRow.appendChild(store);
  store.textContent = this.name;

  let totalDailyCookies = 0;

  for(let i = 0; i < this.cookiesSoldPerHr.length; i++) {
    totalDailyCookies = totalDailyCookies + this.cookiesSoldPerHr[i];

    const hourlySales = document.createElement('td');
    tableRow.appendChild(hourlySales);
    hourlySales.textContent = this.cookiesSoldPerHr[i];
  }

  const total = document.createElement('td');
  tableRow.appendChild(total);
  total.textContent = totalDailyCookies;
};

function renderTotals() {
  let grandTotal = 0;

  const row = document.createElement('tr');
  salesTable.appendChild(row);
  const totalLabel = document.createElement('th');
  row.appendChild(totalLabel);
  totalLabel.setAttribute('id','total-label');
  totalLabel.textContent = 'Totals';

  for(let i = 0; i < hours.length; i++) {
    let hourlyTotal = 0;

    for(let j = 0; j < locations.length; j++) {
      hourlyTotal = hourlyTotal + locations[j].cookiesSoldPerHr[i];
      grandTotal = grandTotal + locations[j].cookiesSoldPerHr[i];
    }

    const cell = document.createElement('th');
    row.appendChild(cell);
    cell.setAttribute('id','hourly-total');
    cell.textContent = hourlyTotal;
  }

  const foot = document.createElement('th');
  row.appendChild(foot);
  foot.setAttribute('id','grand-total');
  foot.textContent = grandTotal;
}

const newStore = document.getElementById('store-form');

newStore.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = event.target.name.value;
  const minCust = parseInt(event.target.minCust.value);
  const maxCust = parseInt(event.target.maxCust.value);
  const avgCookies = parseFloat(event.target.avgCookies.value);

  const newLocation = new Location(name, minCust, maxCust, avgCookies);
  locations.push(newLocation);

  renderSalesReport();
});

const locations = [
  new Location('Seattle', 23, 65, 6.3),
  new Location('Tokyo', 3, 24, 1.2),
  new Location('Dubai', 11, 38, 3.7),
  new Location('Paris', 20, 38, 3.7),
  new Location('Lima', 2, 16, 4.6),
];

function renderSalesReport() {
  salesTable.innerHTML = '';
  buildHeader();
  for(let i = 0; i < locations.length; i++) {
    locations[i].render();
  }
  renderTotals();
}
renderSalesReport();
