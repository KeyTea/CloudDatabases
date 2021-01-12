import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {NavLinkIcon} from '../top/top.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  links: NavLinkIcon[] =  [
    {label: 'Create', path: '/add', icon: 'add', status: false},
    {label: 'Move', path: '/move', icon: '', status: false},
    {label: 'Remove', path: '/remove', icon: '', status: false}
  ];
  title = 'Portfolio Management';
  back = 'Total Cost of Ownership';
  tabs: string [] = ['Portfolio', 'Inventory', 'Removed DBs'];
  activeLink = this.tabs[0];
  constructor() { }

  ngOnInit(): void {
  }

}
