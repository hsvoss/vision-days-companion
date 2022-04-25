import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-day-two',
  templateUrl: './day-two.component.html',
  styleUrls: ['./day-two.component.scss']
})
export class DayTwoComponent implements OnInit {

  drums: 'Placeholder' | 'TimeIsUp' = 'Placeholder'

  constructor() {
  }


  ngOnInit(): void {
    const timeIsUp = new Date() > new Date('2022-05-19T12:45:00.000Z');
    if (timeIsUp) {
      this.drums = "TimeIsUp"
    } else {
      this.drums = "Placeholder"
    }
  }

}
