import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostDataService {

  constructor(private http: HttpClient) { }

  
  public getPostList(){
    return this.http.get(`https://jsonplaceholder.typicode.com/posts`);
  }

  public getPostDetails(id){
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }

  public addPost(addPost){
    return this.http.post(`https://jsonplaceholder.typicode.com/posts`,addPost);
  }

  public editPost(id, editPost){
    return this.http.put(`https://jsonplaceholder.typicode.com/posts/${id}`,editPost);
  }

  public deletePost(id){
    return this.http.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
  
}
