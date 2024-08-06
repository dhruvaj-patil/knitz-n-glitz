function toggleOpenButton(ele) {
  if (ele.classList.contains("open")) {
    document.querySelectorAll(".answer-icon").forEach((obj) => {
      obj.classList.remove("close");
      obj.classList.add("open");
    });
    ele.classList.remove("open");
    ele.classList.add("close");
  } else {
    ele.classList.add("open");
    ele.classList.remove("close");
  }
}

function toggleNavbarSelection(ele) {
    let selectedNavs = document.querySelectorAll(".navbar-selected");
    console.log("🚀 ~ toggleNavbarSelection ~ selectedNavs:", selectedNavs)
    let toggleMobileMenu = document.querySelector('button[data-bs-target="#navbarNavMobile"]');

    selectedNavs.forEach((obj) => {
        if (obj !== ele) {
            obj.classList.remove('navbar-selected')
        }
    })
    ele.classList.add('navbar-selected')
    toggleMobileMenu.click();
  }

function menuIconSwitch(ele) {
  console.log(ele);
  let dropDownImages = ele.querySelectorAll(".menu-dropdown");
//   console.log("🚀 ~ testFn ~ dropDownImages:", dropDownImages)
  dropDownImages.forEach((ele) => {
    if (ele.className.includes("close")) {
      ele.classList.remove("close");
      ele.classList.add("open");
    } else {
        ele.classList.remove("open");
        ele.classList.add("close");
    }
  });
}

function scrollToTop(ele) {
    window.scrollTo(0, 0);
}

const landingPageCarousel = document.querySelector('#landingPage')
console.log("🚀 ~ landingPageCarousel:", landingPageCarousel)

const carousel = new bootstrap.Carousel(landingPageCarousel, {
  interval: 2500,
  touch: true,
  ride: 'carousel',
  wrap: true
})


$(document).ready(function () {
  var marquee_width = $(".marquee-content-primary").width();
  document.documentElement.style.setProperty(
    "--marquee-padding",
    marquee_width + "px"
  );
});


function takeMeTo(page) {
  let url = "";
  switch (page) {
    case 'enroll-designer':
      url = "https://formbuilder.ccavenue.com/live/ccavenue/knitz-n-glitz/designer";  
      break;
    case 'enroll-model':
      url = "https://formbuilder.ccavenue.com/live/ccavenue/knitz-n-glitz/model";  
      break;
    case 'register-now':
      url = "http://ccavenue.com/";  
      break;
    case 'terms-conditions':
      url = "window.location.href";  
      break;
    case 'facebook':
      url = "https://www.facebook.com/profile.php?id=61562886606851";  
      break;
    case 'instagram':
      url = "https://www.instagram.com/knitznglitz2024/";  
      break;
    case 'twitter':
      url = "https://x.com/knitznglit65177";  
      break;
    case 'youtube':
      url = "https://www.youtube.com/@Knitznglitz2024";  
      break;
  }
  window.open(url, "_blank");
}


// const featureCarousel = document.querySelector('#landingPage')
// console.log("🚀 ~ featureCarousel:", featureCarousel)

// const carouselv2 = new bootstrap.Carousel(featureCarousel, {
//   interval: 5000,
//   touch: true,
//   ride: 'carousel',
//   wrap: true
// })

// const featureCarousel = document.querySelector('#feature')
// console.log("🚀 ~ landingPageCarousel:", landingPageCarousel)

// const carousel = new bootstrap.Carousel(landingPageCarousel, {
//   interval: 5000,
//   touch: true,
//   ride: 'carousel',
//   wrap: true
// })
