import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendSvgComponent } from './trend-svg.component';

describe('TrendSvgComponent', () => {
  let component: TrendSvgComponent;
  let fixture: ComponentFixture<TrendSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendSvgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
