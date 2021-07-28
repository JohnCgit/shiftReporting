import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SettingsDBComponent } from './settings-db.component';

describe('SettingsDBComponent', () => {
  let component: SettingsDBComponent;
  let fixture: ComponentFixture<SettingsDBComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsDBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsDBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
