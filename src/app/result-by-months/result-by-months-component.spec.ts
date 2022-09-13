import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultByMonthsComponent } from './result-by-months.component';

describe('ResultByMonthsComponentComponent', () => {
  let component: ResultByMonthsComponent;
  let fixture: ComponentFixture<ResultByMonthsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultByMonthsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultByMonthsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
