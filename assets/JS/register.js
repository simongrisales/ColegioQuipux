//registrar usuarios

var formulario = document.querySelector('.formulario');
const estudiantes = [];

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    var documentoUser = document.querySelector('.documento').value;
    var email = document.querySelector('.email').value;
    var contraseña = document.querySelector('.contraseña').value;
    var confirmarContra = document.querySelector('.confirmarContra').value;

    if(confirmarContra != contraseña){
        alert("Las contraseñas no coinciden");
        var p = document.createElement('p');
        
        document.querySelector('.contraseña').value = '';
        document.querySelector('.confirmarContra').value = '';
    }else{
        estudiante = {
            document: documentoUser,
            correo: email,
            password: contraseña
        }

        estudiantes.push(estudiante);
        alert('¡Bienvenido!, oficialmente te encuentras registrado en Quipux')
    }

});