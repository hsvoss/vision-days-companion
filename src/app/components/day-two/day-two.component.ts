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
    if (new Date() > new Date(2022, 4, 19, 13, 30)) {
      return 'TimeIsUp'
    } else {
      return 'Placeholder'
    }
  }

}
