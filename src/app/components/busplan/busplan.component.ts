import {Component, OnDestroy, OnInit} from '@angular/core';
import {BusApiService} from "../../services/bus-api.service";
import {Subscription} from "rxjs";

export interface Ride {
  nameLine: string;
  direction: string;
  arrival: Date;
  arrivalDelay: number | null;
  plannedArrival: Date;
  departure: Date;
  departureDelay: number | null;
  plannedDeparture: Date;
  destination: string;
  origin: string;
}


@Component({
  selector: 'app-busplan',
  templateUrl: './busplan.component.html',
  styleUrls: ['./busplan.component.scss']
})
export class BusplanComponent implements OnInit, OnDestroy {

  // rides: Ride[] = []
  private subscription?: Subscription;

  constructor(public busApiService: BusApiService) {
  }

  async ngOnInit(): Promise<void> {
    this.subscription = this.busApiService.startCallCyle();
  }


  dateToClock(date: Date): string {
    return ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2)
  }

  delayToString(departureDelay: number | null): string {
    if (!departureDelay || departureDelay === 0) {
      return ''
    } else if (departureDelay > 0) {
      return '+' + departureDelay / 60 + ' min'
    } else {
      return (departureDelay / 60).toString() + ' min'
    }
  }

  calcRideTime(ride: Ride): string {
    // @ts-ignore
    const diff = Math.abs(ride.departure - ride.arrival);
    const minutes = Math.floor((diff / 1000) / 60);
    return minutes.toString() + ' min'

  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
