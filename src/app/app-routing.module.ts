import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   component: CollectionsComponent,
  // },
  // {
  //   path: 'collections',
  //   component: CollectionsComponent,
  // },
  // {
  //   path: 'fabric',
  //   component: FabricsListComponent,
  // },
  {
    path: 'collections',
    loadChildren: () =>
      import('./collections/collections.module').then(
        (m) => m.CollectionsModule
      ),
  },
  {
    path: 'fabrics',
    loadChildren: () =>
      import('./fabrics/fabrics.module').then((m) => m.FabricsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
