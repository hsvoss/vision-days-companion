import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DayOneComponent} from "./components/day-one/day-one.component";
import {HomeComponent} from "./components/home/home.component";
import {DayTwoComponent} from "./components/day-two/day-two.component";
import {DayThreeComponent} from "./components/day-three/day-three.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'day-one', component: DayOneComponent},
  {path: 'day-two', component: DayTwoComponent},
  {path: 'day-three', component: DayThreeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
