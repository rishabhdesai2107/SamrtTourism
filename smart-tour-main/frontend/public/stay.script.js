// Function to add a class when elements are in the viewport
document.getElementById("lodges-button").addEventListener("click", function () {
    window.location.href = "lodges.html"; // Replace with the actual URL of your "Lodges" page.
});

document.getElementById("paying-guest-button").addEventListener("click", function () {
    window.location.href = "paying-guest.html"; // Replace with the actual URL of your "Paying Guest" page.
});

window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".fixed-navbar");
    
    if (window.scrollY > 100) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


function addInViewportClass() {
    const elements = document.querySelectorAll('.large-division');

    elements.forEach((element) => {
        if (isInViewport(element)) {
            element.classList.add('in-viewport');
        } else {
            element.classList.remove('in-viewport');
        }
    });
}

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.right > 0 &&
        rect.left < window.innerWidth &&
        rect.bottom > 0 &&
        rect.top < window.innerHeight
    );
}

document.addEventListener("DOMContentLoaded", function () {
    const descriptions = document.querySelectorAll(".description-content");

    descriptions.forEach((description) => {
        if (description.scrollHeight > description.clientHeight) {
            description.classList.add("scrollable");
        }
    });
});




// Slide elements when they come into view
function slideInOnScroll() {
    const elements = document.querySelectorAll('.large-division');

    elements.forEach((element) => {
        const image = element.querySelector('.image');
        const description = element.querySelector('.description');

        if (element.classList.contains('in-viewport')) {
            // Add classes for animation
            image.classList.add('slide-from-left');
            description.classList.add('fade-in');
        } else {
            // If the element is not in the viewport, remove animation classes
            image.classList.remove('slide-from-left');
            description.classList.remove('fade-in');
        }
    });
}



// Add scroll event listeners to trigger the class when scrolling
window.addEventListener('scroll', addInViewportClass);
window.addEventListener('scroll', slideInOnScroll);

// Call the addInViewportClass and slideInOnScroll functions on initial page load
addInViewportClass();
slideInOnScroll();



