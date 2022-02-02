import { Component, OnInit } from '@angular/core';
// import { ConfigPlantsComponent } from './components/config-plants/config-plants.component';
import { ConfigDepartmentsComponent } from './components/config-departments/config-departments.component';
import { ConfigTemplateComponent } from './components/config-template/config-template.component';
// import { UsersConfigComponent } from '../users/components/users-config/users-config.component';
import { ConfigPlantsComponent } from '../plants/components/config-plants/config-plants.component';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent {
  isSmall = false;
  // isShow: string = null;
  config = [
    { key: 'plants', component: ConfigPlantsComponent, title: 'Plants', isShow: false, icon: 'factory' },
    { key: 'departments', component: ConfigDepartmentsComponent, title: 'Departments', isShow: false, icon: 'graph-outline' },
    { key: 'templates', component: ConfigTemplateComponent, title: 'Template', isShow: false, icon: 'alpha-t-box-outline' },
    { key: 'users', title: 'Users', icon: 'account-group' },
  ];

  logout() {

  }

  // showItemPanel(key) {
  //   this.isShow = this.isShow === key ? null : key;
  // }

}

