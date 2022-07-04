import { STRING_TYPE } from '@angular/compiler';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs/internal/observable/of';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return userslist', () => {
    let mockResponse = [
    { id:"0011","firstName":"Micky",lastName:"James",age: 39,"login": "mickyJ",password:"1234",isDeleted: true},
    { id:"0012","firstName":"Aj",lastName:"Lee",age: 32,"login": "ajL",password:"1234",isDeleted: true},
    ];
    let response;
    spyOn(service,'getallusers').and.returnValue(mockResponse)
    response = service.getallusers()
    expect(response).toEqual(mockResponse)
  })

  it('should return single user', () => {
    let mockResponse = { id:"0011","firstName":"Micky",lastName:"James",age: 39,"login": "mickyJ",password:"1234",isDeleted: true};
    spyOn(service,'getuserbyid').and.returnValue(mockResponse)
    let response = service.getuserbyid('0001')
    expect(response).toEqual(mockResponse)

  })

});


