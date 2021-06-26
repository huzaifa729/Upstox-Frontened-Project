import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureOptionComponent } from './future-option.component';

describe('FutureOptionComponent', () => {
  let component: FutureOptionComponent;
  let fixture: ComponentFixture<FutureOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FutureOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FutureOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
