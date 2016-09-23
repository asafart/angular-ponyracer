"use strict";
var testing_1 = require('@angular/core/testing');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/observable/of');
var app_module_1 = require('../app.module');
var races_component_1 = require('./races.component');
var race_service_1 = require('../race.service');
describe('Component: Races', function () {
    var service = jasmine.createSpyObj('RaceService', ['list']);
    beforeEach(function () { return testing_1.TestBed.configureTestingModule({
        imports: [app_module_1.AppModule],
        providers: [{ provide: race_service_1.RaceService, useValue: service }]
    }); });
    it('should display every race name in a title', function () {
        service.list.and.returnValue(Observable_1.Observable.of([
            { name: 'Lyon' },
            { name: 'Los Angeles' },
            { name: 'Sydney' },
            { name: 'Tokyo' },
            { name: 'Casablanca' }
        ]));
        var fixture = testing_1.TestBed.createComponent(races_component_1.RacesComponent);
        fixture.detectChanges();
        expect(service.list).toHaveBeenCalled();
        expect(fixture.componentInstance.races).not.toBeNull('You need to have a field `races` initialized with 5 races');
        expect(fixture.componentInstance.races.length).toBe(5, 'You need to have a field `races` initialized with 5 races');
        expect(fixture.componentInstance.races[0].name).toBe('Lyon');
        expect(fixture.componentInstance.races[1].name).toBe('Los Angeles');
        expect(fixture.componentInstance.races[2].name).toBe('Sydney');
        expect(fixture.componentInstance.races[3].name).toBe('Tokyo');
        expect(fixture.componentInstance.races[4].name).toBe('Casablanca');
        var element = fixture.nativeElement;
        var raceNames = element.querySelectorAll('h2');
        expect(raceNames.length).toBe(4, 'You should have four `h2` elements, use the `slice` pipe');
        expect(raceNames[0].textContent).toContain('Lyon');
        expect(raceNames[1].textContent).toContain('Los Angeles');
        expect(raceNames[2].textContent).toContain('Sydney');
        expect(raceNames[3].textContent).toContain('Tokyo');
    });
});
//# sourceMappingURL=races.component.spec.js.map