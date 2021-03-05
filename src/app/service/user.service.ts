import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../model/user';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8080/user/add';

  constructor(private httpClient: HttpClient) {
  }

  // tslint:disable-next-line:ban-types
  createUser(user: User): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}`, user);
  }
}
