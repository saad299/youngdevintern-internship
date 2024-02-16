document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    var propertiesLink = document.querySelector('nav ul li:nth-child(3) a');
    var propertiesSection = document.querySelector('.scnd');

    propertiesLink.addEventListener('click', function(event) {
        event.preventDefault();

        propertiesSection.scrollIntoView({ behavior: 'smooth' });
    });
});


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var scrollTopBtn = document.getElementById("scrollTopBtn");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
}

document.getElementById("scrollTopBtn").addEventListener("click", function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});