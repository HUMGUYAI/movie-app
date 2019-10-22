import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkModePage } from './dark-mode.page';

describe('DarkModePage', () => {
  let component: DarkModePage;
  let fixture: ComponentFixture<DarkModePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DarkModePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DarkModePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
