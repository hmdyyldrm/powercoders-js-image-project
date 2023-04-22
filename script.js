// Create array of Person objects
const persons = [
    {
        name: "Susanne",
        status: "Trainer",
        color: "orange",
        glasses: true,
        gender: "female",
        picSrc: "",
    },
    {
        name: "Anastasiia",
        status: "Participant",
        color: "black",
        glasses: true,
        gender: "female",
        picSrc: "",
    },
    {
        name: "Merve",
        status: "Participant",
        color: "pink",
        glasses: true,
        gender: "female",
        picSrc: "",
    },
    {
        name: "Medhane",
        status: "Participant",
        color: "black",
        glasses: false,
        gender: "male",
        picSrc: "",
    },
    {
        name: "Sahin",
        status: "Participant",
        color: "gray",
        glasses: false,
        gender: "male",
        picSrc: "",
    },
    {
        name: "Melek",
        status: "Participant",
        color: "white",
        glasses: false,
        gender: "female",
        picSrc: "",
    },
    {
        name: "Kingsley",
        status: "Participant",
        color: "green",
        glasses: false,
        gender: "male",
        picSrc: "",
    },
    {
        name: "Huseyin",
        status: "Participant",
        color: "black",
        glasses: false,
        gender: "male",
        picSrc: "",
    },
    {
        name: "Harun",
        status: "Participant",
        color: "white",
        glasses: false,
        gender: "male",
        picSrc: "",
    },
    {
        name: "Mustafa",
        status: "Participant",
        color: "red",
        glasses: false,
        gender: "male",
        picSrc: "",
    },
    {
        name: "Mustafa",
        status: "Participant",
        color: "green",
        glasses: false,
        gender: "male",
        picSrc: "",
    },
    {
        name: "Latif",
        status: "Participant",
        color: "gray",
        glasses: false,
        gender: "male",
        picSrc: "",
    },
    {
        name: "Umit",
        status: "Participant",
        color: "black",
        glasses: false,
        gender: "male",
        picSrc: "",
    },
    {
        name: "Anna",
        status: "Participant",
        color: "black",
        glasses: true,
        gender: "female",
        picSrc: "",
    },
    {
        name: "Erdogan",
        status: "Participant",
        color: "blue",
        glasses: false,
        gender: "male",
        picSrc: "",
    },
    {
        name: "Caner",
        status: "Participant",
        color: "blue",
        glasses: false,
        gender: "male",
        picSrc: "",
    },
    {
        name: "Ivan",
        status: "Participant",
        color: "black",
        glasses: true,
        gender: "male",
        picSrc: "",
    },
    {
        name: "Tetiana",
        status: "Participant",
        color: "black",
        glasses: false,
        gender: "female",
        picSrc: "",
    },
    {
        name: "Yilmaz",
        status: "Participant",
        color: "black",
        glasses: false,
        gender: "male",
        picSrc: "",
    },
    {
        name: "Muhammet",
        status: "Participant",
        color: "white",
        glasses: false,
        gender: "male",
        picSrc: "",
    },
    {
        name: "Hamdi",
        status: "Participant",
        color: "black",
        glasses: true,
        gender: "male",
        picSrc: "",
    },
    {
        name: "Denys",
        status: "Participant",
        color: "white",
        glasses: false,
        gender: "male",
        picSrc: "",
    },
    {
        name: "Mustafa",
        status: "Alumni",
        color: "black",
        glasses: false,
        gender: "male",
        picSrc: "",
    },
    {
        name: "Omer",
        status: "Participant",
        color: "blue",
        glasses: false,
        gender: "male",
        picSrc: "",
    },
    {
        name: "Burak",
        status: "Participant",
        color: "blue",
        glasses: true,
        gender: "male",
        picSrc: "",
    },
    {
        name: "Ersel",
        status: "Participant",
        color: "green",
        glasses: false,
        gender: "male",
        picSrc: "",
    },
    {
        name: "Engin",
        status: "Participant",
        color: "blue",
        glasses: false,
        gender: "male",
        picSrc: "",
    },
    {
        name: "Simon",
        status: "Trainer",
        color: "gray",
        glasses: false,
        gender: "male",
        picSrc: "",
    },
    {
        name: "Oana",
        status: "Participant",
        color: "white",
        glasses: true,
        gender: "female",
        picSrc: "",
    },
    {
        name: "Nesrin",
        status: "Participant",
        color: "blue",
        glasses: true,
        gender: "female",
        picSrc: "",
    },
    {
        name: "Slava",
        status: "Participant",
        color: "gray",
        glasses: false,
        gender: "male",
        picSrc: "",
    },
    {
        name: "Sumeyra",
        status: "Participant",
        color: "blue",
        glasses: true,
        gender: "female",
        picSrc: "",
    }
];

//DOM
const div_main = document.getElementById("div-main");
const trainers = document.getElementById("trainers");
const participants = document.getElementById("participants");
const alumni = document.getElementById("alumni");
const men = document.getElementById("men");
const women = document.getElementById("women");


let carts = [];
let imgs = [];
let names = [];
let infos = [];

for (let i = 0; i < persons.length; i++) {
    gett(i);
}

function gett(i){
    //Assign src of pictures
    persons[i].picSrc = "img/class/" + (i + 1) + ".jpg";

    // Create img elements and Insert the pictures-infos inside of the div-main
   
    carts[i] = document.createElement("div");
    carts[i].className = "cart";
    imgs[i] = document.createElement("img");
    imgs[i].src = persons[i].picSrc;
    names[i] = document.createElement("h5");
    infos[i] = document.createElement("p");
    names[i].innerHTML = persons[i].name;
    carts[i].appendChild(imgs[i]);
    carts[i].appendChild(names[i]);
    div_main.appendChild(carts[i]);

    //onclick , onmouseleave
    carts[i].addEventListener("click", function () {
        infos[i].innerHTML =
            "__" + persons[i].status + "__<br><br>" +
            "Dress Color: " + persons[i].color + "<br>" +
            "Glasses: " + (persons[i].glasses ? "Yes" : "No");
        carts[i].style.filter = "grayscale(90%)";
        carts[i].appendChild(infos[i]);
    });
    carts[i].addEventListener("mouseleave", function () {
        infos[i].innerHTML = "";
        carts[i].style.filter = "grayscale(0)";
    });
}



