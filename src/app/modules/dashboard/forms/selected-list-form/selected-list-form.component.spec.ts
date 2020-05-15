import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedListFormComponent } from './selected-list-form.component';

describe('SelectedListFormComponent', () => {
  let component: SelectedListFormComponent;
  let fixture: ComponentFixture<SelectedListFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedListFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedListFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
