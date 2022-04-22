import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DayOneComponent} from "./components/day-one/day-one.component";
import {LocationComponent} from "./components/location/location.component";
import {DayTwoComponent} from "./components/day-two/day-two.component";
import {DayThreeComponent} from "./components/day-three/day-three.component";
import {ImpressumComponent} from "./components/technical/impressum/impressum.component";
import {FaqComponent} from './components/faq/faq.component';
import {BusplanComponent} from "./components/busplan/busplan.component";

const routes: Routes = [
  {path: '', component: LocationComponent},
  {path: 'faq', component: FaqComponent},
  {path: '18-mai', component: DayOneComponent},
  {path: '19-mai', component: DayTwoComponent},
  {path: '20-mai', component: DayThreeComponent},
  {path: 'impressum', component: ImpressumComponent},
  {path: 'bus', component: BusplanComponent},
  {path: 'day-one', redirectTo: '18-mai'},
  {path: 'day-two', redirectTo: '19-mai'},
  {path: 'day-three', redirectTo: '20-mai'},
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
