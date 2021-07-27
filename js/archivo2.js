function validar(){
           
    var form = document.form;
    if(form.loginrut.value<=0){
        alert("campo usuario incompleto");
        form.loginrut.value="";
        form.loginrut.focus();
        return false;
    }
    if(form.logincontra.value<=0){
        alert("campo contraseña incompleto");
        form.logincontra.value="";
        form.logincontra.focus();
        return false;
    }
    if(form.logincontra.value>20){
          alert("has superdado la longito de contraseña solo hata 20")
          

    } else {
        alert("datos erroneos")
    }
}