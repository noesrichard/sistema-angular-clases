import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCanalesComponent } from './page-canales.component';

describe('PageCanalesComponent', () => {
  let component: PageCanalesComponent;
  let fixture: ComponentFixture<PageCanalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCanalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCanalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
