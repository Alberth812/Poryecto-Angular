import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomToggle } from './bottom-toggle';

describe('BottomToggle', () => {
  let component: BottomToggle;
  let fixture: ComponentFixture<BottomToggle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BottomToggle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomToggle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
