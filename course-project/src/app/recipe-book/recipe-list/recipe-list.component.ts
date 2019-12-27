import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'http://placekitten.com/g/100/100/'),
    new Recipe('Another Test', 'This is also simply a test', 'http://placekitten.com/g/150/150/')
  ];

  constructor() { }

  ngOnInit() {
  }

}
