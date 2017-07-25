# Bienvenidos al curso de Ionic con Firebase

#### Aquí está el proyecto terminado, el código se encuentra en la carpeta "App".

Primero que todo, gracias por ser parte del X Congreso de Computación Para el Desarrollo (COMPDES) 2017. Con objetivo de retroalimentación, les pido que llenen [esta encuesta](https://goo.gl/forms/uPAYYuI1Q4Pz9ELg2).

Antes de correr el aplicativo, asegúrense que todas las dependencias están correctamente instaladas ejecutando el siguiente comando:

```shell
$ cd ./app
$ npm install
```

Para probarlo, les sugiero que instalen Android Studio o Genymotion y corran los siguientes comandos:

```shell
$ cd ./app
$ ionic platform add android
$ ionic build android
$ ionic run android # Si usas Genymotion
$ ionic emulate android # Si usas Android Studio
```

Para generar el .apk deben correr los siguientes comandos:

```shell
$ cordova plugin rm cordova-plugin-console
$ cordova build --release android
```

Como alternativa para generar el .apk, ionic nos ofrece una aplicación llamada [Ionic View](http://view.ionic.io/?_ga=1.155478332.644755356.1482915484) que nos permite probar las aplicaciones, lo único que necesitan hacer es insertar al App ID del taller: __f632e80e__

##### Algunos sitios de interés:
* [Sitio oficial de Ionic](http://ionicframework.com/)
* [Documentación de AngularFire2](https://github.com/angular/angularfire2)
* [Documentación de Firebase](https://firebase.google.com/docs/)

> "Those who can imagine anything, can create the impossible".
--- Alan Turing