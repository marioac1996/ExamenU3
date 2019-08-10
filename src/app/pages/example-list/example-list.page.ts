import { Component, OnInit } from '@angular/core';
import {Example2Service,Example2} from 'src/app/services/example2.service';
import {Observable} from 'rxjs';
import {AuthenticationService} from '../../services/authentication.service'
import {NavController} from '@ionic/angular';
@Component({
  selector: 'app-example-list',
  templateUrl: './example-list.page.html',
  styleUrls: ['./example-list.page.scss'],
})
export class ExampleListPage implements OnInit {
  private examples:Observable<Example2[]>;

  constructor(
    private exampleService:Example2Service,
    private authService:AuthenticationService,
    private navCtrl:NavController,
    ) { }

  ngOnInit() {
    if (this.authService.userDetails()) {
      this.examples= this.exampleService.getExamples();
    }else{
      this.navCtrl.navigateBack('');
    }
    
  }
  logout(){
    this.authService.logoutUser()
    .then(res =>{
      console.log(res);
      this.navCtrl.navigateBack('');
    }
    ).catch(
    error=>{
      console.log(error);
    }
    );
  }

}

