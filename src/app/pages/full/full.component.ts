import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-full',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.scss'],
})
export class FullComponent implements OnInit {
  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token');

    if(token){
      this.router.navigate(['/']);
    }else{
      this.router.navigate(['/login'])
    }
  }
}
