import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FabricsComponent } from './fabrics.component';

const routes: Routes = [{ path: '', component: FabricsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FabricsRoutingModule { }
