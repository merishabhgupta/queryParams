import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteComponentBComponent } from './route-component-b.component';

describe('RouteComponentBComponent', () => {
  let component: RouteComponentBComponent;
  let fixture: ComponentFixture<RouteComponentBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteComponentBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteComponentBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
