import { Component, OnInit } from '@angular/core';
import { Fabric } from '../models/fabric';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-fabrics',
  templateUrl: './fabrics.component.html',
  styleUrls: ['./fabrics.component.scss'],
})
export class FabricsComponent implements OnInit {
  fabricsList!: Fabric[];
  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.fabricsList = this.categoriesService.allFabricsList;
  }
}
