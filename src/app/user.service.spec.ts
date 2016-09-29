import { async, inject, TestBed } from '@angular/core/testing';
import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { UserService } from './user.service';

describe('User Service', () => {

  let userService: UserService;
  let mockBackend: MockBackend;

  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      MockBackend,
      BaseRequestOptions,
      {
        provide: Http,
        useFactory: (backend, defaultOptions) => new Http(backend, defaultOptions),
        deps: [MockBackend, BaseRequestOptions]
      },
      UserService
    ]
  }));

  beforeEach(inject([UserService, MockBackend], (service, mock) => {
    userService = service;
    mockBackend = mock;
  }));

  it('should register a user', async(() => {
    // fake response
    const user = {
      id: 1,
      login: 'cexbrayat',
      money: 1000,
      registrationInstant: '2015-12-01T11:00:00Z',
      token: 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjF9.5cAW816GUAg3OWKWlsYyXI4w3fDrS5BpnmbyBjVM7lo'
    };
    const response = new Response(new ResponseOptions({ body: user }));
    // return the response if we have a connection to the MockBackend
    mockBackend.connections.subscribe((connection: MockConnection) => {
      expect(connection.request.url).toBe('http://ponyracer.ninja-squad.com/api/users');
      expect(connection.request.method).toBe(RequestMethod.Post);
      connection.mockRespond(response);
    });

    userService.register(user.login, 'password', 1986).subscribe(res => {
      expect(res.id).toBe(1);
    });
  }));
});