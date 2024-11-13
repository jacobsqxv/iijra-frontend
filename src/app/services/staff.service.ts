import {Injectable} from '@angular/core';
import {ApiService, RequestOptions} from "./api.service";
import {GetStaffParams, PageResponse} from "../../types";
import {Observable} from "rxjs";
import {convertToHttpParams} from "../../utilities";

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  private readonly staffUrl: string = 'http://localhost:12345/api/v1/staff';

  constructor(
    private readonly apiService: ApiService
  ) {
  }

  options: RequestOptions = {
    headers: {
      'Content-Type': 'application/json',
      // 'Authentication': `Bearer ${this.token}`
    },
    withCredentials: false
  }


  getAllStaff = (params: GetStaffParams): Observable<PageResponse> => {
    return this.apiService.get(this.staffUrl, {
      params: convertToHttpParams(params)
    })
  }

}

