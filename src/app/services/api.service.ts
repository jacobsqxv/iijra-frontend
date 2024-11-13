import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

export interface RequestOptions {
  headers?: HttpHeaders | Record<string, string | string[]>;
  params?: HttpParams | Record<string, string | string[]>;
  body?: any;
  responseType?: 'json' | 'text' | 'blob' | 'arraybuffer';
  withCredentials?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private readonly httpClient: HttpClient
  ) {
  }

  get<T>(url: string, options?: RequestOptions): Observable<T> {
    return this.httpClient.get<T>(url, {
      headers: options?.headers,
      params: options?.params,
      responseType: options?.responseType as 'json',
      withCredentials: options?.withCredentials
    });
  }

  post<T>(url: string, body: any, options?: RequestOptions): Observable<T> {
    return this.httpClient.post(url, body, {
      headers: options?.headers,
      params: options?.params,
      responseType: options?.responseType as 'json',
      withCredentials: options?.withCredentials
    }) as Observable<T>;
  }

  put<T>(url: string, body: any, options?: RequestOptions): Observable<T> {
    return this.httpClient.put<T>(url, body, {
      headers: options?.headers,
      params: options?.params,
      responseType: options?.responseType as 'json',
      withCredentials: options?.withCredentials
    });
  }

  patch<T>(url: string, body: any, options?: RequestOptions): Observable<T> {
    return this.httpClient.patch<T>(url, body, {
      headers: options?.headers,
      params: options?.params,
      responseType: options?.responseType as 'json',
      withCredentials: options?.withCredentials
    });
  }

  delete<T>(url: string, options?: RequestOptions): Observable<T> {
    return this.httpClient.delete<T>(url, {
      headers: options?.headers,
      params: options?.params,
      responseType: options?.responseType as 'json',
      withCredentials: options?.withCredentials,
      body: options?.body // DELETE can have a body in some cases
    });
  }
}
