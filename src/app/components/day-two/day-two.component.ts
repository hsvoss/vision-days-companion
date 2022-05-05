import { Component } from '@angular/core';

@Component({
  selector: 'app-day-two',
  templateUrl: './day-two.component.html',
  styleUrls: ['./day-two.component.scss']
})
export class DayTwoComponent {


  constructor() {
  }

  calcPlaceholder(): 'Placeholder' | 'TimeIsUp' {
    // if (new Date() > new Date(2022, 4, 19, 13, 45)) {
    if (new Date() > new Date(2022, 4, 5, 19, 15)) {
      return 'TimeIsUp'
    } else {
      return 'Placeholder'
    }
  }

}
