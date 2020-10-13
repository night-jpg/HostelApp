function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("guest");

    pacienteTr.appendChild(montaTd(paciente.firstName, "info-fName"));
    pacienteTr.appendChild(montaTd(paciente.lastName, "info-lName"));
    pacienteTr.appendChild(montaTd(paciente.emailAddress, "info-email"));
    pacienteTr.appendChild(montaTd(paciente.phoneNumber, "info-phone"));
    pacienteTr.appendChild(montaTd(paciente.address, "info-address"));
    pacienteTr.appendChild(montaTd(paciente.country, "info-country"));
    pacienteTr.appendChild(montaTd(paciente.state, "info-state"));
    
    return pacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function adicionaGuestNaTabela(guest) {
    var guestTr = montaTr(guest);
    var tabela = document.querySelector("#corpo-tabela");
    tabela.appendChild(guestTr);
}

var xhr = new XMLHttpRequest();

xhr.open("GET", "https://hostel-app-back-end-api.herokuapp.com/customers");

xhr.addEventListener("load", function() {
    var resposta = xhr.responseText;
    var guests = JSON.parse(resposta);

    guests.forEach(function(guest) {
      adicionaGuestNaTabela(guest);
    });
});

xhr.send();

if(localStorage != null) {
    Object.keys(localStorage).forEach(function(key){
        adicionaGuestNaTabela(JSON.parse(localStorage.getItem(key)));
    }); 
}
