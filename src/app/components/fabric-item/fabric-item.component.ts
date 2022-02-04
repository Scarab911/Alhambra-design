import { Component, Input, OnInit } from '@angular/core';
import { Fabric } from 'src/app/models/fabric';

@Component({
  selector: 'app-fabric-item',
  templateUrl: './fabric-item.component.html',
  styleUrls: ['./fabric-item.component.scss'],
})
export class FabricItemComponent implements OnInit {
  @Input()
  public fabric!: Fabric;
  constructor() {}

  ngOnInit(): void {}
}
