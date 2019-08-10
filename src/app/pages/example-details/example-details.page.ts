import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router'
import {ExampleService,Example} from 'src/app/services/example.service';
import {ToastController} from '@ionic/angular';
@Component({
  selector: 'app-example-details',
  templateUrl: './example-details.page.html',
  styleUrls: ['./example-details.page.scss'],
})
export class ExampleDetailsPage implements OnInit {
	example: Example={
    codigo: '',
		nombre: '',
    categoria: '',
    descripcion: '', 
    pc: ''
	};

  constructor(
  	private activatedRoute:ActivatedRoute,
  	private exampleService: ExampleService,
  	private toastCtrl:ToastController,
  	private router:Router
  	) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
  	let id = this.activatedRoute.snapshot.paramMap.get('id');
  	if(id){
  		this.exampleService.getExample(id).subscribe(
  			example=>{
  				this.example = example;
  			}
  			);
  	}
  }

  addExample(){
  	this.exampleService.addExample(this.example).then(
  		() =>{
  			this.router.navigateByUrl('/example-list');
  			this.showToast("Producto se ha agregado correctamente!");
  		},err=>{
  			this.showToast("Hay un problema al agregar el producto :(");
  		}
  		);
  }
  deleteExample(){
  	this.exampleService.deleteExample(this.example.id).then(
  		()=>{
  			this.router.navigateByUrl('/example-list');
  			this.showToast("Producto se ha borrado");
  		},err =>{
  			this.showToast("Hay un problema al borrar el producto :(");
  		}
  		
  		);
  }
  updateExample(){
  	this.exampleService.updateExample(this.example).then(
  		() =>{
        this.router.navigateByUrl('/example-list');
  			this.showToast('El Producto se ha actualizado.')
  		},err =>{
  			this.showToast('Hay un problema con la actualización :(');
  		}
  		);
  }
  showToast(msg){
  	this.toastCtrl.create({
  		message: msg,
  		duration:2000
  	}).then(
  	toast=>{
  		toast.present()
  	}
  	);
  }

}
