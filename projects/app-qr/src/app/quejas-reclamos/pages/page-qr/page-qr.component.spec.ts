import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageQrComponent } from './page-qr.component';

describe('PageQrComponent', () => {
  let component: PageQrComponent;
  let fixture: ComponentFixture<PageQrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageQrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageQrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
