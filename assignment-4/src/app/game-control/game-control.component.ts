import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  private current: number = 0;
  private interval: NodeJS.Timeout = null;
  @Output() increment: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onStart() {
    if (this.interval !== null) {
      return;
    }
    this.interval = setInterval(() => {
      this.current += 1;
      this.increment.emit(this.current);
    }, 1000);
  }

  onStop() {
    if (this.interval === null) {
      return;
    }
    clearInterval(this.interval);
    this.interval = null;
  }
}
