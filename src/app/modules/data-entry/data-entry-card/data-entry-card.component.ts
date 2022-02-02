import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Template, State, DataEntry, TemplateBody } from '@models/*';
import { Store } from '@ngrx/store';
import { isSmallScreen } from 'src/app/app-store';
import { MessageService } from '../../message/sevices/message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-entry-card',
  templateUrl: './data-entry-card.component.html',
  styleUrls: ['./data-entry-card.component.scss']
})
export class DataEntryCardComponent implements OnInit {

  @Input() dataEntry: DataEntry;
  @Output() clickOpen = new EventEmitter<DataEntry>();
  isSmallScreen: boolean;
  
  constructor(
    private store: Store<State>,
    private router: Router
  ) { }

  ngOnInit(): void {
    // console.log(this.dataEntry.template);
    this.store.select(isSmallScreen)
      .subscribe(small => this.isSmallScreen = small);
  }

  goBack(){
    this.router.navigate([""]);
  }

  open() {
    // console.log(this.dataEntry);
    let temp = new TemplateBody();
    let copy: DataEntry = JSON.parse(JSON.stringify(this.dataEntry));
    temp.DatabaseTable = this.dataEntry.template.body.DatabaseTable;
    temp.Datasource = this.dataEntry.template.body.Datasource;
    temp.Excel = this.dataEntry.template.body.Excel;
    temp.PIAFAttributes = this.dataEntry.template.body.PIAFAttributes;
    temp.PIAFTemplate = this.dataEntry.template.body.PIAFTemplate;
    temp.TemplateData = this.dataEntry.template.body.TemplateData;
    temp.XML = this.dataEntry.template.body.XML;
    temp.dashboard = this.dataEntry.template.body.dashboard;
    temp.gridsterOptions = this.dataEntry.template.body.gridsterOptions;
    temp.isEditable = false;
    temp.submissionApprovers = this.dataEntry.template.body.submissionApprovers;
    // temp.templateDataKV = this.dataEntry.template.body.templateDataKV ?? null ;
    temp.toNotifyUserIdList = this.dataEntry.template.body.toNotifyUserIdList;
    copy.template.body = temp;
    this.clickOpen.emit(copy);
  }

}
