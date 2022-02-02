import { Component, OnInit } from '@angular/core';
import { faChevronLeft, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  faChevronLeft = faChevronLeft;
  faTrash = faTrash;

  constructor() {}

  ngOnInit(): void {}
}
