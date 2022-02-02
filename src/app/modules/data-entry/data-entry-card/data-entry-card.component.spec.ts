import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataEntryCardComponent } from './data-entry-card.component';

describe('DataEntryCardComponent', () => {
  let component: DataEntryCardComponent;
  let fixture: ComponentFixture<DataEntryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataEntryCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataEntryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
