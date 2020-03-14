import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw';

import { Response } from './models/response';

@Injectable()
export class HttpService {
  private _baseUrl = 'https://products-naveen.s3.ap-south-1.amazonaws.com/';

  constructor(private http: HttpClient) { 

  }

  get(url, params?) :Observable<Response>{
    return this.http.get<Response>(this._baseUrl + url)
      .catch(this.errorHandler);
  }

  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || 'Internal Server Error');
  }
}
