import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

export interface Ride {
  nameLine: string;
  direction: string;
  arrival: Date;
  arrivalDelay: number;
  plannedArrival: Date;
  departure: Date;
  departureDelay: number;
  plannedDeparture: Date;
  destination: string;
  origin: string;
}


@Component({
  selector: 'app-busplan',
  templateUrl: './busplan.component.html',
  styleUrls: ['./busplan.component.scss']
})
export class BusplanComponent implements OnInit {

  rides: Ride[] = []

  constructor(private http: HttpClient) {
  }

  async ngOnInit(): Promise<void> {
    const responses = await Promise.all([this.line200First(), await this.line100First()]);

    this.rides = responses.flatMap(response => BusplanComponent.mapResponse(response));

    // @ts-ignore
    this.rides.sort((ride1: Ride, ride2: Ride) => ride1.plannedDeparture - ride2.plannedDeparture);
  }

  private async line100First(): Promise<any> {
    const response: any = await this.http.get('https://v5.vbb.transport.rest/journeys' +
      '?results=100' +
      '&from=900100515' + // Spandauer Str./Marienkirche
      '&to=900000004151' + // Nordische Botschaften/Adenauer-Stiftung
      '&stopovers=false' +
      '&transfers=0' +
      '&transferTime=0' +
      '&startWithWalking=false' +
      '&tickets=false' +
      '&polylines=false' +
      '&remarks=false' +
      '&scheduledDays=false' +
      '&language=en'
    ).toPromise();
    return response;
  }

  private async line200First(): Promise<any> {
    const response: any = await this.http.get('https://v5.vbb.transport.rest/journeys' +
      '?results=100' +
      '&from=900000100045' + // U Rotes Rathaus
      '&to=900000005102' + // Corneliusbrücke
      '&stopovers=false' +
      '&transfers=0' +
      '&transferTime=0' +
      '&startWithWalking=false' +
      '&tickets=false' +
      '&polylines=false' +
      '&remarks=false' +
      '&scheduledDays=false' +
      '&language=en'
    ).toPromise();
    return response;
  }

  private static mapResponse(response: any): Ride[] {
    return response.journeys
      .filter((journey: { legs: any[]; }) => (journey.legs).length === 1)
      .map((journey: { legs: any[]; }) => journey.legs[0])
      .map((leg: any) => ({
        nameLine: leg.line.name,
        direction: leg.direction,
        arrival: new Date(leg.arrival),
        arrivalDelay: leg.arrivalDelay,
        plannedArrival: new Date(leg.plannedArrival),
        departure: new Date(leg.departure),
        departureDelay: leg.departureDelay,
        plannedDeparture: new Date(leg.plannedDeparture),
        destination: leg.destination.name.replace('/', ' / '),
        origin: leg.origin.name.replace('/', ' / '),
      }));
  }


  dateToClock(date: Date): string {
    return ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2)
  }

  delayToString(departureDelay: number): string {
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
}
