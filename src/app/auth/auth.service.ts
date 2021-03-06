import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as AppReducer from '../_store/app.reducers';
import * as AuthActions from './store/auth.actions';


@Injectable()
export class AuthService {
  constructor(private http: HttpClient,
              private store: Store<AppReducer.AppState>,
              private router: Router) {}

  signin(username: string, password: string) {
    return this.http.post('/api/v1/auth', {
      username,
      password
    });
  }
}
