///<reference path="../../../node_modules/@angular/http/src/url_search_params.d.ts"/>
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PostsService} from '../posts.service';

@Component({
  selector: 'app-page-details',
  templateUrl: './page-details.component.html',
  styleUrls: ['./page-details.component.scss']
})
export class PageDetailsComponent implements OnInit {

  id: string;
  fullPost = {};
  author = {};
  modalActive = false;

  showModal() {
    this.modalActive = true;
  }
  hideModal() {
    this.modalActive = false;
  }

  constructor(private route: ActivatedRoute, private postServise: PostsService) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.postServise.getFullPost(this.id).subscribe(data => {
      this.fullPost = data;
      this.author = data.author;
      // console.dir(this.fullPost);
    });

  }

}
