//Pegando o elemento pai
let x = document.getElementsByTagName("header");


let navbar = document.createElement('div');
navbar.className = "navbar";


// Dividindo em 2 divs
let right = document.createElement('div');
let left = document.createElement('div');
right.className = "right";
left.className = "left";


//Ajeitando estilo


//Criando os elementos da div esquerda
let homeParagraph = document.createElement('p');
let home = document.createElement('a');
home.href = "index.html";

let customersParagraph = document.createElement('p');
let customers = document.createElement('a');
customers.href = "guest.html";

let roomsParagraph = document.createElement('p');
let rooms = document.createElement('a');
rooms.href = "guest.html";

let reservationsParagraph = document.createElement('p');
let reservations = document.createElement('a');
reservations.href = "createGuest.html";

let contactParagraph = document.createElement('p');
let contact = document.createElement('a');
contact.href = "mailto:someone@example.com?Subject=Sparkling Water Hostel";
contact.target = "_top";

//Criando os elementos da div direita
let signInParagraph = document.createElement('p');
let signIn = document.createElement('a');
signIn.href = "authentication.html";

let signUpParagraph = document.createElement('p');
let signUp = document.createElement('a');
signUp.href = "authentication.html";

// Criar o texto dos elementos da div esquerda
let homeText = document.createTextNode("Home");
let customersText = document.createTextNode("Customers");
let roomsText = document.createTextNode("Rooms");
let reservationsText = document.createTextNode("Reservations");
let contactText = document.createTextNode("Contact");

//Criar o texto dos elementos da div direita
let signInText = document.createTextNode("Sign In");
let signUpText = document.createTextNode("Sign Up");

// Anexar o nó de texto ao elemento respectivo
home.appendChild(homeText);
customers.appendChild(customersText);
rooms.appendChild(roomsText);
reservations.appendChild(reservationsText);
contact.appendChild(contactText);
signIn.appendChild(signInText)
signUp.appendChild(signUpText)


// Anexando os elementos aos parágrafos
homeParagraph.appendChild(home);
customersParagraph.appendChild(customers);
roomsParagraph.appendChild(rooms);
reservationsParagraph.appendChild(reservations);
contactParagraph.appendChild(contact);

signInParagraph.appendChild(signIn);
signUpParagraph.appendChild(signUp);

//Adicionando os parágrafos as divs

left.appendChild(homeParagraph);
left.appendChild(customersParagraph);
left.appendChild(roomsParagraph);
left.appendChild(reservationsParagraph);
left.appendChild(contactParagraph);

right.appendChild(signInParagraph);
right.appendChild(signUpParagraph);




//Anexando as divs a navbar
navbar.appendChild(left);
navbar.appendChild(right);

x[0].appendChild(navbar);

