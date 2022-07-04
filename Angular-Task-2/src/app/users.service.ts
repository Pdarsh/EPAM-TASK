import { Injectable } from '@angular/core';
import { User } from './User'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users:User[] = [
    { id:"0001","firstName":"John",lastName:"Cena",age: 45,"login": "johnC",password:"1234",isDeleted: false},
    { id:"0002","firstName":"John",lastName:"Morrison",age: 43,"login": "johnM",password:"1234",isDeleted: true},
    { id:"0003","firstName":"Dave",lastName:"Batista",age: 46,"login": "daveB",password:"1234",isDeleted: true},
    { id:"0004","firstName":"Seth",lastName:"Rollins",age: 35,"login": "sethR",password:"1234",isDeleted: false},
    { id:"0005","firstName":"Vince",lastName:"McMahon",age: 67,"login": "vinceM",password:"1234",isDeleted: true},
    { id:"0006","firstName":"Shawn",lastName:"Michaels",age: 53,"login": "shawnM",password:"1234",isDeleted: false},
    { id:"0007","firstName":"Randy",lastName:"Ortan",age: 43,"login": "randyO",password:"1234",isDeleted: false},
    { id:"0008","firstName":"Cody",lastName:"Rhodes",age: 38,"login": "codyR",password:"1234",isDeleted: false},
    { id:"0009","firstName":"Miz",lastName:"Mizanin",age: 35,"login": "mizM",password:"1234",isDeleted: false},
    { id:"0010","firstName":"Becky",lastName:"Lynch",age: 33,"login": "beckyL",password:"1234",isDeleted: false},
    { id:"0011","firstName":"Micky",lastName:"James",age: 39,"login": "mickyJ",password:"1234",isDeleted: true},
    { id:"0012","firstName":"Aj",lastName:"Lee",age: 32,"login": "ajL",password:"1234",isDeleted: true},
    { id:"0013","firstName":"Finn",lastName:"Balor",age: 35,"login": "finnB",password:"1234",isDeleted: false},
    { id:"0014","firstName":"Sasha",lastName:"Banks",age: 30,"login": "sashaB",password:"1234",isDeleted: false}
  ]
  constructor() { }

  Activateuser(id:string){
    const index = this.users.findIndex((obj => obj.id == id));
    this.users[index].isDeleted = false;
}
  Deactivateuser(id:string){
    const index = this.users.findIndex((obj => obj.id == id));
    this.users[index].isDeleted = true;
  }
  getusers(state:boolean) {
    return this.users.filter((x:User)=>x.isDeleted===state)
  }
  getallusers(){
    return this.users
  }
  getuserbyid(id:string){
    return this.users.find((x:User)=>x.id===id)
  }
}
