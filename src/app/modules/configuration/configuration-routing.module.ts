import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigurationComponent } from './configuration.component';
import { ConfigDepartmentsComponent } from './components/config-departments/config-departments.component';
import { ConfigTemplateComponent } from './components/config-template/config-template.component';
import { ConfigPlantsComponent } from '../plants/components/config-plants/config-plants.component';
import { UsersConfigComponent } from '../users/components/users-config/users-config.component';
import { AuthGuard } from '../authorization/guards/auth.guard';

const routes: Routes = [

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigurationRoutingModule { }
