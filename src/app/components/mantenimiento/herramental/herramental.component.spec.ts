import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HerramentalComponent } from './herramental.component';

describe('HerramentalComponent', () => {
  let component: HerramentalComponent;
  let fixture: ComponentFixture<HerramentalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerramentalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerramentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
