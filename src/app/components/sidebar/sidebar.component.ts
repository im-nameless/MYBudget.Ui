import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit{

  @Input () public displaySideBar: boolean = false;
  @Output () public displaySideBarChange = new EventEmitter<boolean>();

  ngOnInit(): void {

  }

  closeSideBar(){
    this.displaySideBar = false;
    this.displaySideBarChange.emit(this.displaySideBar);
  }
}
