import { Component, Input, OnInit } from '@angular/core';
import { Collection } from 'src/app/models/colection';

@Component({
  selector: 'app-collection-item',
  templateUrl: './collection-item.component.html',
  styleUrls: ['./collection-item.component.scss'],
})
export class CollectionItemComponent implements OnInit {
  @Input()
  public collection!: Collection;
  constructor() {}

  ngOnInit(): void {}
}
