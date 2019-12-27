import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Blueprint, Server } from '../models';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  newServerName = '';
  newServerContent = '';

  @Output() serverCreated = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onAddServer() {
    this.serverCreated.emit(new Server(this.newServerName, this.newServerContent));
  }

  onAddBlueprint() {
    this.serverCreated.emit(new Blueprint(this.newServerName, this.newServerContent));
  }
}
