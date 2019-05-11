import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as _ from 'underscore';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TeamComponent } from './team/team.component';
import { SlideshowModule } from 'ng-simple-slideshow';
import { EventsComponent } from './events/events.component';
import { EventsdeatilsComponent } from './eventsdeatils/eventsdeatils.component';

@NgModule({
  declarations: [HomeComponent,TeamComponent, EventsComponent, EventsdeatilsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SlideshowModule
  ]
})
export class HomeModule { }
