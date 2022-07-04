import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DeletedComponent } from './deleted.component';

describe('DeletedComponent', () => {
  let component: DeletedComponent;
  let fixture: ComponentFixture<DeletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletedComponent);
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
