import { Injectable }   from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { Observable }   from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private serviceUrl = "http://localhost:8080/api/employee/all?page=5&count=20";

  constructor(private httpClient: HttpClient) { }
  getEmployees(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.serviceUrl);
  }
}
