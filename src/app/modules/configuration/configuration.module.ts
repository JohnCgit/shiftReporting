import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigurationComponent } from './configuration.component';
import { FormModule } from '../form/form.module';
import { DynamicControlsModule } from '../dynamic-controls/dynamic-controls.module';
import { ListComponent } from './components/list/list.component';
import { ConfigPlantsComponent } from './components/config-plants/config-plants.component';
import { ConfigDepartmentsComponent } from './components/config-departments/config-departments.component';
import { EditingPanelComponent } from './components/editing-panel/editing-panel.component';
import { ConfigShiftComponent } from './components/config-shift/config-shift.component';
import { ConfigScheduleComponent } from './components/config-schedule/config-schedule.component';
import { ConfigTemplateComponent } from './components/config-template/config-template.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { TileComponent } from './components/tile/tile.component';
// import { MatCardModule } from '@angular/material/card';
// import {MatSelectModule} from '@angular/material/select';
// import {MatFormFieldModule} from '@angular/material/form-field';
// import {MatButtonModule} from '@angular/material/button';
// import {MatInputModule} from '@angular/material/input';


// const MaterialModules = [
//   MatCardModule,
//   MatSelectModule,
//   MatFormFieldModule,
//   MatButtonModule,
//   MatInputModule,
// ]

@NgModule({
  declarations: [ConfigurationComponent, ListComponent, ConfigPlantsComponent, ConfigDepartmentsComponent, EditingPanelComponent, ConfigShiftComponent, ConfigScheduleComponent, ConfigTemplateComponent, TileComponent],
  imports: [
    AppRoutingModule,
    CommonModule,
    FormModule,
    DynamicControlsModule,
    // MaterialModules
  ],
  exports: [ConfigurationComponent]
})
export class ConfigurationModule { }
