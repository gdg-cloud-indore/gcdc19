import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

/* Serivce */
import { AuthGuard } from './common/services/authguard';
import { CommanService } from './common/services/services';
const routes: Routes = [
  /*{
  path: 'dashboard',
  canActivate: [AuthGuard],
  data: {title: 'Get Started'},
  children: [{ path: '',component: HomeComponent},]},*/
  {path: '',loadChildren: './home/home.module#HomeModule'},
  //{path: 'register',loadChildren: './register/register.module#RegisterModule',data: {customLayout: true} ,pathMatch: 'full'},
  { path: "**",  redirectTo: "/", pathMatch: 'full'  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
