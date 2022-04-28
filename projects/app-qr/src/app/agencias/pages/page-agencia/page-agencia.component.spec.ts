import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAgenciaComponent } from './page-agencia.component';

describe('PageAgenciaComponent', () => {
  let component: PageAgenciaComponent;
  let fixture: ComponentFixture<PageAgenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAgenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAgenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
