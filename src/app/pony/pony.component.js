"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var PonyComponent = (function () {
    function PonyComponent() {
        this.ponyClicked = new core_1.EventEmitter();
    }
    PonyComponent.prototype.ngOnInit = function () {
    };
    PonyComponent.prototype.getPonyImageUrl = function () {
        return "assets/images/pony-" + this.ponyModel.color.toLowerCase() + ".gif";
    };
    PonyComponent.prototype.clicked = function () {
        this.ponyClicked.emit(this.ponyModel);
    };
    __decorate([
        core_1.Input()
    ], PonyComponent.prototype, "ponyModel");
    __decorate([
        core_1.Output()
    ], PonyComponent.prototype, "ponyClicked");
    PonyComponent = __decorate([
        core_1.Component({
            selector: 'pr-pony',
            templateUrl: './pony.component.html',
            styleUrls: ['./pony.component.css']
        })
    ], PonyComponent);
    return PonyComponent;
}());
exports.PonyComponent = PonyComponent;
//# sourceMappingURL=pony.component.js.map