import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BattleshipPage } from './battleship.page';

describe('BattleshipPage', () => {
  let component: BattleshipPage;
  let fixture: ComponentFixture<BattleshipPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BattleshipPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BattleshipPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
