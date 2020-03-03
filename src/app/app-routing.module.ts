import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NytimesArticleDetailsComponent } from 
'./nytimes-article-details/nytimes-article-details.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NYTimesArticlesComponent } from './nytimes-articles/nytimes-articles.component'
const routes: Routes = [
  

  { path: 'articles', component: NYTimesArticlesComponent },
  { path: 'article-details', component: NytimesArticleDetailsComponent },
  { path: 'error', component: PagenotfoundComponent},
  { path: '**', redirectTo: 'articles' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
