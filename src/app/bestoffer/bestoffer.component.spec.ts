import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestofferComponent } from './bestoffer.component';

describe('BestofferComponent', () => {
  let component: BestofferComponent;
  let fixture: ComponentFixture<BestofferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestofferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestofferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
