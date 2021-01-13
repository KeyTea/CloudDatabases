import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'main', loadChildren: () => import('./main/main.module').then(m => m.MainModule)},
  {path: 'portfolio', loadChildren: () => import('./portfolio/portfolio.module').then(m => m.PortfolioModule)},
  {path: 'inventory', loadChildren: () => import('./inventory/inventory.module').then(m => m.InventoryModule)},
  {path: 'management', loadChildren: () => import('./management/management.module').then(m => m.ManagementModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
