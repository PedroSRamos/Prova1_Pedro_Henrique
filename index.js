
function fvalidar() {
    var retorno=true;

    document.getElementById("message3").style.visibility="hidden";
    document.getElementById("message3").style.position="absolute"; 

    if(document.frm1._matricula.value=="") {
        document.getElementById("message1").style.visibility="visible";
        document.getElementById("message1").style.position="relative";
        retorno=false;
        document.frm1._matricula.focus();
    }
    else if(document.frm1._matricula.value!="123456"){
        document.getElementById("message1").style.visibility="hidden";
        document.getElementById("message1").style.position="absolute"; 

        document.getElementById("message3").style.visibility="visible";
        document.getElementById("message3").style.position="relative";
        retorno=false;
        document.frm1._matricula.focus();
    }
    else {
        document.getElementById("message1").style.visibility="hidden";
        document.getElementById("message1").style.position="absolute"; 
    }

    if(document.frm1._senha.value=="") {
        document.getElementById("message2").style.visibility="visible";
        document.getElementById("message2").style.position="relative";
        retorno=false;
        document.frm1._senha.focus();
    }
    else if(document.frm1._senha.value!="123456"){
        document.getElementById("message2").style.visibility="hidden";
        document.getElementById("message2").style.position="absolute"; 

        document.getElementById("message3").style.visibility="visible";
        document.getElementById("message3").style.position="relative";
        retorno=false;
        document.frm1._matricula.focus();
    }
    else {
        document.getElementById("message2").style.visibility="hidden";
        document.getElementById("message2").style.position="absolute"; 
    }

    if (retorno==true) {
        document.getElementById("message3").style.visibility="hidden";
        document.getElementById("message3").style.position="absolute"; 
        alert("Seja Bem-Vindo!");
    }


    return(retorno);
    
}

