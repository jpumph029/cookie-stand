
// var first_pike = {
//   name: 'First and Pike',
//   minCustPerHour: 23,
//   maxCustPerHour: 65,
//   avgCookiesPerCust: 6.3,
//   custPerHour: [],
//   cookiesPerHour: [],
//   hoursOpen: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
//   dailyTotal: 0,

//   getRandomCustPerHour: function (min, max) {
//     for (var i = 0; i < this.hoursOpen.length; i++) {
//       var randomCust = Math.floor(Math.random() * (max - min + 1) + min);
//       this.custPerHour.push(randomCust);
//     }
//   },
//   getHourlySales: function () {
//     // line below will populate custPerHour
//     this.getRandomCustPerHour(this.minCustPerHour, this.maxCustPerHour);

//     for (var i = 0; i < this.hoursOpen.length; i++) {
//       var perHour = Math.round(this.custPerHour[i] * this.avgCookiesPerCust);
//       this.cookiesPerHour.push(perHour);
//       this.dailyTotal += perHour;
//     }

//   },
//   render: function () {
//     // Line below will generate hourly sales, which also generates customers per hour
//     this.getHourlySales();
//     // this line anchors the render function to the document
//     var main = document.getElementById('main-content');
//     var container = document.createElement('section');

// var heading = document.createElement('h3');
//     heading.textContent = this.name;
//     container.appendChild(heading);

//     var ulEl = document.createElement('ul');

//     for (var i = 0; i < this.hoursOpen.length; i++) {
//       var li = document.createElement('li');
//       li.textContent = `${this.hoursOpen[i]}: ${this.cookiesPerHour[i]} cookies`;
//       ulEl.appendChild(li);
//     }; 

//     var total = document.createElement('li');
//     total.textContent = `Total: ${this.dailyTotal} cookies`;
//     ulEl.appendChild(total);

//     container.appendChild(ulEl);
//     main.appendChild(container);
//   },
// };
// first_pike.render();
// var seaTac = {
//   name: 'Sea Tac Airport',
//   minCustPerHour: 3,
//   maxCustPerHour: 24,
//   avgCookiesPerCust: 1.2,
//   custPerHour: [],
//   cookiesPerHour: [],
//   hoursOpen: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
//   dailyTotal: 0,

//   getRandomCustPerHour: function (min, max) {
//     for (var i = 0; i < this.hoursOpen.length; i++) {
//       var randomCust = Math.floor(Math.random() * (max - min + 1) + min);
//       this.custPerHour.push(randomCust);
//     }
//   },
//   getHourlySales: function () {
//     // line below will populate custPerHour
//     this.getRandomCustPerHour(this.minCustPerHour, this.maxCustPerHour);

//     for (var i = 0; i < this.hoursOpen.length; i++) {
//       var perHour = Math.round(this.custPerHour[i] * this.avgCookiesPerCust);
//       this.cookiesPerHour.push(perHour);
//       this.dailyTotal += perHour;
//     }

//   },
//   render: function () {
//     // Line below will generate hourly sales, which also generates customers per hour
//     this.getHourlySales();
//     // this line anchors the render function to the document
//     var main = document.getElementById('main-content');
//     var container = document.createElement('section');

// var heading = document.createElement('h3');
//     heading.textContent = this.name;
//     container.appendChild(heading);

//     var ulEl = document.createElement('ul');

//     for (var i = 0; i < this.hoursOpen.length; i++) {
//       var li = document.createElement('li');
//       li.textContent = `${this.hoursOpen[i]}: ${this.cookiesPerHour[i]} cookies`;
//       ulEl.appendChild(li);
//     }; 

//     var total = document.createElement('li');
//     total.textContent = `Total: ${this.dailyTotal} cookies`;
//     ulEl.appendChild(total);

//     container.appendChild(ulEl);
//     main.appendChild(container);
//   },
// };
// seaTac.render();
// var seattleCenter = {
//   name: 'Seattle Center',
//   minCustPerHour: 11,
//   maxCustPerHour: 38,
//   avgCookiesPerCust: 3.7,
//   custPerHour: [],
//   cookiesPerHour: [],
//   hoursOpen: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
//   dailyTotal: 0,

