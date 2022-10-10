import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ActiveComponent } from './active.component';

describe('ActiveComponent', () => {
  let component: ActiveComponent;
  let fixture: ComponentFixture<ActiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



  it('renders an independent user-list', () => {
    const { debugElement } = fixture;
    const userlist = debugElement.query(By.css('app-user-list'));
    expect(userlist).toBeTruthy();
  });

});
