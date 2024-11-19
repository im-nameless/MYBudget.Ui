import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from '../register/register.component';
import { HttpService } from 'src/app/services/http.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RegisterComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  constructor(
    private authenticationService: AuthenticationService,
    private service: HttpService,
    private router: Router
  ) { }

  public username: string = '';
  public password: string = '';
  public rememberMe: boolean = false;
  public displayRegistration: boolean = false;

  ngOnInit(): void {

  }

  login(){
    if (!this.username || !this.password) {
      Swal.fire('Atenção', 'Preencha os campos corretamente', 'warning');
      return;
    }

    this.authenticationService.login({email: this.username, password: this.password, rememberMe: this.rememberMe}).then((r) => {
      console.log(r);
    });
  }

  setDisplay(){
    this.displayRegistration = !this.displayRegistration;
  }
}
