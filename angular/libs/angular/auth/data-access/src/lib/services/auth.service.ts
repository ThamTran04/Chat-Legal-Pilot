import { BASE_API_URL } from './../../../../../shared/data-access/api-config';
import { User } from './../../../../../shared/data-access/models/user';
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _httpClient: HttpClient) {}

  login(user: User): Observable<string> {
    const endpoint = `${BASE_API_URL}/login`;
    return this._httpClient.post(endpoint, user, {
      responseType: 'text',
    });
  }
}
