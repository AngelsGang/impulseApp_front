import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage,
    children: [
      {
        path: 'contact',
        children:[{
            path: '',
            loadChildren: () =>
              import('../contact/contact.module').then(m => m.ContactPageModule)
          }]},
          {
            path: 'map',
            children:[{
                path: '',
                loadChildren: () =>
                  import('../map/map.module').then(m => m.MapPageModule)
              }]},
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
