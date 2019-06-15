import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoSobrePage } from './aluno-sobre.page';

describe('AlunoSobrePage', () => {
  let component: AlunoSobrePage;
  let fixture: ComponentFixture<AlunoSobrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlunoSobrePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunoSobrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
