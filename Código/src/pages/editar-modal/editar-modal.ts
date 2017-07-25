import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ViewController } from 'ionic-angular';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-editar-modal',
  templateUrl: 'editar-modal.html',
})
export class EditarModalPage {
	notas: FirebaseListObservable<any>;
	nota = {};

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
  	private toastCtrl: ToastController,
  	private viewCtrl: ViewController,
  	private database: AngularFireDatabase
  ){
  	this.notas = database.list('/notas');
  	this.nota = navParams.get('nota');
  }

  editarNota(key){
  	this.notas.update(key, this.nota).then(()=>{
  		this.mostrarToast('Nota actualizada exitosamente');
  		this.dismiss();
  	}).catch((error) => {
  		console.error('Algo salió mal', error)
  	});
  }

  dismiss(){
  	this.viewCtrl.dismiss();
  }

  mostrarToast(mensaje){
    let toast = this.toastCtrl.create({
      message: mensaje,
      duration: 4000,
      position: 'top'
    });
    toast.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditarModalPage');
  }

}
