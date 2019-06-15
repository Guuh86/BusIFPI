import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoMenuPage } from './aluno-menu.page';

describe('AlunoMenuPage', () => {
  let component: AlunoMenuPage;
  let fixture: ComponentFixture<AlunoMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlunoMenuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunoMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
