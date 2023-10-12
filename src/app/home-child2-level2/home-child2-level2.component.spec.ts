import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeChild2Level2Component } from './home-child2-level2.component';

describe('HomeChild2Level2Component', () => {
  let component: HomeChild2Level2Component;
  let fixture: ComponentFixture<HomeChild2Level2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeChild2Level2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeChild2Level2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
