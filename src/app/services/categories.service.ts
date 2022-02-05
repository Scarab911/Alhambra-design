import { Injectable } from '@angular/core';
import { Collection } from '../models/colection';
import { Fabric } from '../models/fabric';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  public allFabricsList: Fabric[] = [];
  public allCollectionsList: Collection[] = [];

  constructor() {
    this.loadCollections();
    this.loadFabrics();
  }

  private loadFabrics(): void {
    this.allFabricsList.push(
      new Fabric(
        'https://www.davis.pl/upload/2019/04/WRP_Bergamo-82-394x303.jpg',
        'Siera 00'
      )
    );
    this.allFabricsList.push(
      new Fabric(
        'https://cdn.shopify.com/s/files/1/0115/8319/3145/products/image_623b58c3-b319-44f6-9bf0-de914b70352b_1600x.jpg?v=1639756329',
        'Leona 14'
      )
    );
    this.allFabricsList.push(
      new Fabric(
        'https://www.linenbeauty.com/sites/linenbeauty.com/files/styles/uc_product_full/public/01880.jpg?itok=sNhCLb_t',
        'Siera 12'
      )
    );
    this.allFabricsList.push(
      new Fabric(
        'https://www.ikea.com/gb/en/images/products/aina-fabric-blue-grey__0888767_pe677012_s5.jpg?f=s',
        'Katerina 58'
      )
    );
    this.allFabricsList.push(
      new Fabric(
        'https://media.istockphoto.com/photos/white-cotton-fabric-texture-background-picture-id1219292954',
        'Leona 00'
      )
    );
    this.allFabricsList.push(
      new Fabric(
        'https://m1.atelierbrunette.com/10924-large_default/atelier-brunette-crepe-chestnut-fabric.jpg',
        'Katerina 12'
      )
    );
  }

  private loadCollections(): void {
    this.allCollectionsList.push(
      new Collection(
        'https://images.unsplash.com/photo-1618220252344-8ec99ec624b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
        'Title',
        'Short description'
      )
    );
    this.allCollectionsList.push(
      new Collection(
        'https://images.unsplash.com/photo-1616046229478-9901c5536a45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
        'Title',
        'Short description'
      )
    );
    this.allCollectionsList.push(
      new Collection(
        'https://images.unsplash.com/photo-1617098650990-217c7cf9de26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
        'Title',
        'Short description'
      )
    );
    this.allCollectionsList.push(
      new Collection(
        'https://images.unsplash.com/photo-1616593787609-68f422cc1c7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
        'Title',
        'Short description'
      )
    );
    this.allCollectionsList.push(
      new Collection(
        'https://images.unsplash.com/photo-1615874959474-d609969a20ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
        'Title',
        'Short description'
      )
    );
    this.allCollectionsList.push(
      new Collection(
        'https://images.unsplash.com/photo-1615874694520-474822394e73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
        'Title',
        'Short description'
      )
    );
  }
}
