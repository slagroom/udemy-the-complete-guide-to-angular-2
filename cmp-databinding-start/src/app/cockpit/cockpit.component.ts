import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Blueprint, Server } from '../models';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @ViewChild('serverContentInput', { static: true }) serverContentInput: ElementRef;

  @Output() serverCreated = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onAddServer(serverNameInput: HTMLInputElement) {
    this.serverCreated.emit(
      new Server(
        serverNameInput.value,
        this.serverContentInput.nativeElement.value));
  }

  onAddBlueprint(serverNameInput: HTMLInputElement) {
    this.serverCreated.emit(
      new Blueprint(serverNameInput.value,
        this.serverContentInput.nativeElement.value));
  }
}
