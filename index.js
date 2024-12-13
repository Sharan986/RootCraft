let t1=gsap.timeline();

t1.from('#h1line', {
    x: "-500px",
    duration: 0.4,
    opacity: 0,

})
gsap.from('#a', {
    x: "-500px",
    duration: 0.4,
    opacity: 0,

})
t1.from('.threeimg',{
    opacity:0,
    duration:1,
    rotate:20,
   
})
