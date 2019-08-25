import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TapnavComponent } from './tapnav.component';

describe('TapnavComponent', () => {
  let component: TapnavComponent;
  let fixture: ComponentFixture<TapnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TapnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TapnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