//   getRandomCustPerHour: function (min, max) {
//     for (var i = 0; i < this.hoursOpen.length; i++) {
//       var randomCust = Math.floor(Math.random() * (max - min + 1) + min);
//       this.custPerHour.push(randomCust);
//     }
//   },
//   getHourlySales: function () {
//     // line below will populate custPerHour
//     this.getRandomCustPerHour(this.minCustPerHour, this.maxCustPerHour);

//     for (var i = 0; i < this.hoursOpen.length; i++) {
//       var perHour = Math.round(this.custPerHour[i] * this.avgCookiesPerCust);
//       this.cookiesPerHour.push(perHour);
//       this.dailyTotal += perHour;
//     }

//   },
//   render: function () {
//     // Line below will generate hourly sales, which also generates customers per hour
//     this.getHourlySales();
//     // this line anchors the render function to the document
//     var main = document.getElementById('main-content');
//     var container = document.createElement('section');

// var heading = document.createElement('h3');
//     heading.textContent = this.name;
//     container.appendChild(heading);

//     var ulEl = document.createElement('ul');

//     for (var i = 0; i < this.hoursOpen.length; i++) {
//       var li = document.createElement('li');
//       li.textContent = `${this.hoursOpen[i]}: ${this.cookiesPerHour[i]} cookies`;
//       ulEl.appendChild(li);
//     }; 

//     var total = document.createElement('li');
//     total.textContent = `Total: ${this.dailyTotal} cookies`;
//     ulEl.appendChild(total);

//     container.appendChild(ulEl);
//     main.appendChild(container);
//   },
// };
// seattleCenter.render();
// var capHill = {
//   name: 'Capitol Hill',
//   minCustPerHour: 20,
//   maxCustPerHour: 38,
//   avgCookiesPerCust: 2.3,
//   custPerHour: [],
//   cookiesPerHour: [],
//   hoursOpen: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
//   dailyTotal: 0,

//   getRandomCustPerHour: function (min, max) {
//     for (var i = 0; i < this.hoursOpen.length; i++) {
//       var randomCust = Math.floor(Math.random() * (max - min + 1) + min);
//       this.custPerHour.push(randomCust);
//     }
//   },
//   getHourlySales: function () {
//     // line below will populate custPerHour
//     this.getRandomCustPerHour(this.minCustPerHour, this.maxCustPerHour);

//     for (var i = 0; i < this.hoursOpen.length; i++) {
//       var perHour = Math.round(this.custPerHour[i] * this.avgCookiesPerCust);
//       this.cookiesPerHour.push(perHour);
//       this.dailyTotal += perHour;
//     }

//   },
//   render: function () {
//     // Line below will generate hourly sales, which also generates customers per hour
//     this.getHourlySales();
//     // this line anchors the render function to the document
//     var main = document.getElementById('main-content');
//     var container = document.createElement('section');

// var heading = document.createElement('h3');
//     heading.textContent = this.name;
//     container.appendChild(heading);

//     var ulEl = document.createElement('ul');

//     for (var i = 0; i < this.hoursOpen.length; i++) {
//       var li = document.createElement('li');
//       li.textContent = `${this.hoursOpen[i]}: ${this.cookiesPerHour[i]} cookies`;
//       ulEl.appendChild(li);
//     }; 

//     var total = document.createElement('li');
//     total.textContent = `Total: ${this.dailyTotal} cookies`;
//     ulEl.appendChild(total);

//     container.appendChild(ulEl);
//     main.appendChild(container);
//   },
// };
// capHill.render();
// var alki= {
//   name: 'Alki',
//   minCustPerHour: 2,
//   maxCustPerHour: 16,
//   avgCookiesPerCust: 4.6,
//   custPerHour: [],
//   cookiesPerHour: [],
//   hoursOpen: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
//   dailyTotal: 0,

