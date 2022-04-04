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
import {NavigationComponent} from './components/technical/navigation/navigation.component';
import {SideDrawerComponent} from "./components/technical/side-drawer/side-drawer.component";
import {BlockComponent} from './components/technical/block/block.component';
import {TabsComponent} from './components/technical/tabs/tabs.component';
import {TabComponent} from './components/technical/tab/tab.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {SessionComponent} from './components/technical/session/session.component';
import {ImpressumComponent} from './components/impressum/impressum.component';
import {NgxSpinnerModule} from "ngx-spinner";

@NgModule({
  declarations: [
    AppComponent,
    DayOneComponent,
    DayTwoComponent,
    DayThreeComponent,
    HomeComponent,
    NavigationComponent,
    SideDrawerComponent,
    BlockComponent,
    TabsComponent,
    TabComponent,
    SessionComponent,
    ImpressumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
