import { Component, OnInit } from '@angular/core';
import { Schedule, State } from '@models/*';
import { ScheduleActions, TemplateActions } from '@actions/*';
import { Store, select } from '@ngrx/store';
import { allSchedules } from 'src/app/app-store';
import { DateService } from 'src/app/services/date.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  schedules: Schedule[];
  date: Date;
  week: number;
  year: number;
  departmentId = null;
  weekYear: { year: number, week: number };

  constructor(
    private store: Store<State>,
    private dateService: DateService
  ) { }

  ngOnInit(): void {
    this.date = new Date();
    this.weekYear = this.dateService.getWeek(this.date);
    this.week = this.weekYear.week;
    this.year = this.weekYear.year;
    this.getSchedules();
  }

  getSchedules() {
    this.store.pipe(
      select(allSchedules)
    ).subscribe(schedules => this.schedules = schedules)
  }
  setWeek(e) {
    this.week = e.week;
    this.year = e.year;
  }
  changeDepartment(e) {
    this.store.dispatch(ScheduleActions.getSchedules({ departmentId: e.departmentId }))
    this.store.dispatch(TemplateActions.getTemplates({ departmentId: e.departmentId }))
  }

}
