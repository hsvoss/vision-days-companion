import {Ride} from "../components/busplan/busplan.component";

function makeDateToDay(date: Date): Date {
  const today = new Date();
  date.setMonth(today.getMonth());

  if (date.getDate() === 19) {
    date.setDate(today.getDate());
  } else {
    date.setDate(today.getDate() + 1);

  }

  return date;

}

export const defaultData: Ride[] = [{
  "nameLine": "200",
  "direction": "S+U Zoologischer Garten",
  "arrival": makeDateToDay(new Date("2022-06-19T18:57:00.000Z")),
  "arrivalDelay": null,
  "plannedArrival": makeDateToDay(new Date("2022-06-19T18:57:00.000Z")),
  "departure": makeDateToDay(new Date("2022-06-19T18:36:00.000Z")),
  "departureDelay": null,
  "plannedDeparture": makeDateToDay(new Date("2022-06-19T18:36:00.000Z")),
  "destination": "Corneliusbrücke",
  "origin": "U Rotes Rathaus"
}, {
  "nameLine": "200",
  "direction": "S+U Zoologischer Garten",
  "arrival": makeDateToDay(new Date("2022-06-19T19:06:00.000Z")),
  "arrivalDelay": null,
  "plannedArrival": makeDateToDay(new Date("2022-06-19T19:06:00.000Z")),
  "departure": makeDateToDay(new Date("2022-06-19T18:46:00.000Z")),
  "departureDelay": null,
  "plannedDeparture": makeDateToDay(new Date("2022-06-19T18:46:00.000Z")),
  "destination": "Corneliusbrücke",
  "origin": "U Rotes Rathaus"
}, {
  "nameLine": "200",
  "direction": "S+U Zoologischer Garten",
  "arrival": makeDateToDay(new Date("2022-06-19T19:14:00.000Z")),
  "arrivalDelay": null,
  "plannedArrival": makeDateToDay(new Date("2022-06-19T19:14:00.000Z")),
  "departure": makeDateToDay(new Date("2022-06-19T18:56:00.000Z")),
  "departureDelay": null,
  "plannedDeparture": makeDateToDay(new Date("2022-06-19T18:56:00.000Z")),
  "destination": "Corneliusbrücke",
  "origin": "U Rotes Rathaus"
}, {
  "nameLine": "200",
  "direction": "S+U Zoologischer Garten",
  "arrival": makeDateToDay(new Date("2022-06-19T19:23:00.000Z")),
  "arrivalDelay": null,
  "plannedArrival": makeDateToDay(new Date("2022-06-19T19:23:00.000Z")),
  "departure": makeDateToDay(new Date("2022-06-19T19:06:00.000Z")),
  "departureDelay": null,
  "plannedDeparture": makeDateToDay(new Date("2022-06-19T19:06:00.000Z")),
  "destination": "Corneliusbrücke",
  "origin": "U Rotes Rathaus"
}, {
  "nameLine": "200",
  "direction": "S+U Zoologischer Garten",
  "arrival": makeDateToDay(new Date("2022-06-19T19:32:00.000Z")),
  "arrivalDelay": null,
  "plannedArrival": makeDateToDay(new Date("2022-06-19T19:32:00.000Z")),
  "departure": makeDateToDay(new Date("2022-06-19T19:15:00.000Z")),
  "departureDelay": null,
  "plannedDeparture": makeDateToDay(new Date("2022-06-19T19:15:00.000Z")),
  "destination": "Corneliusbrücke",
  "origin": "U Rotes Rathaus"
}, {
  "nameLine": "200",
  "direction": "S+U Zoologischer Garten",
  "arrival": makeDateToDay(new Date("2022-06-19T19:41:00.000Z")),
  "arrivalDelay": null,
  "plannedArrival": makeDateToDay(new Date("2022-06-19T19:41:00.000Z")),
  "departure": makeDateToDay(new Date("2022-06-19T19:24:00.000Z")),
  "departureDelay": null,
  "plannedDeparture": makeDateToDay(new Date("2022-06-19T19:24:00.000Z")),
  "destination": "Corneliusbrücke",
  "origin": "U Rotes Rathaus"
}, {
  "nameLine": "200",
  "direction": "S+U Zoologischer Garten",
  "arrival": makeDateToDay(new Date("2022-06-19T19:51:00.000Z")),
  "arrivalDelay": null,
  "plannedArrival": makeDateToDay(new Date("2022-06-19T19:51:00.000Z")),
  "departure": makeDateToDay(new Date("2022-06-19T19:34:00.000Z")),
  "departureDelay": null,
  "plannedDeparture": makeDateToDay(new Date("2022-06-19T19:34:00.000Z")),
  "destination": "Corneliusbrücke",
  "origin": "U Rotes Rathaus"
}, {
  "nameLine": "200",
  "direction": "S+U Zoologischer Garten",
  "arrival": makeDateToDay(new Date("2022-06-19T20:01:00.000Z")),
  "arrivalDelay": null,
  "plannedArrival": makeDateToDay(new Date("2022-06-19T20:01:00.000Z")),
  "departure": makeDateToDay(new Date("2022-06-19T19:44:00.000Z")),
  "departureDelay": null,
  "plannedDeparture": makeDateToDay(new Date("2022-06-19T19:44:00.000Z")),
  "destination": "Corneliusbrücke",
  "origin": "U Rotes Rathaus"
}, {
  "nameLine": "200",
  "direction": "S+U Zoologischer Garten",
  "arrival": makeDateToDay(new Date("2022-06-19T20:11:00.000Z")),
  "arrivalDelay": null,
  "plannedArrival": makeDateToDay(new Date("2022-06-19T20:11:00.000Z")),
  "departure": makeDateToDay(new Date("2022-06-19T19:54:00.000Z")),
  "departureDelay": null,
  "plannedDeparture": makeDateToDay(new Date("2022-06-19T19:54:00.000Z")),
  "destination": "Corneliusbrücke",
  "origin": "U Rotes Rathaus"
}, {
  "nameLine": "200",
  "direction": "S+U Zoologischer Garten",
  "arrival": makeDateToDay(new Date("2022-06-19T20:21:00.000Z")),
  "arrivalDelay": null,
  "plannedArrival": makeDateToDay(new Date("2022-06-19T20:21:00.000Z")),
  "departure": makeDateToDay(new Date("2022-06-19T20:04:00.000Z")),
  "departureDelay": null,
  "plannedDeparture": makeDateToDay(new Date("2022-06-19T20:04:00.000Z")),
  "destination": "Corneliusbrücke",
  "origin": "U Rotes Rathaus"
}, {
  "nameLine": "200",
  "direction": "S+U Zoologischer Garten",
  "arrival": makeDateToDay(new Date("2022-06-19T20:31:00.000Z")),
  "arrivalDelay": null,
  "plannedArrival": makeDateToDay(new Date("2022-06-19T20:31:00.000Z")),
  "departure": makeDateToDay(new Date("2022-06-19T20:14:00.000Z")),
  "departureDelay": null,
  "plannedDeparture": makeDateToDay(new Date("2022-06-19T20:14:00.000Z")),
  "destination": "Corneliusbrücke",
  "origin": "U Rotes Rathaus"
}, {
  "nameLine": "200",
  "direction": "S+U Zoologischer Garten",
  "arrival": makeDateToDay(new Date("2022-06-19T20:41:00.000Z")),
  "arrivalDelay": null,
  "plannedArrival": makeDateToDay(new Date("2022-06-19T20:41:00.000Z")),
  "departure": makeDateToDay(new Date("2022-06-19T20:24:00.000Z")),
  "departureDelay": null,
  "plannedDeparture": makeDateToDay(new Date("2022-06-19T20:24:00.000Z")),
  "destination": "Corneliusbrücke",
  "origin": "U Rotes Rathaus"
}, {
  "nameLine": "200",
  "direction": "S+U Zoologischer Garten",
  "arrival": makeDateToDay(new Date("2022-06-19T21:01:00.000Z")),
  "arrivalDelay": null,
  "plannedArrival": makeDateToDay(new Date("2022-06-19T21:01:00.000Z")),
  "departure": makeDateToDay(new Date("2022-06-19T20:44:00.000Z")),
  "departureDelay": null,
  "plannedDeparture": makeDateToDay(new Date("2022-06-19T20:44:00.000Z")),
  "destination": "Corneliusbrücke",
  "origin": "U Rotes Rathaus"
}, {
  "nameLine": "200",
  "direction": "S+U Zoologischer Garten",
  "arrival": makeDateToDay(new Date("2022-06-19T21:21:00.000Z")),
  "arrivalDelay": null,
  "plannedArrival": makeDateToDay(new Date("2022-06-19T21:21:00.000Z")),
  "departure": makeDateToDay(new Date("2022-06-19T21:04:00.000Z")),
  "departureDelay": null,
  "plannedDeparture": makeDateToDay(new Date("2022-06-19T21:04:00.000Z")),
  "destination": "Corneliusbrücke",
  "origin": "U Rotes Rathaus"
}, {
  "nameLine": "200",
  "direction": "S+U Zoologischer Garten",
  "arrival": makeDateToDay(new Date("2022-06-19T21:41:00.000Z")),
  "arrivalDelay": null,
  "plannedArrival": makeDateToDay(new Date("2022-06-19T21:41:00.000Z")),
  "departure": makeDateToDay(new Date("2022-06-19T21:24:00.000Z")),
  "departureDelay": null,
  "plannedDeparture": makeDateToDay(new Date("2022-06-19T21:24:00.000Z")),
  "destination": "Corneliusbrücke",
  "origin": "U Rotes Rathaus"
}, {
  "nameLine": "200",
  "direction": "S+U Zoologischer Garten",
  "arrival": makeDateToDay(new Date("2022-06-19T22:01:00.000Z")),
  "arrivalDelay": null,
  "plannedArrival": makeDateToDay(new Date("2022-06-19T22:01:00.000Z")),
  "departure": makeDateToDay(new Date("2022-06-19T21:44:00.000Z")),
  "departureDelay": null,
  "plannedDeparture": makeDateToDay(new Date("2022-06-19T21:44:00.000Z")),
  "destination": "Corneliusbrücke",
  "origin": "U Rotes Rathaus"
}, {
  "nameLine": "200",
  "direction": "S+U Zoologischer Garten",
  "arrival": makeDateToDay(new Date("2022-06-19T22:21:00.000Z")),
  "arrivalDelay": null,
  "plannedArrival": makeDateToDay(new Date("2022-06-19T22:21:00.000Z")),
  "departure": makeDateToDay(new Date("2022-06-19T22:04:00.000Z")),
  "departureDelay": null,
  "plannedDeparture": makeDateToDay(new Date("2022-06-19T22:04:00.000Z")),
  "destination": "Corneliusbrücke",
  "origin": "U Rotes Rathaus"
}, {
  "nameLine": "200",
  "direction": "S+U Zoologischer Garten",
  "arrival": makeDateToDay(new Date("2022-06-19T22:41:00.000Z")),
  "arrivalDelay": null,
  "plannedArrival": makeDateToDay(new Date("2022-06-19T22:41:00.000Z")),
  "departure": makeDateToDay(new Date("2022-06-19T22:24:00.000Z")),
  "departureDelay": null,
  "plannedDeparture": makeDateToDay(new Date("2022-06-19T22:24:00.000Z")),
  "destination": "Corneliusbrücke",
  "origin": "U Rotes Rathaus"
}];
