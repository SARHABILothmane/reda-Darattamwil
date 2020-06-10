import { SurveyComponent } from './../pages/survey/survey.component';
import { DossierAfournirComponent } from './../pages/dossier-afournir/dossier-afournir.component';
import { EntrepriseComponent } from './../pages/entreprise/entreprise.component';
import { ParticulierComponent } from './../pages/particulier/particulier.component';
import { ProfessionnelsComponent } from './../pages/professionnels/professionnels.component';
import { AproposComponent } from './../pages/apropos/apropos.component';
import { ContactComponent } from './../pages/contact/contact.component';
import { SeConnecterComponent } from './../pages/se-connecter/se-connecter.component';
import { InscrireComponent } from './../pages/inscrire/inscrire.component';
import { AcceuilComponent } from './../pages/acceuil/acceuil.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActualiteComponent } from '../pages/actualite/actualite.component';
import { DetailsActualiteComponent } from '../pages/details-actualite/details-actualite.component';


const routes: Routes = [
  { path: 'acceuil', component: AcceuilComponent },
  { path: 'apropos', component: AproposComponent },
  { path: "S'inscrire", component: InscrireComponent},
  { path: 'Seconnecter', component: SeConnecterComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'actualite', component: ActualiteComponent },
  { path: 'Details-actualite', component: DetailsActualiteComponent },
  { path: 'professionels', component: ProfessionnelsComponent },
  { path: 'particuliers', component: ParticulierComponent},
  { path: 'entreprises', component: EntrepriseComponent},
  { path: 'dossier', component: DossierAfournirComponent},
  { path: 'cogito', component: SurveyComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteRoutingModule { }
