import {Component, OnInit} from '@angular/core';

export interface NavLinkIcon {
  path: string;
  label: string;
  icon: string;
  status: boolean;
}

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css'],
})
export class TopComponent implements OnInit {
  links: NavLinkIcon[] =  [
    // {label: 'Total cost of ownership', path: '', icon: ''},
    // {label: 'Portfolio Management', path: '/management', icon: 'create', status: false},
    {label: 'Cost Distribution', path: '/cost', icon: '', status: true},
    {label: 'Monthly', path: '/monthly', icon: '', status: false},
    {label: 'Yearly', path: '/yearly', icon: '', status: false}
    ];
  manage: NavLinkIcon = {label: 'Portfolio Management', path: '/management', icon: 'create', status: false};
  title = 'Total Cost of Ownership';
  aLink: NavLinkIcon;
  constructor() { }

  ngOnInit(): void {
    this.aLink = this.links[2];
  }

}
