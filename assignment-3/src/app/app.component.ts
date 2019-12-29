import { Component } from '@angular/core';

class Toggle {
  public when: number;
  constructor(public shown: boolean) {
    if (!Date.now) {
      Date.now = function() { return new Date().getTime(); }
    }
    this.when = Date.now();
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showDetails: boolean = false;
  toggles: Toggle[] = [];

  onToggleShowDetails() {
    this.showDetails = !this.showDetails
    this.toggles.push(new Toggle(this.showDetails));
  }
}
