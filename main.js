var text1 = document.querySelector(".width1")
var text2 = document.querySelector(".width2")
var text3 = document.querySelector(".width3")
var text4 = document.querySelector(".width4")

window.addEventListener("resize", function(){
    text1.innerHTML = visualViewport.width
    text2.innerHTML = document.body.clientWidth
    text3.innerHTML = screen.width
    text4.innerHTML = window.innerWidth
})