"use strict";
var testing_1 = require('@angular/core/testing');
var race_service_1 = require('./race.service');
describe('RaceService Service', function () {
    var service;
    beforeEach(function () { return testing_1.TestBed.configureTestingModule({
        providers: [race_service_1.RaceService]
    }); });
    beforeEach(testing_1.inject([race_service_1.RaceService], function (s) { return service = s; }));
    it('should list races', testing_1.async(function () {
        var observable = service.list();
        observable.subscribe(function (races) {
            expect(races.length).toBe(5, 'The service should return five races in an Observable for the `list()` method');
        });
    }));
});
//# sourceMappingURL=race.service.spec.js.map