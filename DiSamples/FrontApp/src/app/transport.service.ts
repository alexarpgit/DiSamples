import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { retry, catchError, map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class TransportService {

  private  _apiUrl = 'http://localhost:50085/api/';
  private  _httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),    
  }

  constructor(private http: HttpClient) { }

  getRequest<TResponse>(method: string, param: string = ''): Observable<TResponse>{
    return this.http.get<TResponse>(this._apiUrl + method + (param.length > 0 ? "/" + param : ''))
    .pipe(
      data => {return data},
      catchError(err => {return throwError(err)})
    );
  }

  postRequest<TResponse>(controller: string, action: string, request: any): Observable<TResponse>{
    return this.http.post<TResponse>(this._apiUrl + controller + '/' + action, JSON.stringify(request), this._httpOptions)
    .pipe(
      data => {return data},
      catchError(err => {return throwError(err)})
    );
  }

  putRequest<TResponse>(controller: string, request:any, id:string ): Observable<TResponse>{
    return this.http.put<TResponse>(this._apiUrl + controller, JSON.stringify(request), {headers: this._httpOptions.headers, params:{'Id': id}})
    .pipe(
      data => {return data},      
      catchError(err => {return throwError(err)})
    )
  }

  deleteRequest<TResponse>(controller: string, id: string): Observable<TResponse>{
    return this.http.delete<TResponse>(this._apiUrl + controller, {headers: this._httpOptions.headers, params:{'Id': id}})
    .pipe(
      data => {return data},
      catchError(err => {return throwError(err)})
    )
  }  
}

