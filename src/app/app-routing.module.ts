import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionsComponent } from './components/collections/collections.component';
import { FabricsListComponent } from './components/fabrics-list/fabrics-list.component';

const routes: Routes = [
  {
    path: 'collections',
    component: CollectionsComponent,
  },
  {
    path: 'fabric',
    component: FabricsListComponent,
  },
  {
    path: 'home',
    component: CollectionsComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
