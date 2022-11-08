// create reviews data as an arrays
const reviews = [
    {
        id: 1,
        name: "Gibson uwhetu",
        job: "Software Engineer",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0m.jpg",
        text: " I'm Gibson uwhetu uwhetu a Junior Software developer with over three years of experience",
    },
// array ID 2
    {
        id: 2,
        name: "Opara Eze Tochi",
        job: "Data Analyst",
        img: "",
        text: " I'm Gibson uwhetu uwhetu a Junior Software developer with over three years of experience",
    },
    // Array ID 3
    {
        id: 3,
        name: "Akpanah Belema",
        job: "Project Manager",
        img: "",
        text: " I'm Gibson uwhetu uwhetu a Junior Software developer with over three years of experience",
    },
    // Array ID 4
    {
        id: 4,
        name: "Ameka Gibson",
        job: "Product Photographer",
        img: "",
        text: " I'm Gibson uwhetu uwhetu a Junior Software developer with over three years of experience",
    }
]

// Select items by ID
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");


// set starting item

let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function() {
    showPerson();
});

// ShowPerson based on item

function showPerson(){
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// show next person

nextBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson();
});

// show Previous person

prevBtn.addEventListener('click', function (){
    currentItem--;
    if(currentItem < 0 ) {
        currentItem = reviews.length - 1;
    }
    showPerson();
});

// random button configuartion(show random person)

randomBtn.addEventListener('click', function(){
  currentItem = Math.floor(Math.random() * reviews.length)
  console.log showPerson(): void 
  showPerson(); 
});

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark");
    }


