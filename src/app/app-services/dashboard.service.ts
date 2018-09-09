import { Injectable } from '@angular/core';
import { ArticleModel } from '../models/article-model.model';

@Injectable()
export class DashboardService {

  constructor() { }

  saveArticles(articles: ArticleModel[]) {
    if (localStorage['articles']) {
      delete localStorage['articles'];
      this.setArticles(articles);
    } else {
      this.setArticles(articles);
    }
  }

  setArticles(articles: ArticleModel[]) {
    localStorage.setItem('articles', JSON.stringify(articles));
  }

}
