import { Component, OnInit } from '@angular/core';

class NavLinks {
  label: string;
  path: string;
}

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  tabs: NavLinks[] = [{label: 'Portfolio', path: '/portfolio'}, {label: 'Inventory', path: '/inventory'}];
  constructor() { }

  ngOnInit(): void {
  }

}
