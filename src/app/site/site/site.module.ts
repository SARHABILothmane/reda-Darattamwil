import { SurveyComponent } from './../pages/survey/survey.component';
import { DossierAfournirComponent } from './../pages/dossier-afournir/dossier-afournir.component';
import { ChatModule } from './../chat/chat.module';
import { EntrepriseComponent } from './../pages/entreprise/entreprise.component';
import { ParticulierComponent } from './../pages/particulier/particulier.component';
import { ProfessionnelsComponent } from './../pages/professionnels/professionnels.component';
import { NewsLetterComponent } from './../components/news-letter/news-letter.component';
import { SlidePartneraitComponent } from './../components/slide-partnerait/slide-partnerait.component';
import { AproposComponent } from './../pages/apropos/apropos.component';
import { EquipeComponent } from './../components/equipe/equipe.component';
import { TopRouteComponent } from './../components/top-route/top-route.component';
import { CounterComponent } from './../components/counter/counter.component';
import { TeamComponent } from './../components/team/team.component';
import { ContactComponent } from './../pages/contact/contact.component';
import { SeConnecterComponent } from './../pages/se-connecter/se-connecter.component';
import { InscrireComponent } from './../pages/inscrire/inscrire.component';
import { CarouselComponent } from './../components/carousel/carousel.component';
import { AboutHomeComponent } from './../components/about-home/about-home.component';
import { SimulationFormComponent } from './../components/simulation-form/simulation-form.component';
import { FooterComponent } from './../components/footer/footer.component';
import { AcceuilComponent } from './../pages/acceuil/acceuil.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SiteRoutingModule } from './site-routing.module';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { NavBarComponent } from '../components/nav-bar/nav-bar.component';
import { ActualiteComponent } from '../pages/actualite/actualite.component';
import { DetailsActualiteComponent } from '../pages/details-actualite/details-actualite.component';
import { ChatDialogComponent } from '../chat/chat-dialog/chat-dialog.component';



@NgModule({
  declarations: [
    AcceuilComponent,
    AproposComponent,
    NavBarComponent,
    FooterComponent,
    SimulationFormComponent,
    AboutHomeComponent,
    CarouselComponent,
    EquipeComponent,
    TeamComponent,
    CounterComponent,
    TopRouteComponent,
    InscrireComponent,
    SeConnecterComponent,
    ContactComponent,
    ActualiteComponent,
    DetailsActualiteComponent,
    SlidePartneraitComponent,
    NewsLetterComponent,
    ProfessionnelsComponent,
    ParticulierComponent,
    EntrepriseComponent,
    ChatDialogComponent,
    DossierAfournirComponent,
    SurveyComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
   ReactiveFormsModule,
    ChatModule,
    SiteRoutingModule,
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
    NavBarComponent,
    FooterComponent,
    ChatDialogComponent
  ]
})
export class SiteModule { }
  // required for AOT compilation
  export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
  }
