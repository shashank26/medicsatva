import { Component, OnInit } from '@angular/core';
import { headerAnimation, expandAnimation, expandAnimationRight } from '../common/animations';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
  animations: [ headerAnimation , expandAnimation , expandAnimationRight ]
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
