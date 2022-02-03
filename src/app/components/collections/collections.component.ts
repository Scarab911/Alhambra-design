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
        'https://images-na.ssl-images-amazon.com/images/G/01/books/editorial/content_grid_amazon_book_review_2_440x344.jpg',
        'Title',
        'Short description'
      )
    );
    this.allCollectionsList.push(
      new Collection(
        'https://images-na.ssl-images-amazon.com/images/G/01/books/editorial/content_grid_amazon_book_review_2_440x344.jpg',
        'Title',
        'Short description'
      )
    );
    this.allCollectionsList.push(
      new Collection(
        'https://images-na.ssl-images-amazon.com/images/G/01/books/editorial/content_grid_amazon_book_review_2_440x344.jpg',
        'Title',
        'Short description'
      )
    );
    this.allCollectionsList.push(
      new Collection(
        'https://images-na.ssl-images-amazon.com/images/G/01/books/editorial/content_grid_amazon_book_review_2_440x344.jpg',
        'Title',
        'Short description'
      )
    );
    this.allCollectionsList.push(
      new Collection(
        'https://images-na.ssl-images-amazon.com/images/G/01/books/editorial/content_grid_amazon_book_review_2_440x344.jpg',
        'Title',
        'Short description'
      )
    );
    this.allCollectionsList.push(
      new Collection(
        'https://images-na.ssl-images-amazon.com/images/G/01/books/editorial/content_grid_amazon_book_review_2_440x344.jpg',
        'Title',
        'Short description'
      )
    );
  }
}
