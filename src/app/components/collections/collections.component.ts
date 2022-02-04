import { Component, OnInit } from '@angular/core';
import { Collection } from 'src/app/models/colection';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss'],
})
export class CollectionsComponent implements OnInit {
  allCollectionsList: Collection[] = [];

  constructor() {}

  ngOnInit(): void {
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
