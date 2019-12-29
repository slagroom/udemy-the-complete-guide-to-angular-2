import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  private current: number = 0;
  private counterInterval: NodeJS.Timeout = null;
  @Output() counterIncrement: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  start() {
    if (this.counterInterval !== null) {
      return;
    }
    this.counterInterval = setInterval(() => {
      this.current += 1;
      this.counterIncrement.emit(this.current);
    }, 1000);
  }

  stop() {
    if (this.counterInterval === null) {
      return;
    }
    clearInterval(this.counterInterval);
    this.counterInterval = null;
  }
}
