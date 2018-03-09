import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class PostsService {

  constructor(private http: Http) {
  }

  getPosts() {
    return this.http.get('../../assets/posts.json').map(resp => resp.json());
  }
  getTags() {
    return this.http.get('../assets/tags.json').map(resp => resp.json());
  }
  getFullPost(id) {
    const url = '../assets/post' + id + '.json';
    return this.http.get(url).map(data => data.json());
  }
}
