function homeSection() {
    document.body.className = 'home-bg';
    document.getElementById('home-page').style.display = 'block';
    document.getElementById('about-page').style.display = 'none';
    document.getElementById('Skills-Page').style.display = 'none';
    document.getElementById('Contact-page').style.display = 'none';
}

function aboutSection() {
    document.body.className = 'about-bg';
    document.getElementById('home-page').style.display = 'none';
    document.getElementById('about-page').style.display = 'block';
    document.getElementById('Skills-Page').style.display = 'none';
    document.getElementById('Contact-page').style.display = 'none';
}

function skillsSection() {
    document.body.className = 'skills-bg';
    document.getElementById('home-page').style.display = 'none';
    document.getElementById('about-page').style.display = 'none';
    document.getElementById('Skills-Page').style.display = 'block';
    document.getElementById('Contact-page').style.display = 'none';
}

function contactSection() {
    document.body.className = 'contact-bg';
    document.getElementById('home-page').style.display = 'none';
    document.getElementById('about-page').style.display = 'none';
    document.getElementById('Skills-Page').style.display = 'none';
    document.getElementById('Contact-page').style.display = 'block';
}
