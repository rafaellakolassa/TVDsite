var formPer = document.getElementById("formPersona");
formPer.addEventListener("submit", validar);

function validar(e) {
    if ((validanome() == false) || (validaidade() == false) || (validalocal() == false) || (validafamilia() == false)
    || (validafamily() == false) || (validatipo() == false) || (validamotivos() == false) || (validaaparencia() == false)
    || (validaemail() == false)) {
        e.preventDefault();
    }
}

function validanome() {
    var nome = document.getElementById('nomePersona');
    var helpIdnome = document.getElementById('helpIdNome');
    if (nome.value.length < 5) {
        alert("Informe um nome!");
        nome.classList.add('erro');
        nome.classList.remove('correto');
        return false;
    } else {
        helpIdnome.innerHTML = "";
        nome.classList.remove('erro');
        nome.classList.add('correto');
        return true;
    }
}

function validaidade() {
    var idade = document.getElementById('idadePersona');
    var data = new Date(idade);
    var helpIdidade = document.getElementById('helpIdIdade');
    
    if (isNaN(data)){
        alert('Preencha a data!');
        return false;
    } else {
        helpIdidade.innerHTML("");
        return true;
    }
}

function validalocal() {
    var local = document.getElementById('localPersona');
    if (local.value == '') {
        local.classList.add('erro');
        alert ('Preencha o campo com a data do seu aniversário');
        return false;
    } else {
        local.classList.remove('erro');
        return true;
    }
}

function validafamilia() {
    var familia = document.getElementById('familiaPersona');
    if (familia.value == '') {
        familia.classList.add('erro');
        return false;
    } else {
        familia.classList.remove('erro');
        return true;
    }
}

function validafamily() {
    var family = document.getElementById('familyPersona');
    if (family.value == '') {
        family.classList.add('erro');
        return false;
    } else {
        family.classList.remove('erro');
        return true;
    }
}

function validatipo() {
    var tipoPersona = document.getElementsByName("tipoPersona");
    var helpIdTipoPersonagem = document.getElementById('helpIdTipoPersonagem');
    for (var i = 0; i < tipoPersona.length; i++) {
        if (tipoPersona[i].checked) {
            helpIdTipoPersonagem.innerHTML = "";
            return true;
        }
    }
    helpIdTipoPersonagem.innerHTML = "Selecione uma opção.";
    return false;
}

function validamotivos() {
    var motivos = document.getElementById('motivosPersona');
    if (motivos.value == '') {
        motivos.classList.add('erro');
        return false;
    } else {
        motivos.classList.remove('erro');
        return true;
    }
}

function validaaparencia() {
    var aparencia = document.getElementById('aparenciaPersona');
    if (aparencia.value == '') {
        aparencia.classList.add('erro');
        return false;
    } else {
        aparencia.classList.remove('erro');
        return true;
    }
}

function validaemail() {
    var email = document.getElementById('email');
    if (email.indexOf("@") == -1) {
        document.write("Email inválido" + "<br>");
    } else {
        document.write(email.substring(0, email.indexOf("@")) + "<br>");
        document.write(email.substring(email.lastIndexOf("@")+1, email.length) + "<br>");
    }
}
