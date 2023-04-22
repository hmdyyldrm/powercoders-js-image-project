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

const div_main = document.querySelector("#div-main");
const all = document.querySelector("#all");
const trainers = document.querySelector("#trainers");
const participants = document.querySelector("#participants");
const alumni = document.querySelector("#alumni");
const men = document.querySelector("#men");
const women = document.querySelector("#women");

//img srcs 
persons.forEach(function (person, index) {
    person.picSrc = "img/class/" + (index + 1) + ".jpg";
});

persons.forEach(function (person) {
    updatePage(person)
});

function updatePage(person) {

    const card = document.createElement("div");
    card.setAttribute("class", "cart");
    const img = document.createElement("img");
    img.setAttribute("src", person.picSrc);
    const name = document.createElement("h5");
    const infos = document.createElement("p");
    infos.style.whiteSpace = "pre";
    name.textContent = person.name;

    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(infos);
    div_main.appendChild(card);

    //on click card
    card.addEventListener("click", function () {
        if (infos.textContent === "") {
            infos.textContent =
                person.status + "\r\n" +
                "Dress Color: " + person.color + "\r\n" +
                "Glasses: " + (persons.glasses ? "Yes" : "No");
            card.style.filter = "grayscale(90%)";
            card.appendChild(infos);

        } else {
            infos.textContent = "";
            card.style.filter = "grayscale(0)";
            clicked = false;
        }
    });
}


//on click navbar
all.addEventListener("click", function () {
    div_main.textContent = "";
    persons.forEach(function (person) {
        updatePage(person);
    })
});
trainers.addEventListener("click", function () {
    div_main.textContent = "";
    persons.forEach(function (person) {
        if (person.status === "Trainer") {
            updatePage(person);
        }
    })
});
participants.addEventListener("click", function () {
    div_main.textContent = "";
    persons.forEach(function (person) {
        if (person.status === "Participant") {
            updatePage(person);
        }
    })
});
alumni.addEventListener("click", function () {
    div_main.textContent = "";
    persons.forEach(function (person) {
        if (person.status === "Alumni") {
            updatePage(person);
        }
    })
});
men.addEventListener("click", function () {
    div_main.textContent = "";
    persons.forEach(function (person) {
        if (person.gender === "male") {
            updatePage(person);
        }
    })
});
women.addEventListener("click", function () {
    div_main.textContent = "";
    persons.forEach(function (person) {
        if (person.gender === "female") {
            updatePage(person);
        }
    })
});






