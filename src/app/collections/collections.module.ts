import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionsComponent } from './collections.component';
import { CollectionItemComponent } from './collection-item/collection-item.component';

@NgModule({
  declarations: [CollectionsComponent, CollectionItemComponent],
  imports: [CommonModule, CollectionsRoutingModule],
})
export class CollectionsModule {}
