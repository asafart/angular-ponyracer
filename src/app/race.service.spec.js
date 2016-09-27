"use strict";
var testing_1 = require('@angular/core/testing');
var http_1 = require('@angular/http');
var testing_2 = require('@angular/http/testing');
require('rxjs/add/observable/of');
var race_service_1 = require('./race.service');
describe('RaceService Service', function () {
    var raceService;
    var mockBackend;
    beforeEach(function () { return testing_1.TestBed.configureTestingModule({
        providers: [
            testing_2.MockBackend,
            http_1.BaseRequestOptions,
            {
                provide: http_1.Http,
                useFactory: function (backend, defaultOptions) { return new http_1.Http(backend, defaultOptions); },
                deps: [testing_2.MockBackend, http_1.BaseRequestOptions]
            },
            race_service_1.RaceService
        ]
    }); });
    beforeEach(testing_1.inject([race_service_1.RaceService, testing_2.MockBackend], function (service, mock) {
        raceService = service;
        mockBackend = mock;
    }));
    it('should return an Observable of 3 races', testing_1.async(function () {
        // fake response
        var hardcodedRaces = [{ name: 'Paris' }, { name: 'Tokyo' }, { name: 'Lyon' }];
        var response = new http_1.Response(new http_1.ResponseOptions({ body: hardcodedRaces }));
        // return the response if we have a connection to the MockBackend
        mockBackend.connections.subscribe(function (connection) {
            expect(connection.request.url)
                .toBe('http://ponyracer.ninja-squad.com/api/races?status=PENDING', 'The URL requested is not correct');
            expect(connection.request.method).toBe(http_1.RequestMethod.Get);
            connection.mockRespond(response);
        });
        raceService.list().subscribe(function (races) {
            expect(races.length).toBe(3, 'The `list` method should return an array of RaceModel wrapped in an Observable');
        });
    }));
});
//# sourceMappingURL=race.service.spec.js.map