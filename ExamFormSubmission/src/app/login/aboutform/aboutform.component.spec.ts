import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutformComponent } from './aboutform.component';

describe('AboutformComponent', () => {
  let component: AboutformComponent;
  let fixture: ComponentFixture<AboutformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutformComponent]
    });
    fixture = TestBed.createComponent(AboutformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
