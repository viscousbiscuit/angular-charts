import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxExamplesComponent } from './ngx-examples.component';

describe('NgxExamplesComponent', () => {
  let component: NgxExamplesComponent;
  let fixture: ComponentFixture<NgxExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxExamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
