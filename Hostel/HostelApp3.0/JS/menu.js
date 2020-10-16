
//Pegando o elemento pai
let header = document.getElementsByTagName("header");


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
customers.href = "guests.html";

let roomsParagraph = document.createElement('p');
let rooms = document.createElement('a');
rooms.href = "guests.html";

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

header[0].appendChild(navbar);


//Criando o footer

let footer = document.getElementsByTagName("footer");

//Criando a div da footbar

let footbar = document.createElement('div');
footbar.className = "footer";

//Criando os elementos
let firstParagraph = document.createElement('p');
let secondParagraph = document.createElement('p');
let firstDot = document.createElement('p');
let secondDot = document.createElement('p');
let abbr1 = document.createElement('abbr');
let sup = document.createElement('sup');

let git = document.createElement('p');
let link = document.createElement('a');
link.href = "https://github.com/night-jpg/HostelApp.git";


abbr1.title = "Minas Gerais";

// Criar o texto
let firstText = document.createTextNode("Sparkling Water Hostel");
let secondText = document.createTextNode("Sparkling Water Main st. 1000. Caxambu-");
let firstDotText = document.createTextNode("•");
let secondDotText = document.createTextNode("•");
let abbr1Text = document.createTextNode("MG");
let supText = document.createTextNode("©2020");
let linkText = document.createTextNode("Git Repository")

// Anexar o nó de texto ao elemento respectivo
firstParagraph.appendChild(firstText);
secondParagraph.appendChild(secondText);
firstDot.appendChild(firstDotText);
secondDot.appendChild(secondDotText);
abbr1.appendChild(abbr1Text);
sup.appendChild(supText);
link.appendChild(linkText);
git.appendChild(link);

//Adicionando os abbrs e textos sobre escritos aos parágrafos
firstParagraph.appendChild(sup);
secondParagraph.appendChild(abbr1);


//Duplicando os dots


//Anexando as divs a footbar

footbar.appendChild(firstParagraph);
footbar.appendChild(firstDot);
footbar.appendChild(secondParagraph);
footbar.appendChild(secondDot);
footbar.appendChild(git);

footer[0].appendChild(footbar);

