import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppSummaryComponent } from './app-summary/app-summary.component';
import { LoginComponent } from './login/login.component';
// ## HEMA
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ApplicationNewLayoutComponent } from './application-new/application-new-layout/application-new-layout.component';
import { AppointmentComponent } from './appointments/appointment.component';
// ## HEMA - search 
// import { TestPipeComponent } from './shared/test-pipe';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'application_new',
    loadChildren: './application-new/application-new.module#ApplicationNewModule'
  },
  {
    path: 'appointment',
    component: AppointmentComponent,
  },
  {
    path: 'customer-connect',
    loadChildren: './customer-connect/customer-connect.module#CustomerConnectModule'
  },
  {
    path: 'leads',
    loadChildren: './leads/leads.module#LeadsModule',
  },
  {
    path: 'application',
    loadChildren: './application/application.module#ApplicationModule'
  },
  {
    path: 'cust-detail',
    loadChildren: './cust-details/cust-details.module#CustDetailsModule'
  },
  {
    path: 'product',
    loadChildren: './product/product.module#ProductModule'
  },
  {
    path: 'setting',
    loadChildren: './setting/setting.module#SettingModule'
  },
  {
    path: 'app-summary/:prod_name/:customer_id',
    component: AppSummaryComponent
  },
  // ## HEMA
  {
    path: 'resetpassword',
    component: ResetPasswordComponent
  },
  {
    path: 'reportsjournal',
    loadChildren: './reports-journal/reports-journal.module#ReportsModule',
  },
  // ## HEMA - Test search 
  // {
  //   path: 'testpipe',
  //   component: TestPipeComponent
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
