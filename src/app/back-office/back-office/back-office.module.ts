import { ActualiteComponent } from './../pages/actualite/actualite.component';
import { RoleComponent } from './../pages/role/role.component';
import { FinancementComponent } from './../pages/financement/financement.component';
import { DetailsClientComponent } from './../pages/details-client/details-client.component';
import { BankComponent } from './../pages/bank/bank.component';
import { CategorieComponent } from './../pages/categorie/categorie.component';
import { AdminComponent } from './../pages/admin/admin.component';
import { ClientComponent } from './../pages/client/client.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackOfficeRoutingModule } from './back-office-routing.module';
import { DashboardComponent } from './../pages/dashboard/dashboard.component';
import { VilleComponent } from '../pages/ville/ville.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ClientComponent,
    AdminComponent,
    BankComponent,
    CategorieComponent,
    DetailsClientComponent,
    FinancementComponent,
    RoleComponent,
    VilleComponent,
    ActualiteComponent

  ],
  imports: [
    CommonModule,
    BackOfficeRoutingModule
  ]
})
export class BackOfficeModule { }
