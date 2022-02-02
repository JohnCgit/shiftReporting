import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicControlsModule } from './modules/dynamic-controls/dynamic-controls.module';
import { ConfigurationModule } from './modules/configuration/configuration.module';
import { AppStoreModule } from './app-store/app-store.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageModule } from './modules/message/message.module';
import { GridModule } from './modules/grid/grid.module';
import { TemplateModule } from './modules/template/template.module';
import { DataEntryModule } from './modules/data-entry/data-entry.module';
import { DialogModule } from './modules/dialog/dialog.module';
import { AuthorizationModule } from './modules/authorization/authorization.module';
import { PlantsModule } from './modules/plants/plants.module';
import { UsersModule } from './modules/users/users.module';
import { DepartmentsModule } from './modules/departments/departments.module';
import { UsedMaterialModule } from './modules/used-material/used-material.module';
import { TemplatesModule } from './modules/templates/templates.module';
import { ReportsModule } from './modules/reports/reports.module';
import { PiafModule } from './modules/piaf/piaf.module';
import { ConfigModule } from './modules/config/config.module';
import { ApprovalsModule } from './modules/approvals/approvals.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ApprovalsModule,
    AppRoutingModule,
    DynamicControlsModule,
    FormsModule,
    ConfigurationModule,
    AppStoreModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MessageModule,
    GridModule,
    TemplateModule,
    
    DataEntryModule,
    DialogModule,
    AuthorizationModule,
    PlantsModule,
    UsersModule,
    DepartmentsModule,
    UsedMaterialModule,
    TemplatesModule,
    ReportsModule,
    PiafModule,
    
    ConfigModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
