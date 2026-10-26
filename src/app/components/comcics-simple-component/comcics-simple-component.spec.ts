import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComcicsSimpleComponent } from './comcics-simple-component';

describe('ComcicsSimpleComponent', () => {
  let component: ComcicsSimpleComponent;
  let fixture: ComponentFixture<ComcicsSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComcicsSimpleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ComcicsSimpleComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
