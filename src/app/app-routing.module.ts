import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './modules/authorization/guards/auth.guard';
import { ConfigPlantsComponent } from './modules/plants/components/config-plants/config-plants.component';
import { TemplateComponent } from './modules/template/template.component';
import { TemplatesComponent } from './modules/templates/templates.component';
import { DataEntryComponent } from './modules/data-entry/data-entry.component';
import { DepartmentsComponent } from './modules/departments/departments.component';
import { UsersComponent } from './modules/users/users.component';
import { LoginComponent } from './modules/authorization/components/login/login.component';
import { RoleGuard } from './modules/authorization/guards/role.guard';
import { ConfigComponent } from './modules/config/config.component';
import { environment } from 'src/environments/environment';
import { ApprovalsComponent } from './modules/approvals/approvals.component';
import { ApprovalProcessComponent } from './modules/approvals/components/approval-process/approval-process.component';
import { ReportsComponent } from './modules/reports/reports.component';

const routes: Routes = [
  {
    path: 'configuration',
    canActivate: [AuthGuard],
    children: [
      { path: 'plants', component: ConfigPlantsComponent, canActivate: [AuthGuard, RoleGuard] },
      { path: 'departments', component: DepartmentsComponent, canActivate: [AuthGuard, RoleGuard] },
      { path: 'templates/:id', component: TemplateComponent, canActivate: [AuthGuard] },
      { path: 'users', component: UsersComponent, canActivate: [AuthGuard, RoleGuard] },
      { path: 'config', component: ConfigComponent, canActivate: [AuthGuard, RoleGuard] },
      { path: 'approvals', component: ApprovalsComponent, canActivate: [AuthGuard, RoleGuard] },
      { path: 'approvals/dataentry', component: ApprovalProcessComponent, canActivate: [AuthGuard] },
      { path: 'templates', component: TemplatesComponent, canActivate: [AuthGuard] },
      
    ]
  },
  { path: 'reports', component: ReportsComponent, canActivate: [AuthGuard] },
  { path: 'dataentry', component: DataEntryComponent, canActivate: [AuthGuard] },
  { path: 'callback.html', component: LoginComponent },
  { path: '**', redirectTo: 'reports', pathMatch: 'full' },
  // { path: '', redirectTo: 'dataentry'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
