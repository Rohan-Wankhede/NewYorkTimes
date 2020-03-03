import { Component, OnInit } from '@angular/core';
import { Router  } from "@angular/router";
import { NYServiceService } from '../services/nyservice.service';
@Component({
  selector: 'app-nytimes-articles',
  templateUrl: './nytimes-articles.component.html',
  styleUrls: ['./nytimes-articles.component.css'],
  providers: [NYServiceService]
})
export class NYTimesArticlesComponent implements OnInit {
  public articles: Object[];
  public searchText: any = '';
  public serviceError: boolean = false;
  public dateAsc: boolean = false;
  

  constructor(private nyservice: NYServiceService, private router: Router) { }
  

  ngOnInit(): void {
    this.nyservice.getNYArticles().subscribe(res => {
      this.articles = res.results;
    }, error => {
      this.serviceError = true;
    }
    );
  }
  getClientItem(nr: any) {

    this.router.navigate(['/article-details'], { state: { data: nr } });

  }

  dateSort(event: any) {
    let filteredarticles: any;
    let sortedItems: any;
    if (this.searchText != '') {

      filteredarticles = this.articles.filter(
        (art: any) => (art.abstract.toLocaleLowerCase().includes(this.searchText.toLocaleLowerCase()) ||
          art.title.toLocaleLowerCase().includes(this.searchText.toLocaleLowerCase())
        )
      );
    } else {
      filteredarticles = this.articles;
    }


    if (this.dateAsc) {

      sortedItems = filteredarticles.sort((a: any, b: any) =>
        new Date(b.updated_date).getTime() - new Date(a.updated_date).getTime());
    } else {
      sortedItems = filteredarticles.sort((a: any, b: any) =>
        new Date(a.updated_date).getTime() - new Date(b.updated_date).getTime());

    }

    this.dateAsc = !this.dateAsc;

    this.articles = sortedItems;
  }

}
