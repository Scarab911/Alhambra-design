import { Component, OnInit } from '@angular/core';
import { Fabric } from 'src/app/models/fabric';

@Component({
  selector: 'app-fabrics-list',
  templateUrl: './fabrics-list.component.html',
  styleUrls: ['./fabrics-list.component.scss'],
})
export class FabricsListComponent implements OnInit {
  allFabricsList: Fabric[] = [];

  constructor() {}

  ngOnInit(): void {
    this.allFabricsList.push(
      new Fabric(
        'https://www.davis.pl/upload/2019/04/WRP_Bergamo-82-394x303.jpg',
        'Siera 00'
      )
    );
    this.allFabricsList.push(
      new Fabric(
        'https://www.linenbeauty.com/sites/linenbeauty.com/files/styles/uc_product_full/public/01880.jpg?itok=sNhCLb_t',
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
}
