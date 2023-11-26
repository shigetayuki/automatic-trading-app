import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTradeComponent } from './manage-trade.component';

describe('ManageTradeComponent', () => {
  let component: ManageTradeComponent;
  let fixture: ComponentFixture<ManageTradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageTradeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageTradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
