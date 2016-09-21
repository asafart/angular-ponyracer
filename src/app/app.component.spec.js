"use strict";
var testing_1 = require('@angular/core/testing');
var app_module_1 = require('./app.module');
var app_component_1 = require('./app.component');
describe('App: Ponyracer', function () {
    beforeEach(function () { return testing_1.TestBed.configureTestingModule({
        imports: [app_module_1.AppModule]
    }); });
    it('should have a title', function () {
        var fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        fixture.detectChanges();
        var element = fixture.nativeElement;
        expect(element.querySelector('h1').textContent).toContain('Ponyracer');
    });
});
//# sourceMappingURL=app.component.spec.js.map