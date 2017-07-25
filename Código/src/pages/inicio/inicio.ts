import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController, ToastController } from 'ionic-angular';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { Modal } from '../modal/modal';
import { EditarModalPage } from '../editar-modal/editar-modal';

@IonicPage()
@Component({
	selector: 'page-inicio',
	templateUrl: 'inicio.html',
})
export class Inicio{
	notas: FirebaseListObservable<any>;

	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		private modalCtrl: ModalController,
		private alertCtrl: AlertController,
		private toastCtrl: ToastController,
		private database: AngularFireDatabase
	){
		this.notas = database.list('/notas');
	}

	agregarNota(){
		let modal = this.modalCtrl.create(Modal);
		modal.present();
	}

	borrarNota(nota){
		let confirm = this.alertCtrl.create({
			title: 'Eliminar nota',
			message: '¿Desea eliminar definitivamente esta nota?',
			buttons: [{
				text: 'Cancelar',
				handler: () => {
					console.log('Acción cancelada');
				}
			},{
				text: 'Ok',
				handler: () => {
					this.notas.remove(nota.$key).then(() => {
						this.mostrarToast('Nota eliminada correctamente');
					}).catch((error) => {
						console.error('Algo salió mal', error);
					});
				}
			}]
		});
		confirm.present();
	}

	editarNota(nota){
		let modal = this.modalCtrl.create(EditarModalPage, {nota:nota});
		modal.present();
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
	console.log('ionViewDidLoad Inicio');
	}
}