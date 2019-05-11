import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { TeamComponent } from './team/team.component';
import { EventsComponent } from './events/events.component';
import { EventsdeatilsComponent } from './eventsdeatils/eventsdeatils.component';


/* Serivce */
import { AuthGuard } from '../common/services/authguard';
import { CommanService } from '../common/services/services';
const routes: Routes = [
  {path: '',component: HomeComponent, pathMatch: 'full'},
  {path: 'team',component: TeamComponent},
  {path: 'events',component: EventsComponent},
  { path: 'events/:eventsId', component: EventsdeatilsComponent },
  { path: "**",  redirectTo: "/", pathMatch: 'full'  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
