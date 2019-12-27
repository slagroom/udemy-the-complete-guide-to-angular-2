import { Component } from '@angular/core';
import { ServerElement } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  serverElements: ServerElement[] = [];

  onServerCreated(serverElement: ServerElement) {
    this.serverElements.push(serverElement);
  }
}
