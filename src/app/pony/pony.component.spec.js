"use strict";
var testing_1 = require('@angular/core/testing');
var app_module_1 = require('../app.module');
var pony_component_1 = require('./pony.component');
describe('Component: Pony', function () {
    beforeEach(function () { return testing_1.TestBed.configureTestingModule({
        imports: [app_module_1.AppModule]
    }); });
    it('should have method to get the image URL', function () {
        // given a pony component with a PURPLE pony
        var ponyComponent = new pony_component_1.PonyComponent();
        ponyComponent.ponyModel = { id: 1, name: 'Fast Rainbow', color: 'PURPLE' };
        // when we call the method for the URL
        var url = ponyComponent.getPonyImageUrl();
        // then we should have a nice URL
        expect(url).toBe('assets/images/pony-purple.gif', 'The URL built with `getPonyImageUrl` is not correct');
    });
    it('should display an image and a legend', function () {
        var fixture = testing_1.TestBed.createComponent(pony_component_1.PonyComponent);
        // given a pony component with a PURPLE pony
        var ponyComponent = fixture.componentInstance;
        ponyComponent.ponyModel = { id: 1, name: 'Fast Rainbow', color: 'PURPLE' };
        // when we trigger the change detection
        fixture.detectChanges();
        // then we should have an image and a legend
        var element = fixture.nativeElement;
        var image = element.querySelector('img');
        expect(image).not.toBeNull('You should have an image for the pony');
        expect(image.getAttribute('src')).toBe('assets/images/pony-purple.gif', 'The `src` attribute of the image is not correct');
        expect(image.getAttribute('alt')).toBe('Fast Rainbow', 'The `alt` attribute for the image is not correct');
        var legend = element.querySelector('figcaption');
        expect(legend).not.toBeNull('You should have a `figcaption` element for the pony');
        expect(legend.textContent).toContain('Fast Rainbow', 'The `figcaption` element should display the pony\'s name');
    });
    it('should emit an event on click', testing_1.async(function () {
        var fixture = testing_1.TestBed.createComponent(pony_component_1.PonyComponent);
        // given a pony component with a PURPLE pony
        var ponyComponent = fixture.componentInstance;
        ponyComponent.ponyModel = { id: 1, name: 'Fast Rainbow', color: 'PURPLE' };
        ponyComponent.ponyClicked.subscribe(function (pony) {
            expect(pony).toBe(ponyComponent.ponyModel, 'The output should emit the `ponyModel` on a click');
        });
        // when we click on the element
        fixture.detectChanges();
        var element = fixture.nativeElement;
        var figure = element.querySelector('figure');
        expect(figure).not.toBeNull('You should have a `figure` element for the pony');
        figure.dispatchEvent(new Event('click'));
    }));
});
//# sourceMappingURL=pony.component.spec.js.map