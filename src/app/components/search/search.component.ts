import { Component, OnInit } from '@angular/core';
import { faFilter, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  faFilter = faFilter;
  faSearch = faSearch;

  constructor() {}

  ngOnInit(): void {}
}
