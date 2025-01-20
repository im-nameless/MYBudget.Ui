import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, SidebarComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  public displaySidebar = false;

  public activeButton: string = 'home';

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  home(){
    this.router.navigate(['/']);
  }

  toggleSidebar() {
    console.log("Entrou")
    this.displaySidebar = !this.displaySidebar;
  }

  setActiveButton(button: string){
    this.activeButton = button;
  }
}
