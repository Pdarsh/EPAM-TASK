import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '../shared/shared.module';

import { UserDetailsComponent } from './user-details.component';

describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ UserDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



  it('When user is active deleted should not be rendered and vice versa', (done) => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const active:HTMLParagraphElement = fixture.debugElement.nativeElement.querySelector('.Active')
      const deleted:HTMLParagraphElement = fixture.debugElement.nativeElement.querySelector('.Deleted')
      expect(deleted).toBeNull()
      expect(active).not.toBeNull()
      done();
    })


  });

});
