"use strict";
var testing_1 = require('@angular/core/testing');
var platform_browser_1 = require('@angular/platform-browser');
var app_module_1 = require('../app.module');
var race_component_1 = require('./race.component');
var pony_component_1 = require('../pony/pony.component');
describe('Component: Race', function () {
    beforeEach(function () { return testing_1.TestBed.configureTestingModule({
        imports: [app_module_1.AppModule]
    }); });
    it('should display a race name and its ponies', function () {
        var fixture = testing_1.TestBed.createComponent(race_component_1.RaceComponent);
        // given a race in Paris with 5 ponies
        var raceComponent = fixture.componentInstance;
        raceComponent.raceModel = {
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
        };
        // when triggering the change detection
        fixture.detectChanges();
        // then we should have the name and ponies displayed in the template
        var element = fixture.nativeElement;
        var raceName = element.querySelector('h2');
        expect(raceName).not.toBeNull('You need an h2 element for the race name');
        expect(raceName.textContent).toContain('Paris', 'The h2 element should contain the race name');
        var directives = fixture.debugElement.queryAll(platform_browser_1.By.directive(pony_component_1.PonyComponent));
        expect(directives).not.toBeNull('You should use the PonyComponent in your template to display the ponies');
        expect(directives.length).toBe(5, 'You should have five pony components in your template');
    });
});
//# sourceMappingURL=race.component.spec.js.map