import { ClientComponent } from './../pages/client/client.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { VilleComponent } from '../pages/ville/ville.component';
import { RoleComponent } from '../pages/role/role.component';
import { FinancementComponent } from '../pages/financement/financement.component';
import { CategorieComponent } from '../pages/categorie/categorie.component';
import { BankComponent } from '../pages/bank/bank.component';
import { DetailsClientComponent } from '../pages/details-client/details-client.component';
import { ActualiteComponent } from 'src/app/site/pages/actualite/actualite.component';


const routes: Routes = [
      { path: 'dashboard', component: DashboardComponent },
    // { path: '',redirectTo: 'dashboard',pathMatch: 'full'}, 
    // { path: 'user-profile', component: UserProfileComponent },
     { path: 'clients', component: ClientComponent },
    { path: 'villes',  component: VilleComponent },
    { path: 'roles',  component: RoleComponent },
    { path: 'financements',  component: FinancementComponent },
    { path: 'categories',  component: CategorieComponent },
    { path: 'banks', component: BankComponent },
    //{ path: 'statuts', component: StatutComponent },
    { path: 'details-client/:id', component: DetailsClientComponent },
    { path: 'backoffice/actualites', component: ActualiteComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackOfficeRoutingModule { }
