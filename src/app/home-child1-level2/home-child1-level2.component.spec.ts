import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeChild1Level2Component } from './home-child1-level2.component';

describe('HomeChild1Level2Component', () => {
  let component: HomeChild1Level2Component;
  let fixture: ComponentFixture<HomeChild1Level2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeChild1Level2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeChild1Level2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
