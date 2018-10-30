
first_pike = {
    name: '1st and Pike',
    minCustomers: 23,
    maxCustomers: 65,
    averageCookiesBought: 6.3,
    hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],


    averageCustomersPerHour: function () {
        return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
    },
    totalCookies: function () {
        var sum = 0;
        for (var lochours = 0; lochours <= 14; lochours++) {
            var totalCookies = Math.floor(this.averageCookiesBought * this.averageCustomersPerHour());
            console.log("FUCKING COOKIES", totalCookies)
            sum = sum + totalCookies;
        };
        console.log("totalcookies", sum);
        console.log("average customers", this.averageCustomersPerHour());
    },
    render() {
        var container = document.createElement('section');
        var storeName = document.createElement('h3');
        var timeCookies = document.createElement('ul');
       

        storeName.textContent = this.name;
        var varKeeper = 0;
        for (i = 0; i < this.hours.length; i++) {
            var varRan = this.averageCustomersPerHour();
            varKeeper += varRan;
            var listHours = document.createElement('li')
            listHours.textContent = `${this.hours[i]}: ${varRan} Cookies`;
            timeCookies.appendChild(listHours);
        }
        var displayTotal = document.createElement('li');
        displayTotal.textContent = `Total: ${this.sum} cookies`;
        timeCookies.appendChild(displayTotal);

        container.appendChild(storeName);
        container.appendChild(timeCookies);

        var mainEl = document.getElementById('main-content');
        mainEl.appendChild(container);
    }
};
// first_pike.render();
