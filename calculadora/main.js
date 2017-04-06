//const app = require('electron').app
//const BrowserWindow = require('electron').BrowserWindow
const {app,BrowserWindow} = require('electron')
//ruta donde se encuentra nuestro proyecto
const path = require('path')
//Ruta pero en formato URL
const url = require('url')
let PantallaPrincipal;

function muestraPantallaPrincipal(){
	PantallaPrincipal = new BrowserWindow({
		width:1024,
		height:768
	})
	PantallaPrincipal.on('closed',function(){
		PantallaPrincipal = null
	})
	PantallaPrincipal.loadURL('http://platzi.com')
	PantallaPrincipal.show()
}

//La aplicación ejecuta este evento cuando 
//el archivo main.js se carga en memoria
app.on('ready',muestraPantallaPrincipal)