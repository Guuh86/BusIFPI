import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotoristaMapaPage } from './motorista-mapa.page';

describe('MotoristaMapaPage', () => {
  let component: MotoristaMapaPage;
  let fixture: ComponentFixture<MotoristaMapaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotoristaMapaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotoristaMapaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
