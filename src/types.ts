import {HttpContext, HttpHeaders, HttpParams} from "@angular/common/http";

export interface Options {
  headers?: HttpHeaders | {
    [header: string]: string | string[];
  };
  observe?: 'body';
  context?: HttpContext;
  params?: HttpParams | {
    [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
  };
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
  transferCache?: {
    includeHeaders?: string[];
  } | boolean;
}

export interface LoginRequest {
  email: string
  password: string
}

export interface ApiResponse {
  code: number
  data: object
}

export interface PageResponse {
  code: number
  data: object
  metadata: PageMetadata
}

interface PageMetadata {
  page: number
  size: number
  totalElements: number
  totalPages: number
}

export interface GetStaffParams {
  search: string
  departments: string[]
  status: string
  isHod: boolean
  page: number
  size: number
}

export interface ResetPasswordRequest {
  email: string
}

export interface ResetPassword {
  password: string
}
