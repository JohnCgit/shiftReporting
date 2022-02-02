import { TemplateActions, DataEntryActions } from '@actions/*';
import { Component, OnInit } from '@angular/core';
import { DataEntry, State, Template, TemplateBody, User } from '@models/*';
import { Router } from '@angular/router';
import { allTemplates, connectionStatus, currentDataEntry, dataEntries, date, isSmallScreen, templateTypes, userDepartments } from 'src/app/app-store';
import { select, Store } from '@ngrx/store';
import { FormControl } from '@angular/forms';
import { AuthorizationService } from '../authorization/authorization.service';
import { Subscription } from 'rxjs';
import { DataEntryHttpService } from 'src/app/app-store/data-entry/data-entry-http.service';
import { DatePipe } from '@angular/common';
import { SearchPipeDataEntries } from '../data-entry/pipes/search-pipe-dataentries';


@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  currentUser: User;
  departmentId: number;
  isConnected: boolean;
  isSmallScreen: boolean;
  search = new FormControl('');
  templates: Template[] = [];
  templates$: Subscription;
  dataentries$: Subscription;
  dataEntries: DataEntry[];
  startDate: string;
  endDate: string;
  dataEntryCol1: DataEntry[];
  dataEntryCol2: DataEntry[];

  showAll: boolean;

  constructor(
    private store: Store<State>,
    private router: Router,
    private authSevice: AuthorizationService,
    private httpService: DataEntryHttpService,
    private datePipe: DatePipe,
  ) { }

  ngOnInit(): void {
    this.showAll = false;
    this.store.select(date).subscribe(
      date=> {
        if(date.startDate != '') 
          this.startDate = date.startDate
        else
          this.startDate = this.getLastWeek();
        if(date.endDate != '') 
          this.endDate = date.endDate
        else
         this.endDate = this.getToday();
      }
    )
    
    this.store.select(isSmallScreen)
      .subscribe(small => this.isSmallScreen = small);
    this.store.select(connectionStatus)
      .subscribe(status => this.isConnected = status);

      this.authSevice.getCurrentUser()
      .subscribe(user => {
        if (!user) {
          this.currentUser = null;
          return;
        }
        this.currentUser = user;
        // this.selectDepartment({ value: user.departments[0].departmentId })
      });

      this.templates$ = this.store.pipe(
        select(allTemplates)
      ).subscribe(templates => {
        this.templates = templates;
      });
      
      this.dataentries$ = this.store.pipe(
        select(dataEntries)
      ).subscribe(d=>this.transformDE(d));
      }


  transformDE(d: DataEntry[]){
     this.dataEntries = d;

    //  let middle = Math.round(this.dataEntries.length/2);
    //  this.dataEntryCol1 = this.dataEntries.slice(0,middle);
    //  this.dataEntryCol2 = this.dataEntries.slice(middle);

    this.dataEntryCol1 = [];
    this.dataEntryCol2 = [];

    for (let i=0; i<this.dataEntries.length; i++) {
      if (i % 2 == 0) this.dataEntryCol1.push(this.dataEntries[i]);
      else this.dataEntryCol2.push(this.dataEntries[i]);
    }

    console.log("this.dataEntryCol1");
    console.log(this.dataEntryCol1);
    console.log("this.dataEntryCol2");
    console.log(this.dataEntryCol2);
  }

  selectDepartment({ departmentId }, isChangeDep:boolean) {
    // console.log(this.startDate);
    // console.log(this.endDate)
    // let temp = new Date(this.endDate);
    // temp.setTime(temp.getTime()+24*60*60*1000-1);
    //console.log(new Date(this.endDate).setTime(new Date(this.endDate).getTime()+24*60*60*1000-1).toString());
    if (isChangeDep) {
      this.departmentId = departmentId;
      this.store.dispatch(TemplateActions.getTemplates({ departmentId }));
    }
    if(this.endDate){
    this.store.dispatch(DataEntryActions.setDate({
      startDate: this.startDate,
      endDate:  this.endDate=!this.setEndDate()?this.setEndDate():this.endDate,
    }))
    this.store.dispatch(DataEntryActions.getDataEntries({
      departmentId: this.departmentId,
      fromDate: this.startDate,
      toDate:  this.setEndDate(),
      templateName: null,
      showAll: this.showAll
    }))}
  }

  test(){
    console.log(this.showAll)
  }

  // editTemplate(event) {
  //   const template = JSON.parse(JSON.stringify(this.templates.find(i => i.templateId === event)));
  //   this.store.dispatch(TemplateActions.setEditingTemplate({ template }));
  //   this.router.navigate(['configuration/templates/' + event])
  // }

  reportDataEntry(event, isEditable:boolean) {
    console.log(event);
    let templateId:number
    if (isEditable) {
    let template = JSON.parse(JSON.stringify(this.templates.find(i => i.templateId === event)));
    templateId = template.templateId
    let temp = new TemplateBody();
    temp.DatabaseTable = template.body.DatabaseTable;
    temp.Datasource = template.body.Datasource;
    temp.Excel = template.body.Excel;
    temp.PIAFAttributes = template.body.PIAFAttributes;
    temp.PIAFTemplate = template.body.PIAFTemplate;
    temp.TemplateData = template.body.TemplateData;
    temp.XML = template.body.XML;
    temp.dashboard = template.body.dashboard;
    temp.gridsterOptions = template.body.gridsterOptions;
    temp.isEditable = true;
    temp.submissionApprovers = template.body.submissionApprovers;
    // temp.templateDataKV = this.dataEntry.template.body.templateDataKV ?? null ;
    temp.toNotifyUserIdList = template.body.toNotifyUserIdList;
    template.body = temp;
    const newDataEntry: DataEntry = {
      createDate: new Date().toDateString(),
      isApproved: false,
      modifiedUserId: this.currentUser.userId,
      submitDate: null,
      submitUserId: null,
      template: template,
      templateId: template.templateId,
    }

    // console.log(template);
    // console.log(newDataEntry);
    this.store.dispatch(DataEntryActions.addDataEntry({dataEntry: newDataEntry}));
  }
  else {
    templateId = event.templateId;
    this.store.dispatch(DataEntryActions.setCurrentDataEntry({currentDataEntry: event}));
  }

    this.store.select(currentDataEntry).subscribe(
      
      c=>{
        console.log(c);
        if(c && c.dataEntry.templateId == templateId)
        this.router.navigate(['dataentry']);
      }

    )
      
  }

  getLastWeek() {
    let d = new Date();
    d.setDate(d.getDate() - 7);
    return this.datePipe.transform(d, 'yyyy-MM-dd');
  }

  setEndDate(){
    let d = new Date(this.endDate);
    d.setDate(d.getDate()+1);
    return this.datePipe.transform(d, 'yyyy-MM-dd');
  }

  getToday() {
    let d = new Date();
    d.setDate(d.getDate());
    return this.datePipe.transform(d, 'yyyy-MM-dd');
  }

  getCurrentDE(){
    this.store.select(currentDataEntry).subscribe(
      c=>console.log(c)
    )
    this.router.navigate(['dataentry']);
  }

  

}
