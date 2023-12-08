import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersettingComponent } from './usersetting.component';

describe('UsersettingComponent', () => {
  let component: UsersettingComponent;
  let fixture: ComponentFixture<UsersettingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersettingComponent]
    });
    fixture = TestBed.createComponent(UsersettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
