$(document).ready(function(){
    $('#box-form').submit(function(){
        var txt_user = $('#txt-user').val();
        var txt_password = $('#txt-password').val();
        var sessIn = true;

        //almacenar los valores dentro de localstorage
        localStorage.setItem('usuario',txt_user);
        localStorage.setItem('password',txt_password);
        localStorage.setItem('session', sessIn);
    });

    var txt_user = localStorage.getItem('usuario');
    var txt_password =localStorage.getItem('password');

    if(txt_user != null && txt_user != 'undefined'){
        //llamamos al documento sesion.html
        window.location = 'sesionIniciada.html';
    }
});

//Cerrar sesion 
$('#cerrar-sesion').click(function(){
    localStorage.clear();
    sessionStorage.clear();
    window.location = "Login.html";
});