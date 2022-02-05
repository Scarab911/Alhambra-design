import { Component, OnInit } from '@angular/core';
import { Collection } from '../models/colection';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss'],
})
export class CollectionsComponent implements OnInit {
  collectionsList!: Collection[];
  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.collectionsList = this.categoriesService.allCollectionsList;
  }
}
