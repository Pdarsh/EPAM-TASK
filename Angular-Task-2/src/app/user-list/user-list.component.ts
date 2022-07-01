import { Component, Input, OnInit } from '@angular/core';
import { User } from '../User';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users!: User[];
  @Input() item: any = null;

  constructor(private _users: UsersService) { }

  ngOnInit(): void {
    if (this.item === null) {
      this.users = this._users.getallusers()
    }
    else {
      this.users = this._users.getusers(this.item)
    }
  }


  Activate(id: string) {
    this._users.Activateuser(id)
    if (this.item === null) {
      this.users = this._users.getallusers()
    }
    else {
      this.users = this._users.getusers(this.item)
    }

  }
  Deactivate(id: string) {
    this._users.Deactivateuser(id)
    if (this.item === null) {
      this.users = this._users.getallusers()
    }
    else {
      this.users = this._users.getusers(this.item)
    }
  }
}
