import { doc, getDoc, db,setDoc} from "ScriptsDB.js";
const Swal = require('sweetalert2')//variables 



let input_correo = document.getElementById('Email');
let input_password = document.getElementById('password');
let input_username = document.getElementById('usuario');
let input_nombre = document.getElementById('nombre');


//Eventos
$("#submit").click(function() {
	login();
});

$("#sigin").click(function() {
	validarNuevo();
});

//funciones
$(function() {
	'use strict';
	
  $('.form-control').on('input', function() {
	  var $field = $(this).closest('.form-group');
	  if (this.value) {
	    $field.addClass('field--not-empty');
	  } else {
	    $field.removeClass('field--not-empty');
	  }
	});

});

async function login(){
	const correo = input_correo.value;
    const password = input_password.value;
    var ref = doc(db, "Users", correo);
    const docSnap = await getDoc(ref);
	if (docSnap.exists() == false){
	Swal.fire('Error!','Usuario no encontrado','error');
	}else{
	if(docSnap.data().password == password){
		sessionStorage.setItem("usuario", docSnap.data().correo);
		location.replace('../../vista/index.html');
	}else{
		Swal.fire("Error","Contraseña incorrecta","error");
	}
	}
}

async function validarNuevo(){
	var ref = doc(db, "Users", input_correo.value);
	const docSnap = await getDoc(ref);
	if (docSnap.exists()){
		Swal.fire("Atención","Ya esxiste una cuenta asociada a éste correo","error");
	} else {
		Registro();
	}
}

async function Registro(){ // email
	const correo = input_correo.value;
	if ( /^([a-zA-Z0-9_\.\-])+\@unimagdalena.edu.co+$/.test(correo) ){ //valida si es correo institucional

	
		var ref = doc(db, "Users", correo);
		const docRef = setDoc(
			ref, {
				correo: String(input_correo.value),
				nombre: String(input_nombre.value),
				username: String(input_username.value),
				password: String(input_password.value)
			}
		)
		.then(()=>{
			Swal.fire("Atención","Usuario creado","Ok");
			sessionStorage.setItem("usuario", correo);
			window.location.replace('../../vista/index.html')
		})
		.catch((error)=>{
			new Swal('Error!', "al crear el usuario", 'error');
			console.log(error)
		});
		Swal.fire({
			position: 'top-end',
			icon: 'Exitoso',
			title: 'Tu usuario se ha creado exitosamente',
			showConfirmButton: false,
			timer: 1500
		  });
	}else{//sino
		Swal.fire({
			icon: 'error',
			title: 'No Valido',
			text: 'Uso el correo institucional',
		  });
	}
}