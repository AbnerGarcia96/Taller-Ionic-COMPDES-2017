import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class Modal{
  nota = {};
  notas: FirebaseListObservable<any>;

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
  	public viewCtrl: ViewController,
    private toastCtrl: ToastController,
    private database: AngularFireDatabase
  ){
    this.notas = database.list('/notas');
  }

  agregarNota(){
    this.notas.push(this.nota).then((response) => {
      this.mostrarToast('Nota agregada correctamente');
      this.dismiss();
    }).catch((error) => {
      console.log(error);
    });
  }

  mostrarToast(mensaje){
    let toast = this.toastCtrl.create({
      message: mensaje,
      duration: 4000,
      position: 'top'
    });
    toast.present();
  }

  dismiss(){
  	this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Modal');
  }

}
