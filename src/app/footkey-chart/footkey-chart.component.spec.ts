import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootkeyChartComponent } from './footkey-chart.component';

describe('FootkeyChartComponent', () => {
  let component: FootkeyChartComponent;
  let fixture: ComponentFixture<FootkeyChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootkeyChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FootkeyChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
