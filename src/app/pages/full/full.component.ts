import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { SidebarComponent } from 'src/app/components/sidebar/sidebar.component';
@Component({
  selector: 'app-full',
  standalone: true,
  imports: [CommonModule, HeaderComponent, RouterModule, SidebarComponent],
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.scss'],
})
export class FullComponent implements OnInit {
  public displaySidebar: boolean = false;

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token');
  }

  onToggleSidebar(){
    console.log("Entrou")
    this.displaySidebar = !this.displaySidebar;
  }
}
