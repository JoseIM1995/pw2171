const rq   = require('electron-require');
const main = rq.remote('./main.js');
const $    = require("jquery");
function datosRandom(){
	$.ajax({
	  url: 'https://randomuser.me/api/',
	  dataType: 'json',
	  success: function(data) {
	  	$("#txtGender").html(data.results[0].gender)
	    $("#txtNombre").html(data.results[0].name.first+" "+
	    					 data.results[0].name.last)
	    $("#txtTitle").html(data.results[0].name.title)
	    $("#imgFoto").attr("src",data.results[0].picture.large)
	    $("#txtStreet").html(data.results[0].location.street)
	    $("#txtCity").html(data.results[0].location.city)
	    $("#txtState").html(data.results[0].location.state)
	    $("#txtPostCode").html(data.results[0].location.postcode)
	    $("#txtEmail").html(data.results[0].email)
	    $("#txtUserName").html(data.results[0].login.username)
	    $("#txtPassword").html(data.results[0].login.password)
	  },
	  error(a,b,c){
	  	alert("Sin internet o sin servidor")
	  }
	});
}
$("#btnInfo").on("click",datosRandom)