import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import { User } from './models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
private serviceUrl = "https://jsonplaceholder.typicode.com/users";
  constructor(private http: HttpClient) { }
  getUser(): Observable<User[]> {
    return this.http.get<User[]>(this.serviceUrl);
  }
}
