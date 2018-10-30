
var first_pike = {
  name: 'First and Pike',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesPerCust: 6.3,
  custPerHour: [],
  cookiesPerHour: [],
  hoursOpen: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  dailyTotal: 0,

  getRandomCustPerHour: function (min, max) {
    for (var i = 0; i < this.hoursOpen.length; i++) {
      var randomCust = Math.floor(Math.random() * (max - min + 1) + min);
      this.custPerHour.push(randomCust);
    }
  },
  getHourlySales: function () {
    // line below will populate custPerHour
    this.getRandomCustPerHour(this.minCustPerHour, this.maxCustPerHour);

    for (var i = 0; i < this.hoursOpen.length; i++) {
      var perHour = Math.round(this.custPerHour[i] * this.avgCookiesPerCust);
      this.cookiesPerHour.push(perHour);
      this.dailyTotal += perHour;
    }


  },
  render: function () {
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
  },
};
first_pike.render();
