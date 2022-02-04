import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  collbuttonStyle: string = 'defaultBtn';
  fabricButtonStyle: string = 'defaultBtn';
  isClicked: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  public hitCollection(): void {
    this.collbuttonStyle === 'defaultBtn'
      ? (this.collbuttonStyle = 'clickedBtn')
      : this.collbuttonStyle;
    this.fabricButtonStyle = 'defaultBtn';
  }
  public hitFabric(): void {
    this.fabricButtonStyle === 'defaultBtn'
      ? (this.fabricButtonStyle = 'clickedBtn')
      : this.fabricButtonStyle;
    this.collbuttonStyle = 'defaultBtn';
  }
}
