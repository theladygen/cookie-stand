'use strict';

const hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

// const seattle = {
//   name: 'Seattle',
//   minCust: 23,
//   maxCust: 65,
//   avgCookieSale: 6.3,
//   cookiesSoldPerHr: [],
// };

// const tokyo = {
//   name: 'Tokyo',
//   minCust: 3,
//   maxCust: 24,
//   avgCookieSale: 1.2,
//   cookiesSoldPerHr: [],
// };

// const dubai = {
//   name: 'Dubai',
//   minCust: 11,
//   maxCust: 38,
//   avgCookieSale: 3.7,
//   cookiesSoldPerHr: [],
// };

// const paris = {
//   name: 'Paris',
//   minCust: 20,
//   maxCust: 38,
//   avgCookieSale: 2.3,
//   cookiesSoldPerHr: [],
// };

// const lima = {
//   name: 'Lima',
//   minCust: 2,
//   maxCust: 16,
//   avgCookieSale: 4.6,
//   cookiesSoldPerHr: [],
// };

function Locations(name, minCust, maxCust, avgCookieSale) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  this.cookiesSoldPerHr = [];
}


//to figure random customers per hour
// function randomCustPerHr(minCust, maxCust) {
//   return Math.floor(Math.random() * (maxCust - minCust) + minCust);
// }

Locations.prototype.randomCustPerHr = function() {
  return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
};

//to use random customer per hour figure * average cookie sale to get cookies sold per hour estimate & add each hour to array in object
// function calculateHourlyCookies(location) {
//   for (let i = 0; i < hours.length; i++) {
//     let cookiesSold = Math.ceil(randomCustPerHr(location.minCust, location.maxCust) * location.avgCookieSale);
//     location.cookiesSoldPerHr.push(cookiesSold);
//   }
// }

Locations.prototype.calculateHourlyCookies = function() {
  for (let i = 0; i < hours.length; i++) {
    let custPerHr = this.randomCustPerHr();
    console.log(custPerHr);
    let cookiesSold = Math.ceil(custPerHr * this.avgCookieSale);
    console.log(cookiesSold);
    this.cookiesSoldPerHr.push(cookiesSold);
  }
};

//made section in sales.html with id to access it by
const salesNumbersContainer = document.getElementById('store-sales');


Locations.prototype.displaySalesNumbers = function() {
  this.calculateHourlyCookies;

  const article = document.createElement('article');
  salesNumbersContainer.appendChild(article);

  const heading = document.createElement('h3');
  heading.textContent = this.name;
  article.appendChild(heading);

  const list = document.createElement('ul');
  article.appendChild(list);

  let totalCookies = 0;

  for (let i = 0; i < hours.length; i++) {
    totalCookies = this.cookiesSoldPerHr[i] + totalCookies;

    const listItem = document.createElement('li');
    list.appendChild(listItem);
    listItem.textContent = `${hours[i]}: ${this.cookiesSoldPerHr[i]} cookies`;
  }
  const totalDailyCookies = document.createElement('li');
  list.appendChild(totalDailyCookies);
  totalDailyCookies.textContent = `Total: ${totalCookies} cookies`;
};


//to display the cookie sales numbers for each location with a heading and bulleted hourly sales list ending with a cookies sold total for the day
// function displaySalesNumbers(location) {
//   calculateHourlyCookies(location);

//   const article = document.createElement('article');
//   salesNumbersContainer.appendChild(article);

//   const heading = document.createElement('h3');
//   heading.textContent = location.name;
//   article.appendChild(heading);

//   const list = document.createElement('ul');
//   article.appendChild(list);

//   let totalCookies = 0;

//   for (let i = 0; i < hours.length; i++) {
//     totalCookies = location.cookiesSoldPerHr[i] + totalCookies;

//     const listItem = document.createElement('li');
//     list.appendChild(listItem);
//     listItem.textContent = `${hours[i]}: ${location.cookiesSoldPerHr[i]} cookies`;
//   }
//   const totalDailyCookies = document.createElement('li');
//   list.appendChild(totalDailyCookies);
//   totalDailyCookies.textContent = `Total: ${totalCookies} cookies`;
// }

// const totalAllLocations = [seattle, tokyo, dubai, paris, lima];

// for(let i = 0; i < totalAllLocations.length; i++) {
//   displaySalesNumbers(totalAllLocations[i]);
// }

function totalAllLocations() {

  for(let i = 0; i < totalAllLocations.length; i++) {
    this.displaySalesNumbers(totalAllLocations[i]);
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
