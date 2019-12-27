import { Component, OnInit, Input } from '@angular/core';
import { ServerElement } from '../models';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {

  @Input() element: ServerElement;

  constructor() { }

  ngOnInit() {
  }

}
