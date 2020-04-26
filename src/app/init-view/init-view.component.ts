import { Component, OnInit } from '@angular/core';
import { animations } from './init-view.animations';

@Component({
  selector: 'app-init-view',
  templateUrl: './init-view.component.html',
  styleUrls: ['./init-view.component.scss'],
  animations: [animations]
})

export class InitViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}
