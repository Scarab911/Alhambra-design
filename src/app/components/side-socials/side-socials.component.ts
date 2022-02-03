import { Component, OnInit } from '@angular/core';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-socials',
  templateUrl: './side-socials.component.html',
  styleUrls: ['./side-socials.component.scss'],
})
export class SideSocialsComponent implements OnInit {
  faGlobe = faGlobe;
  constructor() {}

  ngOnInit(): void {}
}
