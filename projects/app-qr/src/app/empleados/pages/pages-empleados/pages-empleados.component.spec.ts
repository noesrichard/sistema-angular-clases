import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesEmpleadosComponent } from './pages-empleados.component';

describe('PagesEmpleadosComponent', () => {
  let component: PagesEmpleadosComponent;
  let fixture: ComponentFixture<PagesEmpleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesEmpleadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
