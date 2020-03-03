import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-nytimes-article-details',
  templateUrl: './nytimes-article-details.component.html',
  styleUrls: ['./nytimes-article-details.component.css']
})
export class NytimesArticleDetailsComponent implements OnInit {
  public data: any;

  public constructor(private router: Router) { }

  ngOnInit(): void {

    try {

      if (history.state.data == undefined) {
        this.router.navigate(['/article']);
      }
      this.data = history.state;

    }
    catch (error) {
      return error;
    }
}

}
