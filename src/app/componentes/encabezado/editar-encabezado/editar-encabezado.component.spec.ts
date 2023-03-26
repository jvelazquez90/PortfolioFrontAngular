import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarEncabezadoComponent } from './editar-encabezado.component';

describe('EditarEncabezadoComponent', () => {
  let component: EditarEncabezadoComponent;
  let fixture: ComponentFixture<EditarEncabezadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarEncabezadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarEncabezadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
