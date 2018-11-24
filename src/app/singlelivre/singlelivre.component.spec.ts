import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglelivreComponent } from './singlelivre.component';

describe('SinglelivreComponent', () => {
  let component: SinglelivreComponent;
  let fixture: ComponentFixture<SinglelivreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglelivreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglelivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
