import { Component, OnInit,AfterContentInit,ViewChild } from '@angular/core';
declare var google;
@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {
	map;
	
	@ViewChild('mapElement') mapElement;

  constructor() { }

  ngOnInit() {
  }
  ngAfterContentInit():void{
  	this.map = new google.maps.Map(
  		this.mapElement.nativeElement,
  		  	{
  		  		center:{lat:18.702606,lng:-88.399572},
  		  		zoom:14
  		  	}
  		)
  }

}
