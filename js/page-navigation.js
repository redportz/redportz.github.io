const home = document.getElementById('home-page');
const about = document.getElementById('about-page');
const skill = document.getElementById('Skills-Page');
const contact= document.getElementById('Contact-page');

const btnContainer = document.getElementById("Desktop-buttons");
var btns = btnContainer.getElementsByClassName("desktop-button");

function homeSection() {
    document.body.className = 'home-bg';
    home.style.display = 'block';
    about.style.display = 'none';
    skill.style.display = 'none';
    contact.style.display = 'none';
}

function aboutSection() {
    document.body.className = 'about-bg';
    home.style.display = 'none';
    about.style.display = 'block';
    skill.style.display = 'none';
    contact.style.display = 'none';
}

function skillsSection() {
    document.body.className = 'skills-bg';
    home.style.display = 'none';
    about.style.display = 'none';
    skill.style.display = 'block';
    contact.style.display = 'none';
}

function contactSection() {
    document.body.className = 'contact-bg';
    home.style.display = 'none';
    about.style.display = 'none';
    skill.style.display = 'none';
    contact.style.display = 'block';
}


for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}