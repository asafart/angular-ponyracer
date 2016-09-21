"use strict";
var testing_1 = require('@angular/core/testing');
var app_module_1 = require('../app.module');
var menu_component_1 = require('./menu.component');
describe('Component: Menu', function () {
    beforeEach(function () { return testing_1.TestBed.configureTestingModule({
        imports: [app_module_1.AppModule]
    }); });
    it('should have a `navbarCollapsed` field', function () {
        var menu = new menu_component_1.MenuComponent();
        menu.ngOnInit();
        expect(menu.navbarCollapsed)
            .toBe(true, 'Check that `navbarCollapsed` is initialized with `true`.' +
            'Maybe you forgot to declare `navbarCollapsed` in your component.');
    });
    it('should have a `toggleNavbar` method', function () {
        var menu = new menu_component_1.MenuComponent();
        expect(menu.toggleNavbar)
            .not.toBeNull('Maybe you forgot to declare a `toggleNavbar()` method');
        menu.toggleNavbar();
        expect(menu.navbarCollapsed)
            .toBe(false, '`toggleNavbar()` should change `navbarCollapsed` from true to false`');
        menu.toggleNavbar();
        expect(menu.navbarCollapsed)
            .toBe(true, '`toggleNavbar()` should change `navbarCollapsed` from false to true`');
    });
    it('should toggle the class on click', function () {
        var fixture = testing_1.TestBed.createComponent(menu_component_1.MenuComponent);
        var element = fixture.nativeElement;
        fixture.detectChanges();
        var navbarCollapsed = element.querySelector('#navbar');
        expect(navbarCollapsed).not.toBeNull('No element with the id `#navbar`');
        expect(navbarCollapsed.classList).toContain('collapse', 'The element with the id `#navbar` should have the class `collapse`');
        var button = element.querySelector('button');
        expect(button).not.toBeNull('No `button` element to collapse the menu');
        button.dispatchEvent(new Event('click'));
        fixture.detectChanges();
        var navbar = element.querySelector('#navbar');
        expect(navbar.classList).not
            .toContain('collapse', 'The element with the id `#navbar` should have not the class `collapse` after a click');
    });
});
//# sourceMappingURL=menu.component.spec.js.map