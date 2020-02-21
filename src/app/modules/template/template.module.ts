import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template.component';
import { GeneralConfigComponent } from './components/general-config/general-config.component';
import { FormModule } from '../form/form.module';
import { GridsterConfigComponent } from './components/gridster-config/gridster-config.component';
import { GridModule } from '../grid/grid.module';
import { GridComponent } from '../grid/grid.component';
import { InterfacesConfigComponent } from './components/interfaces-config/interfaces-config.component';
import { ControlsListComponent } from './components/controls-list/controls-list.component';



@NgModule({
  declarations: [TemplateComponent, GeneralConfigComponent, GridsterConfigComponent, InterfacesConfigComponent, ControlsListComponent],
  imports: [
    CommonModule,
    FormModule,
    GridModule
  ],
})
export class TemplateModule { }
