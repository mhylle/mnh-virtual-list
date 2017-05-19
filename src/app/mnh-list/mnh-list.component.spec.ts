import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MnhListComponent } from './mnh-list.component';

describe('VirtualListComponent', () => {
  let component: MnhListComponent;
  let fixture: ComponentFixture<MnhListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MnhListComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MnhListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
