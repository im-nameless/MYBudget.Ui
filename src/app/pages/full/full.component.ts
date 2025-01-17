import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { HeaderComponent } from 'src/app/components/header/header.component';

@Component({
  selector: 'app-full',
  standalone: true,
  imports: [CommonModule, HeaderComponent, RouterModule],
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.scss'],
})
export class FullComponent implements OnInit {
  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token');

  }
}
