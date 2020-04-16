import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncrementalFormComponent } from './incremental-form.component';

describe('IncrementalFormComponent', () => {
  let component: IncrementalFormComponent;
  let fixture: ComponentFixture<IncrementalFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncrementalFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncrementalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
