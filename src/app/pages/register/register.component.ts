import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, FontAwesomeModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent {
  @Input () public display: boolean = false;
  @Output () public setDisplay = new EventEmitter<string>();

  public username: string = '';
  public email: string = '';
  public password: string = '';

  register(){

  }

  returnToLogin(){
    this.setDisplay.emit();
  }
}
