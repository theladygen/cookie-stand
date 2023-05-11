'use strict';

const hours = [
  '6am',
  '7am',
  '8am',
  '9am',
  '10am',
  '11am',
  '12pm',
  '1pm',
  '2pm',
  '3pm',
  '4pm',
  '5pm',
  '6pm',
  '7pm'
];


const seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
  cookiesSoldPerHr: [],
};

function randomCustPerHr(minCust, maxCust) {
  return Math.floor(Math.random() * (maxCust - minCust) + minCust);
}

function calculateHourlyCookies(location) {
  for (let i = 0; i < hours.length; i++) {
    let cookiesSold = Math.ceil(randomCustPerHr(location.minCust, location.maxCust) * location.avgCookieSale);
    location.cookiesSoldPerHr.push(cookiesSold);
  }
}
const salesNumbersContainer = document.getElementById('store-sales');

function displaySalesNumbers(location) {
  calculateHourlyCookies(location);

  const article = document.createElement('article');
  salesNumbersContainer.appendChild(article);

  const heading = document.createElement('h3');
  heading.textContent = location.name;
  article.appendChild(heading);

  const list = document.createElement('ul');
  article.appendChild(list);

  let totalCookies = 0;

  for (let i = 0; i < hours.length; i++) {
    totalCookies = location.cookiesSoldPerHr[i] + totalCookies;
    const listItem = document.createElement('li');
    list.appendChild(listItem);
    listItem.textContent = `${hours[i]}: ${location.cookiesSoldPerHr[i]} cookies`;
  }
  const totalDailyCookies = document.createElement('li');
  list.appendChild(totalDailyCookies);
  totalDailyCookies.textContent = `Total: ${totalCookies} cookies`;
}
// displaySalesNumbers()

const tokyo = {
  minCust: 3,
  maxCust: 24,
  avgCookieSale: 1.2,
};

const dubai = {
  minCust: 11,
  maxCust: 38,
  avgCookieSale: 3.7,
};

const paris = {
  minCust: 20,
  maxCust: 38,
  avgCookieSale: 2.3,
};

const lima = {
  minCust: 2,
  maxCust: 16,
  avgCookieSale: 4.6,
};





// // update locations so that the structure satisfies the required interface for displaySalesNumbers(location)
// call the function for all of the locations
// if you feel like it, put all of them locations in an array and loop over it to call the function (but you don’t have to)
// as a thought exercise, what’s gonna happen to the seattle object if I call calculateHourlyCookies(seattle) twice in a row
