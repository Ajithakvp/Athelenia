
// Scroll Animation using IntersectionObserver
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target); // Remove after animating once
        }
    });
}, {
    threshold: 0.2
});

document.querySelectorAll('.card-animate').forEach(card => {
    observer.observe(card);
});

 


// footer 


document.addEventListener("DOMContentLoaded", function () {
    document.body.style.backgroundColor = "#000";
    document.body.style.color = "#fff";

    // Also make sure the container stays black
    const footerContainer = document.getElementById("footer-container");
    if (footerContainer) {
        footerContainer.style.backgroundColor = "#000";
        footerContainer.style.color = "#fff";
    }
    fetch('footer.html')
        .then(res => res.text())
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
        });
});