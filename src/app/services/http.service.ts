import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpEventType,
  HttpHeaders,
} from '@angular/common/http';
import { Router } from '@angular/router';
import { ResponseApi } from '../pages/interfaces/response-api';
import { catchError, throwError } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private header: HttpHeaders;
  private host: string = "https://localhost:7225";
  public progress: number = 0;
  public busy: boolean = false;
  public origin: string | undefined;

  constructor(
    public httpClient: HttpClient,
    public router: Router
  ) {
    this.header = new HttpHeaders()
    .set('Authorization', `Bearer ${localStorage.getItem('accesstoken')}`)
    .set('Content-Type', 'application/json');
  }

  async get(uri: string, id: any): Promise<any | void> {

    this.header = new HttpHeaders()
      .set('Authorization', `Bearer ${localStorage.getItem('accesstoken')}`)
      .set('Content-Type', 'application/json');

    let url = `${this.host}/${uri}`;
    if (id) {
      url += `/${id}`;
    }

    return new Promise((resolve, reject) => {
      this.httpClient
        .get<ResponseApi>(url, {
          headers: this.header,
          reportProgress: true,
          observe: 'events',
        })
        .pipe(catchError(this.errorMgmt))
        .subscribe((event) => {
          switch (event.type) {
            case HttpEventType.Sent:
              this.busy = true;
              break;
            case HttpEventType.ResponseHeader:
              this.busy = false;
              break;
            case HttpEventType.UploadProgress:
              this.progress = Math.round((event.loaded / event.total!) * 100);
              break;
            case HttpEventType.Response:
              resolve(event.body);
          }
        });
    });
  }

  async delete(uri: string, id: any): Promise<any | void> {
    this.header = new HttpHeaders()
      .set('Authorization', `Bearer ${localStorage.getItem('accesstoken')}`)
      .set('Content-Type', 'application/json');

    let url = `${this.host}/${uri}`;
    if (id) {
      url += `/${id}`;
    }

    return new Promise((resolve, reject) => {
      this.httpClient
        .delete<ResponseApi>(url, {
          headers: this.header,
          reportProgress: true,
          observe: 'events',
        })
        .pipe(catchError(this.errorMgmt))
        .subscribe((event) => {
          switch (event.type) {
            case HttpEventType.Sent:
              this.busy = true;
              break;
            case HttpEventType.ResponseHeader:
              this.busy = false;
              break;
            case HttpEventType.UploadProgress:
              this.progress = Math.round((event.loaded / event.total!) * 100);
              break;
            case HttpEventType.Response:
              resolve(event.body);
          }
        });
    });
  }

  async post(
    uri: string,
    params: any,
    contentType: string = 'application/json'
  ): Promise<void | any> {
    this.header = new HttpHeaders()
      .set('Authorization', `Bearer ${localStorage.getItem('accesstoken')}`)
      .set('Content-Type', contentType);

    return new Promise((resolve, reject) => {
      this.httpClient
        .post<ResponseApi>(`${this.host}/${uri}`, params, {
          headers: this.header,
          reportProgress: true,
          observe: 'events',
        })
        .pipe(catchError(this.errorMgmt))
        .subscribe((event) => {
          switch (event.type) {
            case HttpEventType.Sent:
              this.busy = true;
              break;
            case HttpEventType.ResponseHeader:
              this.busy = false;
              break;
            case HttpEventType.UploadProgress:
              this.progress = Math.round((event.loaded / event.total!) * 100);
              break;
            case HttpEventType.Response:
              resolve(event.body);
          }
        });
    });
  }

  async put(
    uri: string,
    params: any,
    contentType: string = 'application/json'
  ): Promise<void | any> {
    this.header = new HttpHeaders()
      .set('Authorization', `Bearer ${localStorage.getItem('accesstoken')}`)
      .set('Content-Type', contentType);

    return new Promise((resolve, reject) => {
      this.httpClient
        .put<ResponseApi>(`${this.host}/${uri}`, params, {
          headers: this.header,
          reportProgress: true,
          observe: 'events',
        })
        .pipe(catchError(this.errorMgmt))
        .subscribe((event) => {
          switch (event.type) {
            case HttpEventType.Sent:
              this.busy = true;
              break;
            case HttpEventType.ResponseHeader:
              this.busy = false;
              break;
            case HttpEventType.UploadProgress:
              this.progress = Math.round((event.loaded / event.total!) * 100);
              break;
            case HttpEventType.Response:
              resolve(event.body);
          }
        });
    });
  }

  async patch(
    uri: string,
    params: any,
    contentType: string = 'application/json'
  ): Promise<void | any> {
    this.header = new HttpHeaders()
      .set('Authorization', `Bearer ${localStorage.getItem('accesstoken')}`)
      .set('Content-Type', contentType);

    return new Promise((resolve, reject) => {
      this.httpClient
        .patch<ResponseApi>(`${this.host}/${uri}`, params, {
          headers: this.header,
          reportProgress: true,
          observe: 'events',
        })
        .pipe(catchError(this.errorMgmt))
        .subscribe((event) => {
          switch (event.type) {
            case HttpEventType.Sent:
              this.busy = true;
              break;
            case HttpEventType.ResponseHeader:
              this.busy = false;
              break;
            case HttpEventType.UploadProgress:
              this.progress = Math.round((event.loaded / event.total!) * 100);
              break;
            case HttpEventType.Response:
              resolve(event.body);
          }
        });
    });
  }

  private errorMgmt(error: HttpErrorResponse) {

    if (error.status == 403 && location.pathname != '/') {
      Swal.fire('Atenção', 'Você não possui permissão para acessar esse recurso', 'warning').then((r) => {
        this.router.navigate(['']);
      });
    }
    else if (error.status == 401 && location.pathname != '/') {
      localStorage.clear();
      Swal.fire('Atenção', 'Sua sessão expirou', 'warning').then((r) => {
        this.router.navigate(['']);
      });
    }

    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      if (error.status === 401){
        if (window.location.pathname = '') {
          localStorage.clear();
          Swal.fire('Atenção', 'Sua sessão expirou', 'warning').then((r) => {
            window.location.assign('login');
          });
        }
      }
      else if(error.status === 403){
        Swal.fire('Atenção', 'Você não possui permissão para acessar esse recurso', 'warning').then((r) => {
          window.location.assign('login');
        });
      } else {
        errorMessage = `Error: ${error.status}\nMessage: ${error.message}`;
      }
    }

    if (error.error != null) {
      Swal.fire('Atenção', error.error.Message, 'warning');
    }

    return throwError(error.error);
  }
}
