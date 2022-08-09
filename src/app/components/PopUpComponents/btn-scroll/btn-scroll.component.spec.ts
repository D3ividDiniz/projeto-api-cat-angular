import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnScrollComponent } from './btn-scroll.component';

describe('BtnScrollComponent', () => {
  let component: BtnScrollComponent;
  let fixture: ComponentFixture<BtnScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnScrollComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
