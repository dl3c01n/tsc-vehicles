"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(colour, brand, model, plate) {
        this.colour = colour;
        this.brand = brand;
        this.model = model;
        this.plate = plate;
    }
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(colour, brand, model, plate, carburant) {
        var _this = _super.call(this, colour, brand, model, plate) || this;
        _this.className = "Voiture";
        _this.spec = function () {
            console.log("La couleur est : " + _this.colour);
            console.log("La marque est : " + _this.brand);
            console.log("Le mod\u00E8le est : " + _this.model);
            console.log("La plaque est : " + _this.plate);
            console.log("Je suis une " + _this.className.toLowerCase() + " qui roule avec : " + _this.carburant);
        };
        _this.carburant = carburant;
        return _this;
    }
    return Car;
}(Vehicle));
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto(colour, brand, model, plate, cc) {
        var _this = _super.call(this, colour, brand, model, plate) || this;
        _this.className = "Moto";
        _this.spec = function () {
            console.log("La couleur est : " + _this.colour);
            console.log("La marque est : " + _this.brand);
            console.log("Le mod\u00E8le est : " + _this.model);
            console.log("La plaque est : " + _this.plate);
            console.log("Je suis une " + _this.className.toLowerCase() + " qui roule avec : " + _this.carburant);
        };
        _this.cc = cc;
        return _this;
    }
    return Moto;
}(Vehicle));
var Boat = /** @class */ (function (_super) {
    __extends(Boat, _super);
    function Boat(colour, brand, model, plate, type) {
        var _this = _super.call(this, colour, brand, model, plate) || this;
        _this.className = "Bateau";
        _this.spec = function () {
            console.log("La couleur est : " + _this.colour);
            console.log("La marque est : " + _this.brand);
            console.log("Le mod\u00E8le est : " + _this.model);
            console.log("La plaque est : " + _this.plate);
            console.log("Je suis une " + _this.className.toLowerCase() + " qui roule avec : " + _this.carburant);
        };
        _this.type = type;
        return _this;
    }
    return Boat;
}(Vehicle));
var boat = new Boat('rouge', "mercdes", "Brabus", "AA-000-AA", "Diesel");
boat.spec();
//# sourceMappingURL=test.js.map