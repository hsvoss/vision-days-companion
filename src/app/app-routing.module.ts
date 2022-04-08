import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DayOneComponent} from "./components/day-one/day-one.component";
import {LocationComponent} from "./components/location/location.component";
import {DayTwoComponent} from "./components/day-two/day-two.component";
import {DayThreeComponent} from "./components/day-three/day-three.component";
import {ImpressumComponent} from "./components/technical/impressum/impressum.component";
import {FaqComponent} from './components/faq/faq.component';

const routes: Routes = [
  {path: '', component: LocationComponent},
  {path: 'faq', component: FaqComponent},
  {path: 'day-one', component: DayOneComponent},
  {path: 'day-two', component: DayTwoComponent},
  {path: 'day-three', component: DayThreeComponent},
  {path: 'impressum', component: ImpressumComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
