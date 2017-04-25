import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  	<ul>
  		<li><a href="/">Home</a></li>
  		<li><a href="/about/">About</a></li>
	</ul>
  	<hr />
  	<router-outlet></router-outlet>
  	`,
})
export class AppComponent  { 
	
	}
