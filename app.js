'use strict';
var hoursOpen = ['6:00 am ', '7:00 am ', '8:00 am ', '9:00 am ', '10:00 am ', '11:00 am ', '12:00 pm ', '1:00 pm ', '2:00 pm ', '3:00 pm ', '4:00 pm ', '5:00 pm ', '6:00 pm ', '7:00 pm ', '8:00 pm '];

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
};
SalmonCookieStore.prototype.getAverageCustPerHour = function (min, max) {
  // console.log(hoursOpen)
  for (var i = 0; i < hoursOpen.length; i++) {
    var randomCust = Math.floor(Math.random() * (max - min + 1) + min);
    this.custPerHour.push(randomCust);
  }
};

SalmonCookieStore.prototype.getHourlySales = function () {
  // line below will populate custPerHour
  this.getAverageCustPerHour(this.minCustPerHour, this.maxCustPerHour);
  
  for (var i = 0; i < hoursOpen.length; i++) {
    var perHour = Math.round(this.custPerHour[i] * this.avgCookiesPerCust);
    this.cookiesPerHour.push(perHour);
    this.dailyTotal += perHour;
  }
  
};

// renders the graph 
SalmonCookieStore.prototype.render = function () {
  console.log('stores arr',stores);
  // Line below will generate hourly sales, which also generates customers per hour
  this.getHourlySales();  
  
  // this creates the Body of the Table
  var tbEl = document.getElementById('tbl-body');
  var trEl = document.createElement('tr');
  tbEl.appendChild(trEl);
  var storeName = document.createElement('th');
  trEl.appendChild(storeName);
  storeName.textContent = this.name;
  var storeDailyTotals = 0
  for (var j = 0; j <= this.cookiesPerHour.length; j++) {
    var tdEl = document.createElement('td');
    trEl.appendChild(tdEl);
    tdEl.textContent = this.cookiesPerHour[j];
  }
  for (var t = 0; t < hoursOpen.length; t++) {
    storeDailyTotals += this.cookiesPerHour[t]
  }
  trEl.appendChild(tdEl);
  tdEl.textContent = storeDailyTotals;
};

// anchors and STARTS the TABLE
function createTable() {
  var mainEl = document.getElementById('main-content');
  var tblEl = document.createElement('table');
  var theadEl = document.createElement('thead');
  var tbodyEl = document.createElement('tbody');
  var tfootEl = document.createElement('tfoot');

  tblEl.id = 'cookies-table';
  theadEl.id = 'tbl-head';
  tbodyEl.id = 'tbl-body';
  tfootEl.id = 'tbl-foot';
  tblEl.className = 'tbl';
  
  mainEl.appendChild(tblEl);
  tblEl.appendChild(theadEl);
  tblEl.appendChild(tbodyEl);
  tblEl.appendChild(tfootEl);
  
};
createTable();

// creates the TABLE HEAD
function tableHead() {
  var thEl = document.getElementById('tbl-head');
  var trEl = document.createElement('tr');
  thEl.appendChild(trEl);
  var thEl = document.createElement('th');
  trEl.appendChild(thEl);
  for (var i = 0; i < hoursOpen.length; i++) {
    var thEl = document.createElement('th');
    trEl.appendChild(thEl);
    thEl.textContent = hoursOpen[i];
  }
  var dailyTotalsEl = document.createElement('th');
  trEl.appendChild(dailyTotalsEl);
  dailyTotalsEl.textContent = 'Daily Totals';
};
tableHead();
// creates the TABLE FOOTER
function tableFooter() {
  var tblEl =document.getElementById('cookies-table');
  var tfootEl = document.getElementById('tbl-foot');
  var trEl = document.createElement('tr');

  var emptyThEl = document.createElement('th');
  trEl.appendChild(emptyThEl);
  emptyThEl.textContent = 'Hourly Totals:'
  
  var grandTotal = 0;
  for(var i = 0; i < hoursOpen.length; i++) {
    var tdEl = document.createElement('td');
    var totals = 0;
    
    for(var j = 0; j < stores.length; j++) {
      totals += stores[j].cookiesPerHour[i];
      
    }
    tdEl.textContent = totals;
    trEl.appendChild(tdEl);
    
    grandTotal += totals;
  }
  var grandTotalEl = document.createElement('td');
  grandTotalEl.textContent = grandTotal;
  trEl.appendChild(grandTotalEl);
  
  tfootEl.appendChild(trEl);
  tblEl.appendChild(tfootEl);

}
//stores 
var fnP = new SalmonCookieStore('First and Pike', 23, 65, 6.3);
var seaTac = new SalmonCookieStore('SeaTac Airport', 3, 24, 1.2);
var capHill = new SalmonCookieStore('Capitol Hill', 20, 38, 2.3);
var sC = new SalmonCookieStore('Seattle Center', 11, 38, 3.7);
var alki = new SalmonCookieStore('Alki', 2, 16, 4.6);



tableFooter();