import { Component, OnInit } from '@angular/core';
import { PostDataService } from '../post-data.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent implements OnInit {
  postList: any[];
  postDetials: any[];
  userId: any;
  body: any;
  title: any;
  viewPostDetails = false;
  addPostForm: FormGroup;
  editPostForm:FormGroup
  id: any;

  constructor(private postService:PostDataService, private _fb:FormBuilder) {
    this.addPostForm = new FormGroup({
      userId: new FormControl(null),
      title: new FormControl(null),
      body: new FormControl(null),
    });

    this.editPostForm = new FormGroup({
      userId: new FormControl(null),
      title: new FormControl(null),
      body: new FormControl(null),
    });
   }

  ngOnInit(): void {
    this.getPostList();
  }

  public getPostList(){
    this.postService.getPostList().subscribe((data: any[])=>{
      this.postList = data;
      console.log(this.postList);
    });    
  }

  public getPostDetails(post){
    this.postService.getPostDetails(post.id).subscribe((data: any[])=>{
      this.postDetials = data;
      this.viewPostDetails=true;
      this.id = data['id'];
      this.userId = data['userId'];
      this.title = data['title']
      this.body = data['body'];
      console.log(this.postDetials);
      this.editPostForm.setValue({  
        userId: this.userId,  
        title: this.title ,  
        body: this.body,  
    }); 
    }); 
  }

  public onSubmit(){
    this.addPostForm.value
    this.postService.addPost(this.addPostForm.value).subscribe((data: any[])=>{
      this.getPostList();
    });   
  }

  public onUpdate(){
    this.editPostForm.value
    this.postService.editPost(this.id, this.editPostForm.value).subscribe((data: any[])=>{
      this.getPostList();
    });   
  }

  public deletePost(){
    this.postService.deletePost(this.id).subscribe((data: any[])=>{
      this.getPostList();
    }); 
  }

}
