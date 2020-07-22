import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteComponentAComponent } from './route-component-a.component';

describe('RouteComponentAComponent', () => {
  let component: RouteComponentAComponent;
  let fixture: ComponentFixture<RouteComponentAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteComponentAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteComponentAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
