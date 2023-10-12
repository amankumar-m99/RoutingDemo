import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeChild2Level1Component } from './home-child2-level1.component';

describe('HomeChild2Level1Component', () => {
  let component: HomeChild2Level1Component;
  let fixture: ComponentFixture<HomeChild2Level1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeChild2Level1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeChild2Level1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
