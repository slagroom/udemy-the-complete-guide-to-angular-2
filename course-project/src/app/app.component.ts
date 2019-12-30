import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'my-dream-app';

  showRecipes: boolean = true;
  showShoppingList: boolean = false;

  onLinkClicked(link: string) {
    if (link === 'recipes') {
      this.showRecipes = true;
      this.showShoppingList = false;
    } else if (link == 'shopping-list') {
      this.showShoppingList = true;
      this.showRecipes = false;
    } else {
      console.log("unknown link '" + link + "'");
    }
  }
}
