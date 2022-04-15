import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Ride} from "../components/busplan/busplan.component";
import {BehaviorSubject, interval, Observable} from "rxjs";
import {defaultData} from "./bus-default";


@Injectable({
  providedIn: 'root'
})
export class BusApiService {


  rides: BehaviorSubject<Ride[]> = new BehaviorSubject<Ride[]>(defaultData);
  everyMinute$: Observable<number> = interval(60 * 1000);
  connection: 'initial' | 'online' | 'offline' = 'initial'


  constructor(private http: HttpClient) {
  }

  public startCallCyle() {
    this.connection = 'initial'
    this.doCall()
      .then(rides => {
        this.rides.next(rides);
        this.connection = 'online'
      })
      .catch(reason => {
        console.log(reason);
        this.connection = 'offline'
      })

    return this.everyMinute$.subscribe(() => {
      this.doCall()
        .then(rides => {
          this.rides.next(rides);
          this.connection = 'online'
        })
        .catch(reason => {
          console.log(reason);
          this.connection = 'offline'
        })
    });
  }


  private async doCall(): Promise<Ride[]> {
    const responses = await Promise.all([this.line200First(), await this.line100First()]);
    const rides: Ride[] = responses.flatMap(response => BusApiService.mapResponse(response));

    // @ts-ignore
    rides.sort((ride1: Ride, ride2: Ride) => ride1.plannedDeparture - ride2.plannedDeparture);
    return rides
  }

  private static sort(rides: Ride[]): Ride[] {
    // @ts-ignore
    return rides.sort((ride1: Ride, ride2: Ride) => ride1.plannedDeparture - ride2.plannedDeparture);

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


  private async line100First(): Promise<any> {
    return await this.http.get('https://v5.vbb.transport.rest/journeys' +
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
  }

  private async line200First(): Promise<any> {
    return await this.http.get('https://v5.vbb.transport.rest/journeys' +
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
  }


}
