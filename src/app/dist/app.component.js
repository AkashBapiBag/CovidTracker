"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent(corona) {
        this.corona = corona;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.corona.getCountries().subscribe(function (data) {
            console.log(data);
            _this.countries = data;
        });
        // this.getWorld();
        this.corona.getTotal().subscribe(function (data) {
            console.log(data);
            _this.TotalConfirmed = data.TotalConfirmed;
            _this.TotalDeaths = data.TotalDeaths;
            _this.TotalRecovered = data.TotalRecovered;
        });
    };
    AppComponent.prototype.getData = function () {
        var _this = this;
        this.corona.getData(this.country).subscribe(function (data) {
            console.log(data);
            var index = data.length - 1;
            _this.Confirmed = data[index].Confirmed;
            _this.Recovered = data[index].Recovered;
            _this.Deaths = data[index].Deaths;
            _this.Date = data[index].Date;
            _this.Active = data[index].Active;
            _this.Country = data[index].Country;
        });
    };
    AppComponent.prototype.getCountry = function (country) {
        this.country = country;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
