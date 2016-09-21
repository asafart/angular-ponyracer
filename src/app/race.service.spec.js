"use strict";
var testing_1 = require('@angular/core/testing');
var race_service_1 = require('./race.service');
describe('RaceService Service', function () {
    var service;
    beforeEach(function () { return testing_1.TestBed.configureTestingModule({
        providers: [race_service_1.RaceService]
    }); });
    beforeEach(testing_1.inject([race_service_1.RaceService], function (s) { return service = s; }));
    it('should list races', function () {
        var races = service.list();
        expect(races.length).toBe(2, 'The service should return two races for the `list()` method');
    });
});
//# sourceMappingURL=race.service.spec.js.map