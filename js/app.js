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
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
};

function randomCustPerHr(minCust, maxCust) {
  return Math.floor(Math.random() * (maxCust - minCust) + minCust);
}

function calculateHourlyCookiesSeattle() {
  let cookiesSoldPerHr = [];
  for (let i = 0; i < hours.length; i++) {
    let cookiesSold = Math.ceil(randomCustPerHr(seattle.minCust, seattle.maxCust) * seattle.avgCookieSale);
    cookiesSoldPerHr.push(cookiesSold);
  }
  return cookiesSoldPerHr;
}



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

//minHourlyCust
//maxHourlyCust
//avgCookiesPerCust

//cookiesSoldPerHr
//custPerHr?
//totalSales



//calculate and store the simulated amounts of cookies purchased for each hr at each location using avg cookies purchased and the random # of customers generated
//store results for each location in a separate array... perhaps as a property of the object representing that location
//display the values of each array as ul's in the browser
//calculating the sum of these hourly totals; your output for each location should look like this:


// Seattle

//* 6am: 16 cookies
//* 7am: 20 cookies, etc


//display lists on sales.html
