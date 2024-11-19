import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { jwtDecode } from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends HttpService {

  constructor(public http: HttpClient, public override router: Router) {
    super(http, router);
  }

  private getToken(): any {
    var jwt = localStorage.getItem('accesstoken') ?? '';

    if (!jwt) {
      this.logout();
      return;
    }

    return jwtDecode(jwt);
  }

  public getUserId(): string {
    let token = this.getToken();
    return token.name;
  }

  async login(model: any): Promise<void | any>{
    return this.post('login', model)
    .then((r) => {
      console.log(r);
      if (!r.success) {
        Swal.fire('Atenção', r.Message).then((r) => {
          this.router.navigate(['/login']);
        });
        return;
      }

      localStorage.setItem('accesstoken', r.data);
      this.router.navigate(['/']);
    })
    .catch((e) => {
      Swal.fire('Atenção', e.Message);
    });
  }

  async logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
