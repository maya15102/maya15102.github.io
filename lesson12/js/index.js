//Hamburger Menu

const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

document.getElementById("thisyear").innerHTML = new Date().getFullYear();

// Current Date
const datefield = document.querySelector(".date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
datefield.textContent = fulldate;





// Lazy Loading Images
const imagesToLoad = document.querySelectorAll('img[data-src]');

// optional parameters being set for the IntersectionalObserver
const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 50px 0px"
};

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    };
};

// first check to see if Intersection Observer is supported
if ('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                imgObserver.unobserve(item.target);
            }
        });
    });

    // Loop through each img an check status and load if necessary
    imagesToLoad.forEach((img) => {
        imgObserver.observe(img);
    });
} else { // just load ALL images if not supported
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}

// Local Storage
let lv;

if (!localStorage.getItem('last1')) {
  localStorage.setItem('last1', now.getTime());
  document.querySelector('.visits').innerHTML = "Welcome to our Site!"
} else {
  let ms = now.getTime() - localStorage.getItem('last1');
  let oDay = 1000 * 60 * 60 * 24;
  lv = Math.round(ms/oDay);
}

document.getElementById("day").innerHTML = lv;


