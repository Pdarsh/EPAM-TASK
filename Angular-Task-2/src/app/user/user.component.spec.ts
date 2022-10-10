import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { UserComponent } from './user.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ UserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('button should show activate when type is true', () => {
    component.type = true;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.btn').innerText).toEqual('Activate');
  });

  it('button should show deactivate when type is false', () => {
    component.type = false;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.btn').innerText).toEqual('Deactivate');
  });

  it('button should show details when type is non-boolean', () => {
    component.type = "default"
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.btn').innerText).toEqual('Details');
  });




});
