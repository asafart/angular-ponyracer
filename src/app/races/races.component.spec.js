"use strict";
var testing_1 = require('@angular/core/testing');
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
        service.list.and.returnValue([{ name: 'Tokyo' }, { name: 'Paris' }]);
        var fixture = testing_1.TestBed.createComponent(races_component_1.RacesComponent);
        fixture.detectChanges();
        expect(service.list).toHaveBeenCalled();
        expect(fixture.componentInstance.races).not.toBeNull('You need to have a field `races` initialized with 2 races');
        expect(fixture.componentInstance.races.length).toBe(2, 'You need to have a field `races` initialized with 2 races');
        expect(fixture.componentInstance.races[0].name).toBe('Tokyo');
        expect(fixture.componentInstance.races[1].name).toBe('Paris');
        var element = fixture.nativeElement;
        var raceNames = element.querySelectorAll('h2');
        expect(raceNames.length).toBe(2, 'You should have an `h2` element per race in your template');
        expect(raceNames[0].textContent).toContain('Tokyo');
        expect(raceNames[1].textContent).toContain('Paris');
    });
});
//# sourceMappingURL=races.component.spec.js.map