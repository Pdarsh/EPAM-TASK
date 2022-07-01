import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../User';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user: any;
  id:any;
  constructor( private route2 :ActivatedRoute,private _users:UsersService) { }

  ngOnInit(): void {
    this.route2.params.subscribe(params=>{
      this.id = params['id'];
      this.user=this._users.getuserbyid(this.id)
  })
  }
}
