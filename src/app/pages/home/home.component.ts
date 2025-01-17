import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { SidebarComponent } from 'src/app/components/sidebar/sidebar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, SidebarComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
