import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidChildComponent } from './invalid-child.component';

describe('InvalidChildComponent', () => {
  let component: InvalidChildComponent;
  let fixture: ComponentFixture<InvalidChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvalidChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvalidChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
