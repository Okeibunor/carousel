let slides = document.querySelectorAll('.slide');
// let buttons = document.querySelectorAll('.buttons li')
// let button = document.querySelector('.buttons')
let left = document.querySelector('#leftarrow');
let right = document.querySelector('#rightarrow');


setInterval(function(){
    let currentSlide = document.querySelector('.slide.active');
    position = positionInArray(currentSlide,slides)
    if(position <  slides.length - 1){
        newSlide =  slides[position + 1];
        currentSlide.classList.remove('active');
        newSlide.classList.add('active');
    }
    else{
        newSlide = slides[0];
        currentSlide.classList.remove('active');
        newSlide.classList.add('active')
    }
},10000);

left.addEventListener('click',goLeft);
right.addEventListener('click',goRight)

function goLeft(e){
    let currentSlide = document.querySelector('.slide.active');
    position = positionInArray(currentSlide,slides)
    if(position > 0){
        newSlide =  slides[position - 1];
    }
    else{
        newSlide = slides[slides.length - 1]
    }
    currentSlide.classList.remove('active');
    newSlide.classList.add('active');

    
    document.querySelector('.buttons li.active').classList.remove('active');
    document.querySelector(`.buttons ${positionInArray}`).classList.add('active');

    e.preventDefault();
}
function goRight(e){
    let currentSlide = document.querySelector('.slide.active');
    position = positionInArray(currentSlide,slides)
    if(position <  slides.length - 1){
        newSlide =  slides[position + 1];
    }
    else{
        newSlide = slides[0];
    }
    currentSlide.classList.remove('active');
    newSlide.classList.add('active');
    e.preventDefault();
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
firstButton = document.querySelector('#one');
firstButton.addEventListener('click',function(e){
    document.querySelector('.slide.active').classList.remove('active')
    slides.forEach(element => {
        if(positionInArray(element,slides) == 0){
            element.classList.add('active');
        }
    });
    
   

    e.preventDefault();
})

