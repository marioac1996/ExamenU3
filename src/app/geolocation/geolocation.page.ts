import { Component, OnInit,ElementRef,ViewChild,AfterViewInit } from '@angular/core';
import {Geolocation} from '@ionic-native/geolocation/ngx';
declare var google;
@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.page.html',
  styleUrls: ['./geolocation.page.scss'],
})
export class GeolocationPage implements OnInit,AfterViewInit {
	latitude:any;
	longitude:any;
	@ViewChild('mapElement2') mapNativeElement:ElementRef;


  constructor(private geolocation:Geolocation) { }

  ngOnInit() {
  }
  ngAfterViewInit():void{
  	this.geolocation.getCurrentPosition().then(
  		(resp)=>{
  			this.latitude= resp.coords.latitude;
  			this.longitude = resp.coords.longitude;
  			const map =new google.maps.Map(this.mapNativeElement.nativeElement,{
  				center:{lat:18.702606,lng:-88.399572},
  				zoom:8
  			});
  			const infoWindow = new google.maps.InfoWindow;
        
  			const pos={
  				lat:this.latitude,
  				lng:this.longitude
  			};
  			infoWindow.setPosition(pos);
  			infoWindow.setContent('Lugar Encontrado.');
  			infoWindow.open(map);
  			map.setCenter(pos);
  			const icon = {
  				url:'assets/icon/logo.png',
  				scaledSize: new google.maps.Size(50,50),
  			};
  			const marker = new google.maps.Marker({
  				position:pos,
  				map:map,
  				title:'Hola Mundo',
  				icon:icon
  			});
  			const contentString='<div id="content">'+
  			'<div id="site">'+
  			'</div>'+
  			'<h1 id="firstHeading">iTechShop</h1>'+
  			'<div id="bodyContent">'+
  			'<img src="assets/icon/logo.png" width="200">'+
  			'<p><b>iTechShop</b>'+
  			'es empresa con cadena de supermercados mexicana de ascendencia libanesa la cual inicia operaciones como supermercado de la electronica en el año de 1970 originaria del estado de Veracruz.</p>'
  			+'</div>'
  			+'</div>'
  			;
  			const infowindow = new google.maps.InfoWindow({
  				content:contentString,
  				maxWidth:400
  			});
  			marker.addListener('click',function(){
  				infowindow.open(map,marker);
  			});
  		}
  		).catch((error)=>{
  			console.log('Error al obtener la ubicacion',error);
  		})
  }

}
