import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaJavaComponent } from './materia-java.component';

describe('MateriaJavaComponent', () => {
  let component: MateriaJavaComponent;
  let fixture: ComponentFixture<MateriaJavaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MateriaJavaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MateriaJavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
