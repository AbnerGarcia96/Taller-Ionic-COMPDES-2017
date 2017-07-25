import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Vibration } from '@ionic-native/vibration';

@IonicPage()
@Component({
	selector: 'page-native',
	templateUrl: 'native.html',
})

export class NativePage {
	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		private platform: Platform,
		private camera: Camera,
		private vibration: Vibration
	){}

	tomarFoto(){
		const options: CameraOptions = {
			quality: 100,
			destinationType: this.camera.DestinationType.DATA_URL,
			encodingType: this.camera.EncodingType.JPEG,
			mediaType: this.camera.MediaType.PICTURE
		}

		this.camera.getPicture(options).then((imageData) => {
		// imageData is either a base64 encoded string or a file URI
		// If it's base64:
		let base64Image = 'data:image/jpeg;base64,' + imageData;
		}, (err) => {
		// Handle error
		});
	}

	vibrar(){
		this.vibration.vibrate(1000);
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad NativePage');
	}

}
