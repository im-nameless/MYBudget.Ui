import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpService } from 'src/app/services/http.service';
import Swal from 'sweetalert2';
import { NgxMaskModule } from 'ngx-mask';



@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, FontAwesomeModule, NgxMaskModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent {
  constructor(
    private httpService: HttpService,
  ) { }

  @Input () public display: boolean = false;
  @Output () public setDisplay = new EventEmitter<string>();

  public username: string = '';
  public email: string = '';
  public password: string = '';
  public birthDate: string = '';
  public phone: string = '';

  register(){
    const data = {
      name: this.username,
      email: this.email,
      password: this.password,
      phone: this.phone,
      birthDate: this.birthDate,
    };

    this.httpService.post('User', data).then((r) => {
      console.log(data);

      Swal.fire({
        icon: 'success',
        title: 'Sucesso',
        text: 'Usuário registrado.'
      }).then(() => {
        this.returnToLogin();
      });
    });
  }

  returnToLogin(){
    this.setDisplay.emit();
  }
}
