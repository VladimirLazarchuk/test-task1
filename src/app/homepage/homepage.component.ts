import {Component, OnInit} from '@angular/core';
import {PostsService} from '../posts.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  posts = [];
  tags = [];
  category = 'Все категории';

  constructor(private postsService: PostsService) {
  }


  ngOnInit() {
    this.postsService.getPosts().subscribe(data => {
      this.posts = data;
    });
    this.postsService.getTags().subscribe(data => {
      this.tags = data;
    });
  }
}
