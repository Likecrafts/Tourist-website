let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');

window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    //menu.classList.toggle('fa-times');
   //  navbar.classList.toggle('active');
    
};

menu.addEventListener('click', ()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

searchBtn.addEventListener('click', ()=>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});
formBtn.addEventListener('click', ()=>{
   loginForm.classList.add('active');
});

formClose.addEventListener('click', ()=>{
    loginForm.classList.remove('active');
 });

videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src= btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
 });

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },   

});

var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },  

});

// Load More Destinations
let loadMoreDestinationsBtn = document.querySelector('.destinations .load-more .btn.load-more');
let seeLessDestinationsBtn = document.querySelector('.destinations .load-more .btn.see-less');
let currentItemDestinations = 3;

// Initially hide all destination boxes except the first 'currentItemDestinations'
let destinationBoxes = [...document.querySelectorAll('.destinations .box-container .box')];
destinationBoxes.forEach((box, index) => {
    if (index >= currentItemDestinations) {
        box.style.display = 'none'; // Hide initially
    }
});

// Load more functionality
loadMoreDestinationsBtn.onclick = () => {
    for (let i = currentItemDestinations; i < currentItemDestinations + 3; i++) {
        if (destinationBoxes[i]) { // Check if the box exists
            destinationBoxes[i].style.display = 'inline-block'; // Show the box
        }
    }

    currentItemDestinations += 3;
    if (currentItemDestinations >= destinationBoxes.length) {
        loadMoreDestinationsBtn.style.display = 'none'; // Hide button if all boxes are shown
        seeLessDestinationsBtn.style.display = 'block'; // Show See Less button
    }
}

// See Less functionality
seeLessDestinationsBtn.onclick = () => {
    let newCurrentItem = currentItemDestinations - 3;
    if (newCurrentItem < 3) newCurrentItem = 3; // Prevent going below initial count

    // Hide boxes
    for (let i = currentItemDestinations - 1; i >= newCurrentItem; i--) {
        if (destinationBoxes[i]) {
            destinationBoxes[i].style.display = 'none'; // Hide the box
        }
    }

    currentItemDestinations = newCurrentItem; // Update currentItem
    if (currentItemDestinations <= 3) {
        seeLessDestinationsBtn.style.display = 'none'; // Hide See Less button if at initial state
    }
    
    // Show Load More button if there are more items to show
    if (currentItemDestinations < destinationBoxes.length) {
        loadMoreDestinationsBtn.style.display = 'block'; // Show Load More button
    }
}

// Load More Gallery
let loadMoreGalleryBtn = document.querySelector('.gallery .load-more .btn.load-more');
let seeLessGalleryBtn = document.querySelector('.gallery .load-more .btn.see-less');
let currentItemGallery = 4;

// Initially hide all gallery boxes except the first 'currentItemGallery'
let galleryBoxes = [...document.querySelectorAll('.gallery .box-container .box')];
galleryBoxes.forEach((box, index) => {
    if (index >= currentItemGallery) {
        box.style.display = 'none'; // Hide initially
    }
});

// Load more functionality
loadMoreGalleryBtn.onclick = () => {
    for (let i = currentItemGallery; i < currentItemGallery + 4; i++) {
        if (galleryBoxes[i]) { // Check if the box exists
            galleryBoxes[i].style.display = 'inline-block'; // Show the box
        }
    }

    currentItemGallery += 4;
    if (currentItemGallery >= galleryBoxes.length) {
        loadMoreGalleryBtn.style.display = 'none'; // Hide button if all boxes are shown
        seeLessGalleryBtn.style.display = 'block'; // Show See Less button
    }
}

// See Less functionality
seeLessGalleryBtn.onclick = () => {
    let newCurrentItem = currentItemGallery - 4;
    if (newCurrentItem < 4) newCurrentItem = 4; // Prevent going below initial count

    // Hide boxes
    for (let i = currentItemGallery - 1; i >= newCurrentItem; i--) {
        if (galleryBoxes[i]) {
            galleryBoxes[i].style.display = 'none'; // Hide the box
        }
    }

    currentItemGallery = newCurrentItem; // Update currentItem
    if (currentItemGallery <= 4) {
        seeLessGalleryBtn.style.display = 'none'; // Hide See Less button if at initial state
    }
    
    // Show Load More button if there are more items to show
    if (currentItemGallery < galleryBoxes.length) {
        loadMoreGalleryBtn.style.display = 'block'; // Show Load More button
    }
}