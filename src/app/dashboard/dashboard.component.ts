import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ArticleModel } from '../models/article-model.model';
import { AuthenticationService } from '../app-services/authentication-service.service';
import { UserModel } from '../models/user-model.model';
import { DashboardService } from '../app-services/dashboard.service';
import { UserRoles } from '../enums/user-roles.enum';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @ViewChild('closeModal') closeModal: ElementRef;
  articles: ArticleModel[] = [];
  articleData: ArticleModel = {
    title: '',
    body: ''
  };
  activeUser: UserModel;
  userRoles: object;
  isNewArticle = false;
  isEditArticle = false;

  constructor(private authenticate: AuthenticationService,
    private dashboardService: DashboardService) { }

  ngOnInit() {
    this.userRoles = UserRoles;
    this.activeUser = JSON.parse(localStorage['activeUser']);
    if (localStorage['articles']) {
      this.articles = JSON.parse(localStorage['articles']);
    }
  }

  save() {
    this.closeModal.nativeElement.click();
  }

  submitArticle(articleForm: NgForm) {
    if (this.isEditArticle) {
      this.editSelectedArticle(articleForm);
    } else {
      this.createNewArticle(articleForm);
    }
    this.closeModal.nativeElement.click();
  }

  editSelectedArticle(articleForm: NgForm) {
    const article: ArticleModel = Object.assign({}, this.articleData);
    this.articles.forEach(currentArticle => {
      if (currentArticle.articleId === article.articleId) {
        currentArticle = article;
      }
      this.dashboardService.saveArticles(this.articles);
      this.resetArticleForm(articleForm);
      this.isNewArticle = false;
    });
  }

  createNewArticle(articleForm: NgForm) {
    const article: ArticleModel = Object.assign({}, this.articleData);
    article.articleId = this.authenticate.createId();
    article.creatorId = this.activeUser.id;
    article.creatorName = this.activeUser.username;
    this.articles.unshift(article);
    this.dashboardService.saveArticles(this.articles);
    this.resetArticleForm(articleForm);
    this.isNewArticle = false;
  }


  resetArticleForm(articleForm: NgForm) {
    articleForm.form.markAsPristine();
    articleForm.form.markAsUntouched();
    articleForm.form.updateValueAndValidity();
    this.articleData = {
      title: '',
      body: ''
    };
  }

  logout() {
    this.authenticate.logout();
  }

  addNewArticle() {
    this.isNewArticle = true;
  }

  editArticle(article: ArticleModel) {
    this.articleData = article;
    this.isEditArticle = true;
  }

  deleteArticle(index) {
    const confirmDelete = confirm('Are you sure you want to delete this article?');
    if (confirmDelete) {
      this.articles.splice(index, 1);
      this.dashboardService.saveArticles(this.articles);
    }
  }

  resetEditAndNewArticle(articleForm: NgForm) {
    this.isEditArticle = false;
    this.isNewArticle = false;
    this.resetArticleForm(articleForm);
  }

}
