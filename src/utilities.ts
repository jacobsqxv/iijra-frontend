import {HttpParams} from "@angular/common/http";

export function convertToHttpParams(obj: any): HttpParams {
  let params = new HttpParams();

  Object.keys(obj).forEach(key => {
    const value = obj[key];
    if (Array.isArray(value)) {
      value.forEach(val => {
        params = params.append(key, val);
      });
    } else if (value != null) {
      params = params.append(key, value.toString());
    }
  })
  return params;
}
