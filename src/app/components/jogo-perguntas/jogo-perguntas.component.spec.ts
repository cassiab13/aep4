import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JogoPerguntasComponent } from './jogo-perguntas.component';

describe('JogoPerguntasComponent', () => {
  let component: JogoPerguntasComponent;
  let fixture: ComponentFixture<JogoPerguntasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JogoPerguntasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JogoPerguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
