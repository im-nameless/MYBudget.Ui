import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public activeButton: string = 'home';

  constructor( 
    public router: Router

  ) { }

  ngOnInit(): void {
    
  }

  home(){
    this.router.navigate(['/']);
  }

  setActiveButton(button: string){
    this.activeButton = button;
  }
}
