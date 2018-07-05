import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolDashComponent } from './tool-dash.component';

describe('ToolDashComponent', () => {
  let component: ToolDashComponent;
  let fixture: ComponentFixture<ToolDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
