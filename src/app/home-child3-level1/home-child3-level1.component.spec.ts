import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeChild3Level1Component } from './home-child3-level1.component';

describe('HomeChild3Level1Component', () => {
  let component: HomeChild3Level1Component;
  let fixture: ComponentFixture<HomeChild3Level1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeChild3Level1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeChild3Level1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
