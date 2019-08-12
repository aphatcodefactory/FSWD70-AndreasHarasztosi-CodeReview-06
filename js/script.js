var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Place = /** @class */ (function () {
    function Place(name, address, zipcode, city, teaserImg) {
        this.name = name;
        this.address = address;
        this.zipcode = zipcode;
        this.city = city;
        this.teaserImg = teaserImg;
    }
    Place.prototype.display = function () {
        return ("\n      <div class=\"col-lg-6 col-md-6\">\n        <p class=\"h2 text-danger\">Places</p>\n        <p class=\"h4 text-monospace\">" + this.name + "</p>\n        <ul>\n          <li class=\"h6 text-monospace\">" + this.address + ", " + this.zipcode + "</li>\n          <li class=\"no-list\"><img src=\"" + this.teaserImg + "\"></li>\n        <ul>\n      </div>\n      ");
    };
    return Place;
}());
var Restaurant = /** @class */ (function (_super) {
    __extends(Restaurant, _super);
    function Restaurant(name, address, zipcode, city, teaserImg, telNo, type, webaddr) {
        var _this = _super.call(this, name, address, zipcode, city, teaserImg) || this;
        _this.telNo = telNo;
        _this.type = type;
        _this.webaddr = webaddr;
        return _this;
    }
    Restaurant.prototype.display = function () {
        return ("\n        <div class=\"col-lg-6 col-md-6\">\n            <p class=\"h2 text-danger\">Restaurants</p>\n            <p class=\"h4 text-monospace\">" + this.name + "</p>\n            <ul>\n              <li class=\"h6 text-monospace\">" + this.address + ", " + this.zipcode + ", " + this.telNo + "</li>\n              <li class=\"h6 text-monospace\">" + this.webaddr + "</li>\n              <li class=\"no-list\"> <img src=\"" + this.teaserImg + "\"></li>\n            <ul>\n       </div>  \n  ");
    };
    return Restaurant;
}(Place));
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(name, address, zipcode, city, teaserImg, eventDate, eventTime, price) {
        var _this = _super.call(this, name, address, zipcode, city, teaserImg) || this;
        _this.eventDate = eventDate;
        _this.eventTime = eventTime;
        _this.price = price;
        return _this;
    }
    Events.prototype.display = function () {
        return ("\n      <div class=\"col-lg-6 col-md-6\">\n            <p class=\"h2 text-danger\">Events</p>\n            <p class=\"h4 text-monospace\">" + this.name + "</p>\n            <ul>\n              <li class=\"h6 text-monospace\">" + this.eventDate + ", " + this.eventTime + "</li>\n              <li class=\"h6 text-monospace\">" + this.address + ", " + this.zipcode + "</li>\n              <li class=\"h6 text-monospace\">" + this.price + "</li>\n              <li class=\"no-list\"><img src=\"" + this.teaserImg + "\"></li>\n            <ul>\n       </div>  \n  ");
    };
    return Events;
}(Place));
var charlesChurch = new Place('Karlskirche', 'Karlsplatz 1', 1010, 'Wien', 'img/karlskirche.jpg'), zoo = new Place('Wiener-Zoo', 'Maxingstraße 13b', 1030, 'Wien', 'img/zoo.jpg'), lemmonLeaf = new Restaurant('Lemon-Leaf', 'Kettenbrückengasse 19', 1050, 'Wien', 'img/lemmonleaf.png', '+43(1)5812308', 'Thai restaurant', 'www.lemonleaf.at'), sixta = new Restaurant('SIXTA', 'Schönbrunner Straße 21', 1050, 'Wien', 'img/sixta.png', '+43 1 58 528 56', 'Austrian food', 'http://www.sixta-restaurant.at/index.htm'), kristofferson = new Events('Kris-Kristofferson', 'Wiener Stadthalle, Halle F, Roland Rainer Platz 1', 1150, 'Wien', 'img/kristofferson.jpg', 'Fr., 15.11.2019', '20:00', '&euro;&nbsp;' + 58.5 + '0'), lennyKravitz = new Events('Lenny-Kravitz', 'Wiener Stadthalle, Halle D, Roland Rainer Platz 1', 1150, 'Wien', 'img/kravitz.jpg', 'Sat, 09.12.2019', '19:30', ' &euro;&nbsp;' + 47.8 + '0');
var data = document.getElementById('data');
var items = [charlesChurch, zoo, lemmonLeaf, sixta, kristofferson, lennyKravitz];
for (var i = 0; i < items.length; i++) {
    data.innerHTML += items[i].display();
}
//}); // end document-ready
