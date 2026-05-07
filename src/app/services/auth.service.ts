import { Injectable, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../types';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);
  private readonly API = 'http://localhost:3000/users';

  isLoggedIn = signal<boolean>(!!localStorage.getItem('user_email'));

  signup(user: User) {
    return this.http.post<User>(this.API, user);
  }

  login(email: string, password: string) {
    return this.http
      .get<User[]>(`${this.API}?email=${email}&password=${password}`)
      .pipe(
        map((users) => {
          if (users.length === 0) throw new Error('Invalid credentials');
          return users[0];
        })
      );
  }
}
