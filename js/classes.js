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
    function Place(name, address, zipcode, city, teaserImg, divId, placeArry) {
        this.name = name;
        this.address = address;
        this.zipcode = zipcode;
        this.city = city;
        this.teaserImg = teaserImg;
        this.divId = divId;
    }
    Place.prototype.display = function (divId) {
        document.getElementById(divId).appendChild("\n      <div class=\"col-lg-5 media m-2 p-2\" id=\"" + name + "\">\n        <img src=\"" + teaserImg + "\" class=\"align-self-start\" alt=\"" + name + "\">\n        <div class=\"media-body\">\n          <h5 class=\"mt-0\">" + name + "</h5>\n          <p>" + address + "</p>\n          <p>" + zipcode + "&nbsp;" + city + "</p>\n        </div>\n      </div>\n      ");
    };
    return Place;
}());
var Restaurant = /** @class */ (function (_super) {
    __extends(Restaurant, _super);
    function Restaurant(telNo, type, webaddr) {
        var _this = this;
        _this.telNo = telNo;
        _this.type = type;
        _this.webaddr = webaddr;
        return _this;
    }
    Restaurant.prototype.display = function (divId) {
        document.getElementById(divId).appendChild("\n      <div class=\"col-lg-5 media m-2 p-2\" id=\"" + name + "\">\n        <img src=\"" + teaserImg + "\" class=\"align-self-start\" alt=\"" + name + "\">\n        <div class=\"media-body\">\n          <h5 class=\"mt-0\">" + name + "</h5>\n          <p>" + type + "</p>\n          <p>" + telNo + "</p>\n          <p>" + address + "</p>\n          <p>" + zipcode + "&nbsp;" + city + "</p>\n          <p>" + webaddr + "</p>\n        </div>\n      </div>\n      ");
    };
    return Restaurant;
}(Place));
var Event = /** @class */ (function (_super) {
    __extends(Event, _super);
    function Event(eventDate, eventTime, price) {
        var _this = this;
        _this.eventDate = eventDate;
        _this.eventTime = eventTime;
        _this.price = price;
        return _this;
    }
    Event.prototype.display = function (divId) {
        document.getElementById(divId).appendChild("\n      <div class=\"col-lg-5 media m-2 p-2\" id=\"" + name + "\">\n        <img src=\"" + teaserImg + "\" class=\"align-self-start\" alt=\"" + name + "\">\n        <div class=\"media-body\">\n          <h5 class=\"mt-0\">" + name + "</h5>\n          <p>Start: " + eventDate + "&nbsp;" + eventTime + "</p>\n          <p>" + address + "</p>\n          <p>" + zipcode + "&nbsp;" + city + "</p>\n          <p>" + price + "</p>\n        </div>\n      </div>\n      ");
    };
    return Event;
}(Place));
