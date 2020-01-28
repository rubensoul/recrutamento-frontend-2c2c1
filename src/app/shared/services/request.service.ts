import { Injectable } from '@angular/core';
import { HttpHeaders, HttpErrorResponse, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { throwError, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RequestService {


  private header: HttpHeaders;
  private apiUrl: string;
  token: any;

  constructor(
    public http: HttpClient,
  ) {
    this.apiUrl = environment.api;
    // this.prepareHeader();
  }

  // Cabeçalhos
  private prepareHeader() {


  }

  // Trata o retorno do GET
  private extractData(res: any) {
    try {
      return res || {}
    } catch (e) {
      return null
    }
  }

  // Retorno do erro
  private handleError(error: HttpErrorResponse) {
    return throwError(error);
  }

  // Get
  public get(endpoint: string, params = {}, id?: string): Observable<any> {
    return this.http.get(
      id ? `${this.apiUrl}${endpoint}${id}` : `${this.apiUrl}${endpoint}`,
      { headers: this.header, params }
    )
      .pipe(map(this.extractData))
      .pipe(catchError(this.handleError))
  }

  // Chamada generica dos serviços
  public genericRequest(type: string, endpoint: string, data: any): Observable<any> {
    let options = {
      body: data,
      headers: this.header
    }
    return this.http.request(type, endpoint, options)
  }

}
