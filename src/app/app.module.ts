import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { LoadingPageModule, MaterialBarModule } from 'angular-loading-page';

import { AuthGuard } from './common/services/authguard';
import { CommanService } from './common/services/services';
import { Configuration } from './common/constants/constants';
import { HeaderSectionComponent } from './header-section/header-section.component';
import { FooterSectionComponent } from './footer-section/footer-section.component';
import { CommonModule } from '@angular/common';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { HttpClientModule } from '@angular/common/http';
import { NgtUniversalModule } from '@ng-toolkit/universal';
// import { SlideshowModule } from 'ng-simple-slideshow';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'gdg' }),
    AppRoutingModule,
    LoadingPageModule,
    MaterialBarModule,
    CommonModule,
    TransferHttpCacheModule,
    HttpClientModule,
    NgtUniversalModule,
    // SlideshowModule
  ],
  declarations: [
    AppComponent,
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
