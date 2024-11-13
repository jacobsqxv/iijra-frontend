import {Injectable} from '@angular/core';
import {ApiService, RequestOptions} from "./api.service";
import {Observable} from "rxjs";
import {ApiResponse, LoginRequest, ResetPassword, ResetPasswordRequest} from "../../types";

const options: RequestOptions = {
  headers: {'Content-Type': 'application/json'},
  withCredentials: false
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly authUrl: string = 'http://localhost:12345/api/v1/auth';

  constructor(
    private readonly apiService: ApiService
  ) {
  }

  login = (body: LoginRequest): Observable<ApiResponse> => {
    return this.apiService.post(`${this.authUrl}/login`, body, options);
  }

  resetPasswordRequest = (body: ResetPasswordRequest): Observable<string> => {
    return this.apiService.post(`${this.authUrl}/password-reset-request`, body, options);
  }

  resetPassword = (token: string, body: ResetPassword): Observable<string> => {
    return this.apiService.put(`${this.authUrl}/password-reset`, body, {
      headers: options.headers,
      params: {"token": token},
      withCredentials: options.withCredentials
    })
  }
}

