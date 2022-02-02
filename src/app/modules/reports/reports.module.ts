import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatesComponent } from '../templates/templates.component';
import { TemplateCardComponent } from '../templates/components/template-card/template-card.component';
import { RouterModule } from '@angular/router';
import { UsedMaterialModule } from '../used-material/used-material.module';
import { DepartmentsModule } from '../departments/departments.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { TemplateCopyComponent } from '../templates/components/template-copy/template-copy.component';
import { ReportsComponent } from './reports.component';
import { TemplateModule } from '../template/template.module';
import { TemplatesModule } from '../templates/templates.module';
import { DatePipe } from '@angular/common';
import { DataEntryModule } from '../data-entry/data-entry.module';
import { SearchPipePipe } from '../templates/pipes/search-pipe.pipe';
import { SearchPipeDataEntries } from '../data-entry/pipes/search-pipe-dataentries';


@NgModule({
  declarations: [ReportsComponent, SearchPipeDataEntries],
  imports: [
    TemplateModule,
    CommonModule,
    RouterModule,
    UsedMaterialModule,
    DepartmentsModule,
    ReactiveFormsModule,
    FormsModule,
    TemplatesModule,
    DataEntryModule,
  ],
  providers: [DatePipe]
})
export class ReportsModule { }
