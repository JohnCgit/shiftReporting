import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataEntryComponent } from './data-entry.component';
import { GridModule } from '../grid';
import { UsedMaterialModule } from '../used-material/used-material.module';
import { DataEntryLogComponent } from './components/data-entry-log/data-entry-log.component';
import { MobileEntryFormComponent } from './components/mobile-entry-form/mobile-entry-form.component';
import { DynamicControlsModule } from '../dynamic-controls/dynamic-controls.module';
import { DataEntryCardComponent } from './data-entry-card/data-entry-card.component';



@NgModule({
  declarations: [DataEntryComponent, DataEntryLogComponent, MobileEntryFormComponent, DataEntryCardComponent],
  imports: [
    CommonModule,
    GridModule,
    UsedMaterialModule,
    DynamicControlsModule
  ],
  exports:[DataEntryCardComponent]
})
export class DataEntryModule { }
