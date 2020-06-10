import { SiteComponent } from './site/site/site.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutsComponent } from './back-office/layouts/admin-layouts/admin-layouts.component';
import { BackOfficeComponent } from './back-office/back-office/back-office.component';



const routes: Routes = [
  // { path: 'dashboard', component: DashboardComponent },
  { path: '',redirectTo: 'dashboard',pathMatch: 'full'}, 
 // { path: 'backOffice', loadChildren: () => import(`./back-office/back-office.module`).then(m => m.BackOfficeModule) },
  // { path: 'backOffice', loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule' }
   {
   path: '',
   component: AdminLayoutsComponent,
    children: [{
        path: 'admins', loadChildren: () => import(`./back-office/layouts/admin-layouts/admin-layouts.module`).then(m => m.AdminLayoutsModule) 
      // path: '',
      // canActivate:[AuthentificationGuard],
      //  loadChildren: './layouts/admin-layouts/admin-layouts.module#AdminLayoutsModule',
      // loadChildren: './back-office/back-office.module#BackOfficeModule',
    }]
  },
  {
    path: '',
    component: BackOfficeComponent,
     children: [{
         path: 'backOffice', loadChildren: () => import(`./back-office/back-office/back-office.module`).then(m => m.BackOfficeModule) 
     }]
   },
   //site
   {
    path: '',
    component: SiteComponent,
     children: [{
         path: 'darAttamwil', loadChildren: () => import(`./site/site/site.module`).then(m => m.SiteModule) 
     }]
   }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
