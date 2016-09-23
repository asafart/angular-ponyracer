"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/observable/of');
var RaceService = (function () {
    function RaceService() {
    }
    RaceService.prototype.list = function () {
        return Observable_1.Observable.of([
            {
                id: 12,
                name: 'Paris',
                ponies: [
                    { id: 1, name: 'Gentle Pie', color: 'YELLOW' },
                    { id: 2, name: 'Big Soda', color: 'ORANGE' },
                    { id: 3, name: 'Gentle Bottle', color: 'PURPLE' },
                    { id: 4, name: 'Superb Whiskey', color: 'GREEN' },
                    { id: 5, name: 'Fast Rainbow', color: 'BLUE' }
                ],
                startInstant: '2016-02-18T08:02:00Z'
            }, {
                id: 13,
                name: 'Tokyo',
                ponies: [
                    { id: 6, name: 'Fast Rainbow', color: 'BLUE' },
                    { id: 7, name: 'Gentle Castle', color: 'GREEN' },
                    { id: 8, name: 'Awesome Rock', color: 'PURPLE' },
                    { id: 9, name: 'Little Rainbow', color: 'YELLOW' },
                    { id: 10, name: 'Great Soda', color: 'ORANGE' }
                ],
                startInstant: '2016-02-18T08:03:00Z'
            }
        ]);
    };
    RaceService = __decorate([
        core_1.Injectable()
    ], RaceService);
    return RaceService;
}());
exports.RaceService = RaceService;
//# sourceMappingURL=race.service.js.map