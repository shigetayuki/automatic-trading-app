import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultBySystemsComponent } from './result-by-systems.component';

describe('ResultBySystemsComponent', () => {
  let component: ResultBySystemsComponent;
  let fixture: ComponentFixture<ResultBySystemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultBySystemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultBySystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
