import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlienPage } from './alien.page';

describe('AlienPage', () => {
  let component: AlienPage;
  let fixture: ComponentFixture<AlienPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlienPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlienPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
