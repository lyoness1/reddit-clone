import { Component } from '@angular/core';
import { Article } from './article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];

  constructor() {
      this.articles = [
          new Article(
              'The Angular 2 App', 
              'Stuff goes here',
              5
          ),
          new Article(
              'Second Title',
              'Another description'
          ), 
          new Article(
              'Last Article Title',
              'Yet another description...'
          )
      ];
  }
}