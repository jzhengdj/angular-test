import { Component } from '@angular/core';
import { PostsService } from '../services/posts.services'

@Component({
	moduleId: module.id,
  	selector: 'user',
  	templateUrl: 'user.component.html',
  	providers: [PostsService]
  	
})
export class UserComponent  { 
	name: string;
	email: string;
	address: address;
	hobbies: string[];
	showHobbies: boolean;
	posts: Post[];


	constructor(private postsService: PostsService){
		//console.log('why got many errors? still able to run though');
		this.name = 'Jiao Zheng';
		this.email = 'jzhengdj@gmail.com';
		this.address = {
			street: '12 Main st',
			city: 'Singapore',
			state: 'Singapore'
			}
		this.hobbies = ['Music', 'Movies', 'Sports'];
		this.showHobbies = true;

		this.postsService.getPosts().subscribe(posts => {
			this.posts = posts;
		});
	}

	toggleHobbies(){
		this.showHobbies = !this.showHobbies;
	}

	addHobby(hobby: string){
		this.hobbies.push(hobby);
	}
	deleteHobby(i: number){
		this.hobbies.splice(i, 1);
	}
}

interface address {
	street: string;
	city: string;
	state: string;
}

interface Post {
	id: number;
	title: string;
	body: string;
}