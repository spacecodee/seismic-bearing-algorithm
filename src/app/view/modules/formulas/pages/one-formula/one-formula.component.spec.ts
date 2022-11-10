import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneFormulaComponent } from './one-formula.component';

describe('OneFormulaComponent', () => {
  let component: OneFormulaComponent;
  let fixture: ComponentFixture<OneFormulaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneFormulaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneFormulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
