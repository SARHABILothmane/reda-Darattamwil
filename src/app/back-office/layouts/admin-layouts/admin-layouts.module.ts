import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminLayoutsRoutingModule } from './admin-layouts-routing.module';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    AdminLayoutsRoutingModule
  ]
})
export class AdminLayoutsModule { }
