
const email = "your_email@example.com";
const emailParagraph = document.getElementById("email");

emailParagraph.addEventListener('click', function() {
    alert("Email clicked! Send an email to: " + email)
});

function scrollToAbout() {
    document.querySelector('#About').scrollIntoView({ behavior: 'smooth' });
}

function scrollToSkills() {
    document.querySelector('#skills').scrollIntoView({ behavior: 'smooth' });
}

function scrollToProjects() {
    document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
}

function scrollToResume() {
    document.querySelector('#Resume').scrollIntoView({ behavior: 'smooth' });
}

function scrollToContact() {
    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
}


