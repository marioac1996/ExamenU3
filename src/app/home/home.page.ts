import { Component, OnInit } from '@angular/core';
import {ExampleService,Example} from 'src/app/services/example.service';
import {Observable} from 'rxjs';
import {AuthenticationService} from '../services/authentication.service'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
	private examples:Observable<Example[]>;

  constructor(
  	private exampleService:ExampleService,
  	private authService:AuthenticationService,

  	) { }

  ngOnInit() {
  		this.examples= this.exampleService.getExamples();	
  }

}
