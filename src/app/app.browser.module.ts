import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { LoadingPageModule, MaterialBarModule } from 'angular-loading-page';

import { AuthGuard } from './common/services/authguard';
import { CommanService } from './common/services/services';
import { Configuration } from './common/constants/constants';
import { AppModule } from './app.module';

@NgModule({
  imports: [
    
    AppRoutingModule,
    LoadingPageModule,
    MaterialBarModule,
    AppModule,
    BrowserTransferStateModule
  ],
  providers: [
    AuthGuard,
    CommanService,
    Configuration,
  ],
  bootstrap: [AppComponent]
})
export class AppBrowserModule {}
