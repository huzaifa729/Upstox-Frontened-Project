import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalGoldComponent } from './digital-gold.component';

describe('DigitalGoldComponent', () => {
  let component: DigitalGoldComponent;
  let fixture: ComponentFixture<DigitalGoldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalGoldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalGoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
