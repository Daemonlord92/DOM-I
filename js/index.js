const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let nav = document.querySelectorAll("nav a");
console.log(nav);
nav.forEach((el, index) => {
  return el.textContent = siteContent.nav[`nav-item-${index + 1}`];
});

const mjm = document.createElement("a");
const mjmText = document.createTextNode("3JM");
mjm.prepend(mjmText);
mjm.style.color = "slate";
document.querySelector("nav").prepend(mjm);

const coding = document.createElement("a");
const codingText = document.createTextNode("Coding");
coding.prepend(codingText);
coding.style.color = "slate";
document.querySelector("nav").appendChild(coding);

const ctaH1 = document.querySelector(".cta-text h1");
siteContent.cta.h1 = siteContent.cta.h1
ctaH1.textContent = siteContent.cta.h1;
ctaH1.style.width = '20%';
const ctaButton = document.querySelector(".cta-text button");
ctaButton.textContent = siteContent.cta.button;
const ctaImg = document.getElementById('cta-img');
ctaImg.src = siteContent.cta["img-src"];

const topContentHeaders = document.querySelectorAll(".top-content h4");
topContentHeaders[0].textContent = siteContent["main-content"]["features-h4"];
topContentHeaders[1].textContent = siteContent["main-content"]["about-h4"];
const topContentText = document.querySelectorAll(".top-content p");
topContentText[0].textContent = siteContent["main-content"]["features-content"];
topContentText[1].textContent = siteContent["main-content"]["about-content"];

document.getElementById("middle-img").src = siteContent["main-content"]["middle-img-src"];

const bottomContentHeaders = document.querySelectorAll(".bottom-content h4");
bottomContentHeaders[0].textContent = siteContent["main-content"]["services-h4"];
bottomContentHeaders[1].textContent = siteContent["main-content"]["product-h4"];
bottomContentHeaders[2].textContent = siteContent["main-content"]["vision-h4"];
const bottomContentText = document.querySelectorAll(".bottom-content p");
bottomContentText[0].textContent = siteContent["main-content"]["services-content"];
bottomContentText[1].textContent = siteContent["main-content"]["about-content"];
bottomContentText[2].textContent = siteContent["main-content"]["vision-content"];

const contactHeader = document.querySelector(".contact h4");
contactHeader.textContent = siteContent.contact["contact-h4"];
const contactInfo = document.querySelectorAll(".contact p");
contactInfo[0].textContent = siteContent.contact.address;
contactInfo[1].textContent = siteContent.contact.phone;
contactInfo[2].textContent = siteContent.contact.email;

document.querySelector("footer p").textContent = siteContent.footer.copyright;