import {Component, OnInit} from '@angular/core';
import {ThemePalette} from '@angular/material/core';

class NavLinkIconTitle {
  label: string;
  path: string;
  icon: string;
  title: string;
}

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css'],
})
export class ManagementComponent implements OnInit {
  links: NavLinkIconTitle[] =  [
    {label: 'Create', path: '/management/create', icon: 'add', title: 'Group Creation'},
    {label: 'Move', path: '/management/move', icon: '', title: 'Move Group'},
    {label: 'Remove', path: '/management/remove', icon: '', title: 'Remove Group'}
  ];
  title: NavLinkIconTitle = {label: 'Portfolio Management', path: '', icon: 'arrow_back', title: ''};
  back: NavLinkIconTitle = {label: 'Total Cost of Ownership', path: '/main', icon: 'arrow_forward_ios', title: ''};
  tabs: NavLinkIconTitle[] =  [
    {label: 'Portfolio', path: '/management/portfolio', icon: '', title: 'Portfolio Content'},
    {label: 'Inventory', path: '/management/inventory', icon: '', title: 'Inventory Content'},
    {label: 'Removed DBs', path: '/management/removed', icon: '', title: 'Removed DBs Content'}
  ];
  aTab: NavLinkIconTitle;
  aLink: NavLinkIconTitle;
  background: ThemePalette = undefined;

  ngOnInit(): void {
    this.aTab = this.tabs[0];
    this.aLink = this.links[0];
  }
}
