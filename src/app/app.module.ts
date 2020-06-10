import { FormsModule } from '@angular/forms';
import { BackOfficeModule } from './back-office/back-office/back-office.module';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from './site/components/components.module';
import { SiteModule } from './site/site/site.module';
import { SiteComponent } from './site/site/site.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLayoutsComponent } from './back-office/layouts/admin-layouts/admin-layouts.component';
import { BackOfficeComponent } from './back-office/back-office/back-office.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { AnimatedComponent } from './animated/animated.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';







@NgModule({
  declarations: [
    AppComponent,
    SiteComponent,
    AdminLayoutsComponent,
    BackOfficeComponent,
    AnimatedComponent,
  
 
 

 
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    FormsModule,
    // ComponentsModule,
      SiteModule,
      BackOfficeModule,
       // ngx-translate and the loader module
       HttpClientModule,
       TranslateModule.forRoot({
           loader: {
               provide: TranslateLoader,
               useFactory: HttpLoaderFactory,
               deps: [HttpClient]
           }
       })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
  // required for AOT compilation
  export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
  }
