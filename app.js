const modal =document.querySelector(".modal");
const previews= document.querySelectorAll(".gallery img");
const original = document.querySelector(".full-img");
const caption = document.querySelector(".caption");  

previews.forEach((preview) =>{
    preview.addEventListener('click' ,() =>{
        modal.classList.add('open');
        original.classList.add("open");
        const originalSrc = preview.getAttribute("data-original");
        original.src= originalSrc;
        const altText= preview.alt;
        caption.textContent=altText;

    });
});

modal.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) {
        modal.classList.remove("open");
        original.classList.remove("open");

    }
});

const tl = gsap.timeline({defaults: {ease: 'power1.out'}});

tl.to('.text', {y:'0%',duration:1, stagger:0.25});
tl.to('.slider', {y: "-100%", duration:1.5, delay:0.5});
tl.to('.intro', {y: "-100%", duration:1}, "-=1");

const sections = document.querySelectorAll('section');
const bubble = document.querySelector('.bubble');
const gradients = [
    "linear-gradient(to right top, #D0C1D7, #7A7FC8)",
    "linear-gradient(to right top, #D0C1D7, #7A7FC8)",
    "linear-gradient(to right top, #D0C1D7, #7A7FC8)"
];

const options = {
    threshold: 0.7
};

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries){
    entries.forEach(entry => {
        const className = entry.target.className;
        console.log(className);
        const activeAnchor = document.querySelector(`[data-page=${className}]`);
        const gradientIndex = entry.target.getAttribute('data-index');
        const coords = activeAnchor.getBoundingClientRect();
        const directions = {
            height:coords.height,
            width:coords.width,
            top:coords.top,
            left:coords.left
        };
        if(entry.isIntersecting) {
            bubble.style.setProperty('left', `${directions.left}px`);
            bubble.style.setProperty('top', `${directions.top}px`);
            bubble.style.setProperty('width', `${directions.width}px`);
            bubble.style.setProperty('height', `${directions.height}px`);
        }
        
    });
}

sections.forEach(section => {
    observer.observe(section);
});