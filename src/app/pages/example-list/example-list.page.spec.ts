import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleListPage } from './example-list.page';

describe('ExampleListPage', () => {
  let component: ExampleListPage;
  let fixture: ComponentFixture<ExampleListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
