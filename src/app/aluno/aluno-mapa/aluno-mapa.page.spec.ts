import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoMapaPage } from './aluno-mapa.page';

describe('AlunoMapaPage', () => {
  let component: AlunoMapaPage;
  let fixture: ComponentFixture<AlunoMapaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlunoMapaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunoMapaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
