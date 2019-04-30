import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { LoadingPageModule, MaterialBarModule } from 'angular-loading-page';

import { AuthGuard } from './common/services/authguard';
import { CommanService } from './common/services/services';
import { Configuration } from './common/constants/constants';
import { HeaderSectionComponent } from './header-section/header-section.component';
import { FooterSectionComponent } from './footer-section/footer-section.component';
import { SlideshowModule } from 'ng-simple-slideshow';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoadingPageModule,
    MaterialBarModule,
    SlideshowModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderSectionComponent,
    FooterSectionComponent
  ],
  providers: [
    AuthGuard,
    CommanService,
    Configuration,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
