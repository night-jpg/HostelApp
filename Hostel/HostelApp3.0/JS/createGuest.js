let button = document.querySelector('.button');

button.addEventListener('click', function() {
    let fName = document.querySelector('#fName');
    let lName = document.querySelector("#lName");
    let email = document.querySelector("#email");
    let phone = document.querySelector("#phone");
    let address = document.querySelector('#address');
    let country = document.querySelector("#country");
    let state = document.querySelector("#state");

    let id = localStorage.getItem('ultimoID');

    let guest = {
        id: (parseInt(id) + 1),
        firstName: fName.value,
        lastName: lName.value,
        emailAddress: email.value,
        phoneNumber: phone.value,
        address: address.value,
        country: country.value,
        state: state.value
    }
   
    localStorage.setItem('ultimoID', parseInt(id) + 1);
    localStorage.setItem(parseInt(id) + 1, JSON.stringify(guest));
});
