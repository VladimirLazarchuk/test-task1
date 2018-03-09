import { Pipe, PipeTransform } from '@angular/core';
import {post} from 'selenium-webdriver/http';

@Pipe({
  name: 'tagfilter'
})
export class TagfilterPipe implements PipeTransform {

  transform(posts, value) {
    return posts.filter(post => {
      return post.tags.indexOf(value) !== -1;
    });
  }

}
