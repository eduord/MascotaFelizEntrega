function MostrarMensajeGeneral(mensaje){
    document.querySelector("#txtMensajeGeneral").innerHTML = mensaje;
    var elem = document.querySelector('#mensajegeneral');
    var instance = M.Modal.getInstance(elem);
    instance.open();
}