import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateComponent } from './modules/template/template.component';
import { ScheduleComponent } from './modules/schedule/schedule.component';
import { DataEntryComponent } from './modules/data-entry/data-entry.component';
import { AuthGuard } from './modules/authorization/guards/auth.guard';


const routes: Routes = [
  {
    path: 'configuration',
    loadChildren: () => import('./modules/configuration/configuration.module').then(m => m.ConfigurationModule),
    // canActivateChild: [AuthGuard],
    canActivate: [AuthGuard]
  },
  { path: 'template', component: TemplateComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'dataentry', component: DataEntryComponent },
  { path: '', redirectTo: 'configuration', pathMatch: 'full' },
  // { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
