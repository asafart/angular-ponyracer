import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { RaceService } from '../race.service';
import { PonyWithPositionModel } from '../models/pony.model';


@Component({
  selector: 'pr-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.css']
})
export class LiveComponent implements OnInit, OnDestroy {

  raceName: string;
  poniesWithPosition: Array<PonyWithPositionModel>;
  positionSubscription: Subscription;

  constructor(private raceService: RaceService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    const id = this.route.snapshot.params['raceId'];
    this.raceName = this.route.snapshot.params['raceName'];
    this.positionSubscription = this.raceService.live(id).subscribe(positions => this.poniesWithPosition = positions);
  }

  ngOnDestroy() {
    if (this.positionSubscription) {
      this.positionSubscription.unsubscribe();
    }
  }
}
