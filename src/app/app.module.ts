import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NYTimesArticlesComponent } from './nytimes-articles/nytimes-articles.component';
import { NYServiceService} from './services/nyservice.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DateSortPipe } from './Pipe/date-sort.pipe';
import { SearchByNamePipe } from './Pipe/search-by-name.pipe';
import { NytimesArticleDetailsComponent } from './nytimes-article-details/nytimes-article-details.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
 import {MatCardModule, MatButtonModule} from '@angular/material'
@NgModule({
  declarations: [
    AppComponent,
    NYTimesArticlesComponent,
    DateSortPipe,
    SearchByNamePipe,
    NytimesArticleDetailsComponent,
    PagenotfoundComponent,
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    MatCardModule, MatButtonModule,

  ],
  providers: [NYServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
