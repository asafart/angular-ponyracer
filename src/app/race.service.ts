import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { RaceModel } from './models/race.model';
import { HttpService } from './http.service';

@Injectable()
export class RaceService {

  constructor(private http: HttpService) { }

  list(): Observable<Array<RaceModel>> {
    return this.http.get('/api/races?status=PENDING');
  }

  bet(raceId, ponyId): Observable<RaceModel> {
    return this.http.post(`/api/races/${raceId}/bets`, {ponyId});
  }

  get(raceId): Observable<RaceModel> {
    return this.http.get(`/api/races/${raceId}`);
  }
}
