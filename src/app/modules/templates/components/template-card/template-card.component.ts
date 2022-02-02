import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataEntry, State, Template } from '@models/*';
import { Store } from '@ngrx/store';
import { isSmallScreen } from 'src/app/app-store';
import { MessageService } from 'src/app/modules/message/sevices/message.service';

@Component({
  selector: 'app-template-card',
  templateUrl: './template-card.component.html',
  styleUrls: ['./template-card.component.scss']
})
export class TemplateCardComponent implements OnInit {
  @Input() template: Template;
  @Output() clickDelete = new EventEmitter<number>();
  @Output() clickEdit = new EventEmitter<number>();
  @Output() clickDataEntry = new EventEmitter<number>();
  @Output() clickCopy = new EventEmitter<number>();
  @Input() isTemplateReport: boolean //False:Template || True:Report
  isSmallScreen: boolean;
  
  constructor(
    private store: Store<State>,
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
    this.store.select(isSmallScreen)
      .subscribe(small => this.isSmallScreen = small);
  }
  get lastUpdated(){
    return new Date(this.template.lastUpdated).toLocaleString()
  }
  delete() {
    this.clickDelete.emit(this.template.templateId);
  }
  edit() {
    if (!this.isSmallScreen)
      this.clickEdit.emit(this.template.templateId);
    else
      this.messageService.alertMessage("Template editing is unavailable on mobile");
  }

  copy(){
    this.clickCopy.emit(this.template.templateId);
  }

  report() {
    // console.log("report");
    this.clickDataEntry.emit(this.template.templateId);
  }

}
