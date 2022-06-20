// Responsive menu

const mobileMenu = () => { 

    // console.log("Test");

    let menu = document.querySelector(".header ul");
    // console.log(menu);

   

    let btn = document.querySelector(".header button"); 

    if(btn.innerText === "MENU") {
        // console.log("Pise menu");

        menu.style.display = 'block';
        btn.innerText = 'CLOSE';
    } 
    
    else {
        // console.log("Close pise");

        menu.style.display = 'none';
        btn.innerText = 'MENU';
    }

    // btn.innerText = 'CLOSE';

}

// This is a gallery

let rightBtn = document.querySelector('#right-btn');
let leftBtn = document.querySelector('#left-btn');
let pictures = document.querySelectorAll('.slider-images img');

let imgNumber = 0;

// rightBtn.addEventListener('click', () => {
//     // console.log("right");

//     // console.log(pictures);
//     // pictures[0].style.display = 'none';
//     // pictures[1].style.display = 'block';

//     // displayNone(pictures);
//     // pictures[1].style.display = 'block';

//     // displayNone();
//     // imgNumber++;

//     // pictures[1].style.display = 'block';

//     displayNone();
//     imgNumber++;

//     if(imgNumber === pictures.length) {
//         imgNumber = 0;
//     }
    
//     // console.log(imgNumber);

//     pictures[imgNumber].style.display = 'block';


// });

// leftBtn.addEventListener('click', () => {
//     // console.log("left");

//     displayNone();
//     imgNumber--; 

//     if(imgNumber == -1) {
//         imgNumber = pictures.length - 1;
//     }

//     // console.log(imgNumber);

//     pictures[imgNumber].style.display = 'block';


// });


// Pomjeramo slike u desno
const moveRight = () => {
    displayNone();
    imgNumber++;

    if(imgNumber === pictures.length) {
        imgNumber = 0;
    }

    pictures[imgNumber].style.display = 'block'; 
}

// Event listeneri za strelice
rightBtn.addEventListener('click', moveRight);


// Pomjeramo slike u lijevo
const moveLeft = () => {
    displayNone();
    imgNumber--; 

    if(imgNumber === -1) {
        imgNumber = pictures.length - 1;
    }

    pictures[imgNumber].style.display = 'block';
}

// Event listeneri za strelice
leftBtn.addEventListener('click', moveLeft);

// Ova funkcija ce da sakrije sve slike

const displayNone = () => {

    pictures.forEach((img) => {
        img.style.display = 'none';
    });

}

// Portfolio

const portfolioSort = (button) => {
    // console.log(button);

    let category = button.getAttribute('data-category');
    // console.log(category);

    let portfolioItems = document.querySelectorAll('.portfolio-single-item');

    portfolioItems.forEach((items) => {
        items.style.display = 'none';
    });

    if(category === 'all') {

        portfolioItems.forEach((items) => {
            items.style.display = 'block';
        });

    }

    portfolioItems.forEach((item) =>{

        // console.log(item.getAttribute('data-category'));

        if(item.getAttribute('data-category').includes(category)) {
            item.style.display = 'block';
        }

    });

}

// Otvaramo modal

const openModal = () => {
    // console.log("test");

    let modalWindow = document.querySelector('.popup-modal');
    let overlay = document.querySelector('.overlay');
    modalWindow.style.display = 'block';
    overlay.style.display = 'block';

}

const closeModal = () => {
    // console.log("test");

    let modalWindow = document.querySelector('.popup-modal');
    let overlay = document.querySelector('.overlay');
    modalWindow.style.display = 'none';
    overlay.style.display = 'none';

}



