import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {PostComponent} from './post/post.component';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {TagfilterPipe} from './tagfilter.pipe';
import {HomepageComponent} from './homepage/homepage.component';
import {PageDetailsComponent} from './page-details/page-details.component';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'details/:id', component: PageDetailsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    TagfilterPipe,
    HomepageComponent,
    PageDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
