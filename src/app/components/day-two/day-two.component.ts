import {Component} from '@angular/core';

@Component({
  selector: 'app-day-two',
  templateUrl: './day-two.component.html',
  styleUrls: ['./day-two.component.scss']
})
export class DayTwoComponent {


  constructor() {
  }


  calcPlaceholder(): 'Placeholder' | 'TimeIsUp' {
    if (new Date() > new Date('2022-05-19T12:45:00.000Z')) {
      return 'TimeIsUp'
    } else {
      return 'Placeholder'
    }
  }

}
