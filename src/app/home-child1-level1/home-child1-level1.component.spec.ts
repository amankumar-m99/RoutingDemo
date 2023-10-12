import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeChild1Level1Component } from './home-child1-level1.component';

describe('HomeChild1Level1Component', () => {
  let component: HomeChild1Level1Component;
  let fixture: ComponentFixture<HomeChild1Level1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeChild1Level1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeChild1Level1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
