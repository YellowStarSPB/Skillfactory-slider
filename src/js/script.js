const dots = document.querySelectorAll('.slider__circle');
const link = document.querySelectorAll('.right-wrapper__btn');
const divSlider = document.querySelector('.slider-line');
const btnNext = document.querySelector('.slider__next');
const btnPrev = document.querySelector('.slider__prev')


let position = 0;
let dotIndex = 0;

const nextSlide = () => {
    if(position < ((dots.length - 1) * 678)){
        position += 678
        dotIndex++
    } else {
        position = 0
        dotIndex = 0
    }
    
    divSlider.style.left = -position + 'px';
    thisSlide(dotIndex)
}
const prevSlide = () => {
    if(position > 0){
        position -= 678
        dotIndex--
    } else {
        position = ((dots.length - 1) * 678)
        dotIndex = (dots.length - 1)
    }
    
    divSlider.style.left = -position + 'px';
    thisSlide(dotIndex)
}
const thisSlide = (index) => {
    for(let dot of dots){
        dot.classList.remove('active')
    }
    dots[index].classList.add('active')
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        position = 678 * index
        divSlider.style.left = -position + 'px'
        dotIndex = index
        thisSlide(dotIndex)
    })
})
link.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        position = 678 * index
        divSlider.style.left = -position + 'px'
        dotIndex = index
        thisSlide(dotIndex)
    })
})
btnNext.addEventListener('click', nextSlide);
btnPrev.addEventListener('click', prevSlide);