//   getRandomCustPerHour: function (min, max) {
//     for (var i = 0; i < this.hoursOpen.length; i++) {
//       var randomCust = Math.floor(Math.random() * (max - min + 1) + min);
//       this.custPerHour.push(randomCust);
//     }
//   },
//   getHourlySales: function () {
//     // line below will populate custPerHour
//     this.getRandomCustPerHour(this.minCustPerHour, this.maxCustPerHour);

//     for (var i = 0; i < this.hoursOpen.length; i++) {
//       var perHour = Math.round(this.custPerHour[i] * this.avgCookiesPerCust);
//       this.cookiesPerHour.push(perHour);
//       this.dailyTotal += perHour;
//     }

//   },
//   render: function () {
//     // Line below will generate hourly sales, which also generates customers per hour
//     this.getHourlySales();
//     // this line anchors the render function to the document
//     var main = document.getElementById('main-content');
//     var container = document.createElement('section');

// var heading = document.createElement('h3');
//     heading.textContent = this.name;
//     container.appendChild(heading);

//     var ulEl = document.createElement('ul');

//     for (var i = 0; i < this.hoursOpen.length; i++) {
//       var li = document.createElement('li');
//       li.textContent = `${this.hoursOpen[i]}: ${this.cookiesPerHour[i]} cookies`;
//       ulEl.appendChild(li);
//     }; 

//     var total = document.createElement('li');
//     total.textContent = `Total: ${this.dailyTotal} cookies`;
//     ulEl.appendChild(total);

//     container.appendChild(ulEl);
//     main.appendChild(container);
//   },
// };
// alki.render();
var stores = [];
function SalmonCookieStore(name, minCustPerHour, maxCustPerHour, avgCookiesPerCust) {
  this.name = name;
  this.minCustPerHour = minCustPerHour
  this.maxCustPerHour = maxCustPerHour
  this.avgCookiesPerCust = avgCookiesPerCust
  custPerHour = [];
  cookiesPerHour = [];
  hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
  dailyTotal = 0;
  stores.push(this);
 
}
SalmonCookieStore.prototype.getRandomCustPerHour = function (min, max) {
    for (var i = 0; i < this.hoursOpen.length; i++) {
      var randomCust = Math.floor(Math.random() * (max - min + 1) + min);
      this.custPerHour.push(randomCust);
    }
  },

  SalmonCookieStore.prototype.getHourlySales = function () {
      // line below will populate custPerHour
      this.getRandomCustPerHour(this.minCustPerHour, this.maxCustPerHour);

      for (var i = 0; i < this.hoursOpen.length; i++) {
        var perHour = Math.round(this.custPerHour[i] * this.avgCookiesPerCust);
        this.cookiesPerHour.push(perHour);
        this.dailyTotal += perHour;
      }

    },

    SalmonCookieStore.prototype.render = function () {
      // Line below will generate hourly sales, which also generates customers per hour
      this.getHourlySales();
      // this line anchors the render function to the document
      var main = document.getElementById('main-content');
      var container = document.createElement('section');

      var heading = document.createElement('h3');
      heading.textContent = this.name;
      container.appendChild(heading);

      var ulEl = document.createElement('ul');

      for (var i = 0; i < this.hoursOpen.length; i++) {
        var li = document.createElement('li');
        li.textContent = `${this.hoursOpen[i]}: ${this.cookiesPerHour[i]} cookies`;
        ulEl.appendChild(li);
      };

      var total = document.createElement('li');
      total.textContent = `Total: ${this.dailyTotal} cookies`;
      ulEl.appendChild(total);

      container.appendChild(ulEl);
      main.appendChild(container);
    }

 new SalmonCookieStore('First and Pike', 23, 65, 6.3);

 function createTable() {
  // This function is used to establish ONE SINGLE table in the DOM for us to work with when we start rendering individual rows for each Turtle
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
 function fillTable() {
   for(var i = 0; i <= hoursOpen.length; i++) {
     var trEl = document.createElement('tr');
     this.tbodyEl.appendChild(trEl);
     trEl.textContent = hoursOpen[i];
   }
 }
 