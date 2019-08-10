import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection,AngularFirestoreDocument,DocumentReference} from '@angular/fire/firestore';
import {map,take} from 'rxjs/operators';
import {Observable} from 'rxjs';
import * as firebase from 'firebase/app';
export interface Example{
	id?:string,
    codigo: string,
    nombre: string,
    categoria: string,
    descripcion: string,
    pc: string,
}

@Injectable({
  providedIn: 'root'
})


export class ExampleService {
	private examples:Observable<Example[]>;
	private exampleCollection: AngularFirestoreCollection<Example>;


  constructor(private afs: AngularFirestore) {
  	this.exampleCollection =this.afs.collection<Example>('examples');
  	this.examples = this.exampleCollection.snapshotChanges().pipe(
  		map(actions =>{
  			return actions.map(
  				a=>{
  					const data= a.payload.doc.data();
  					const id = a.payload.doc.id;
  					return {id, ...data};
  				});
  			})
  		);

  	
   }
   getExamples(): Observable<Example[]>{
  		return this.examples;
  	}

  	getExample(id:string):Observable<Example>{
  		return this.exampleCollection.doc<Example>(id).valueChanges().pipe(
  			take(1),
  			map(example=>{
  				example.id = id;
  				return example;
  			})
  			)
  	}
    addExample(example:Example):Promise<DocumentReference>{
      return this.exampleCollection.add(example);
    }
    updateExample(example:Example):Promise<void>{
      return this.exampleCollection.doc(example.id).update(
        {
          nombre: example.nombre,
          codigo: example.codigo,
          categoria: example.categoria,
          descripcion: example.descripcion,
          pc: example.pc
        });
    }
    deleteExample(id:string):Promise<void>{
      return this.exampleCollection.doc(id).delete();
    }
    
    encodeImageUri(imageUri, callback) {
      var c = document.createElement('canvas');
      var ctx = c.getContext("2d");
      var img = new Image();
      img.onload = function () {
        var aux:any = this;
        c.width = aux.width;
        c.height = aux.height;
        ctx.drawImage(img, 0, 0);
        var dataURL = c.toDataURL("image/jpeg");
        callback(dataURL);
      };
      img.src = imageUri;
    };
    uploadImage(imageURI, randomId){
      return new Promise<any>((resolve, reject) => {
        let storageRef = firebase.storage().ref();
        let imageRef = storageRef.child('image').child(randomId);
        this.encodeImageUri(imageURI, function(image64){
          imageRef.putString(image64, 'data_url')
          .then(snapshot => {
            snapshot.ref.getDownloadURL()
            .then(res => resolve(res))
          }, err => {
            reject(err);
          })
        })
      })
    }
    createTask(value){
     return new Promise<any>((resolve, reject) => {
       let currentUser = firebase.auth().currentUser;
       this.afs.collection('people').doc(currentUser.uid).collection('tasks').add({
         title: value.title,
         description: value.description,
         image: value.image
       })
       .then(
         res => resolve(res),
         err => reject(err)
       )
     })
   }
   updateTask(taskKey, value){
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      this.afs.collection('people').doc(currentUser.uid)
      .collection('task').doc(taskKey).set(value)
      .then(
        res => resolve(res),
        err => reject(err)
      )
    })
  }

   deleteTask(taskKey){
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      this.afs.collection('people').doc(currentUser.uid)
      .collection('task').doc(taskKey).delete()
      .then(
        res => resolve(res),
        err => reject(err)
      )
    })
  }
}
