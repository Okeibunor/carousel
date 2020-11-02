let slides = document.querySelectorAll('.slide');
// let buttons = document.querySelectorAll('.buttons li')
let button = document.querySelector('.buttons')
let left = document.querySelector('#leftarrow');
let right = document.querySelector('#rightarrow');


let intervalId = setInterval(goRight,10000);

left.addEventListener('click', function (e) { 
    goLeft();
    clearInterval(intervalId);
    intervalId = setInterval(goRight,10000);
    e.preventDefault()
});

right.addEventListener('click', function (e) { 
    goRight();
    clearInterval(intervalId);
    intervalId = setInterval(goRight,10000);
    e.preventDefault();
})

function goLeft(){
    let currentSlide = document.querySelector('.slide.active');
    let newSlide;
    position = positionInArray(currentSlide,slides)
    if(position > 0){
        newSlide = slides[position - 1];
        document.querySelector('.buttons li.active').classList.remove('active');
        document.querySelector(`#\\3${position -1} `).classList.add('active');
    }
    else{
        newSlide = slides[slides.length - 1]
        document.querySelector('.buttons li.active').classList.remove('active');
        document.querySelector(`#\\3${slides.length - 1} `).classList.add('active');
    }
    currentSlide.classList.remove('active');
    newSlide.classList.add('active');
}

function goRight(){
    let currentSlide = document.querySelector('.slide.active');
    position = positionInArray(currentSlide,slides)
    if(position <  slides.length - 1){
        newSlide = slides[position + 1];
        document.querySelector('.buttons li.active').classList.remove('active');
        document.querySelector(`#\\3${position + 1} `).classList.add('active');
    }
    else{
        newSlide = slides[0];
        document.querySelector('.buttons li.active').classList.remove('active');
        document.querySelector(`#\\3${0} `).classList.add('active');
    }
    currentSlide.classList.remove('active');
    newSlide.classList.add('active');
}


function positionInArray(a,array){
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if(element == a){
            return index;
        }
    }
    return null;
}



//button slide interaction
firstButton = document.querySelector('#\\31 ');
firstButton.addEventListener('click',function(e){
    document.querySelector('.slide.active').classList.remove('active')
    slides.forEach(element => {
        if(positionInArray(element,slides) == 0){
            element.classList.add('active');
        }
    });
    
   

    e.preventDefault();
})

button.addEventListener('click', function (e) { 
    if (e.target.tagName == 'LI') { 
        console.log('fired')
    }
})