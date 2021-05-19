import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/classes/post';
import { PostService } from 'src/app/shared/post.service';
import { TokenStorageService } from 'src/app/shared/token-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser : any;
  posts : Array<Post> = new Array<Post>();

  constructor(private tokenService: TokenStorageService, private postService: PostService) { }

  ngOnInit(): void {
    this.currentUser = this.tokenService.getUser();
    console.log(this.currentUser);
    this.reloadData();
  }

  reloadData(){
    this.postService.getAllPostByUser(this.currentUser.id).subscribe(data => {
      console.log(data);
      this.posts = data;
    })
  }

}
