import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {DayOneComponent} from './components/day-one/day-one.component';
import {DayTwoComponent} from './components/day-two/day-two.component';
import {DayThreeComponent} from './components/day-three/day-three.component';
import {HomeComponent} from './components/home/home.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import {SideDrawerComponent} from "./components/side-nav/side-drawer.component";

@NgModule({
  declarations: [
    AppComponent,
    DayOneComponent,
    DayTwoComponent,
    DayThreeComponent,
    HomeComponent,
    NavigationComponent,
    SideDrawerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
