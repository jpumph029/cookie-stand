'use strict';
var hoursOpen = ['6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm', '8:00 pm'];

var stores = [];
function SalmonCookieStore(name, minCustPerHour, maxCustPerHour, avgCookiesPerCust) {
  this.name = name;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.custPerHour = [];
  this.cookiesPerHour = [];
  this.dailyTotal = 0;
  stores.push(this);
  this.render();
}

SalmonCookieStore.prototype.getAverageCustPerHour = function (min, max) {
  // console.log(hoursOpen)
  for (var i = 0; i < hoursOpen.length; i++) {
    var randomCust = Math.floor(Math.random() * (max - min + 1) + min);
    this.custPerHour.push(randomCust);
  }
}

// renders the graph 
SalmonCookieStore.prototype.render = function () {
  // Line below will generate hourly sales, which also generates customers per hour
  this.getHourlySales();

  this.tableBody();

}

SalmonCookieStore.prototype.getHourlySales = function () {
  // line below will populate custPerHour
  this.getAverageCustPerHour(this.minCustPerHour, this.maxCustPerHour);

  for (var i = 0; i < hoursOpen.length; i++) {
    var perHour = Math.round(this.custPerHour[i] * this.avgCookiesPerCust);
    this.cookiesPerHour.push(perHour);
    this.dailyTotal += perHour;
  }

}


// anchors and STARTS the TABLE
function createTable() {
  var mainEl = document.getElementById('main-content');
  var tblEl = document.createElement('table');
  var theadEl = document.createElement('thead');
  var tbodyEl = document.createElement('tbody');
  var tfootEl = document.createElement('tfoot');

  mainEl.appendChild(tblEl);
  tblEl.appendChild(theadEl);
  tblEl.appendChild(tbodyEl);
  tblEl.appendChild(tfootEl);

  tblEl.id = 'cookies-table';
  theadEl.id = 'tbl-head';
  tbodyEl.id = 'tbl-body';
  tfootEl.id = 'tbl-foot';
  tblEl.className = 'tbl';
}
createTable();

// creates the TABLE HEAD
function tableHead() {
  var thEl = document.getElementById('tbl-head');
  var trEl = document.createElement('tr');
  thEl.appendChild(trEl);
  for (var i = 0; i <= hoursOpen.length; i++) {
    var tdEl = document.createElement('td');
    trEl.appendChild(tdEl);
    tdEl.textContent = hoursOpen[i];
  }
}
tableHead();

//creates the TABLE BODY 
SalmonCookieStore.prototype.tableBody = function () {

  var tbEl = document.getElementById('tbl-body');
  var trEl = document.createElement('tr');
  tbEl.appendChild(trEl);
  for (var j = 0; j <= this.cookiesPerHour.length; j++) {
    var tdEl = document.createElement('td');
    trEl.appendChild(tdEl);
    tdEl.textContent = this.cookiesPerHour[j];
  };
}

//stores 
var fnP = new SalmonCookieStore('First and Pike', 23, 65, 6.3);
var seaTac = new SalmonCookieStore('SeaTac Airport', 3, 24, 1.2);
var capHill = new SalmonCookieStore('Capitol Hill', 20, 38, 2.3);
var sC = new SalmonCookieStore('Seattle Center', 11, 38, 3.7);
var alki = new SalmonCookieStore('Alki', 2, 16, 4.6);
