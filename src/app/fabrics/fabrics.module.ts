import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FabricsRoutingModule } from './fabrics-routing.module';
import { FabricsComponent } from './fabrics.component';
import { FabricItemComponent } from './fabric-item/fabric-item.component';


@NgModule({
  declarations: [
    FabricsComponent,
    FabricItemComponent
  ],
  imports: [
    CommonModule,
    FabricsRoutingModule
  ]
})
export class FabricsModule { }
