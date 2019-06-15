import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotoristaMenuPage } from './motorista-menu.page';

describe('MotoristaMenuPage', () => {
  let component: MotoristaMenuPage;
  let fixture: ComponentFixture<MotoristaMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotoristaMenuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotoristaMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
