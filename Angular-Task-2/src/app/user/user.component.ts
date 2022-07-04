import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user: any = {};
  @Input() type: any = "";
  @Output() Activate = new EventEmitter();
  @Output() Deactivate = new EventEmitter();

  constructor(private router: Router, private _users: UsersService) { }

  ngOnInit(): void {
  }
  navigate(){
    this.router.navigate(["manage/"+this.user.id])
  }

  Activatefun() {
    this.Activate.emit();

  }
  Deactivatefun() {
    this.Deactivate.emit();
  }



}
