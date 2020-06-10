import { FooterComponent } from './footer/footer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { CarouselComponent } from './carousel/carousel.component';
import { TeamComponent } from './team/team.component';
import { CounterComponent } from './counter/counter.component';
import { TopRouteComponent } from './top-route/top-route.component';
import { EquipeComponent } from './equipe/equipe.component';
import { SlidePartneraitComponent } from './slide-partnerait/slide-partnerait.component';
import { NewsLetterComponent } from './news-letter/news-letter.component';



@NgModule({
  declarations: [NavBarComponent,FooterComponent, CarouselComponent, TeamComponent, CounterComponent, TopRouteComponent, EquipeComponent, SlidePartneraitComponent, NewsLetterComponent],
  imports: [
    CommonModule,
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
  exports: [
    FooterComponent,
    NavBarComponent,
 
  ]
})
export class ComponentsModule { }
  // required for AOT compilation
  export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
  }

