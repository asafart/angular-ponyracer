"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var RaceComponent = (function () {
    function RaceComponent() {
    }
    RaceComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input()
    ], RaceComponent.prototype, "raceModel");
    RaceComponent = __decorate([
        core_1.Component({
            selector: 'pr-race',
            templateUrl: './race.component.html',
            styleUrls: ['./race.component.css']
        })
    ], RaceComponent);
    return RaceComponent;
}());
exports.RaceComponent = RaceComponent;
//# sourceMappingURL=race.component.js.map