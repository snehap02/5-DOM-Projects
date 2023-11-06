const mainCont = document.getElementById('main');
const cursor = document.getElementById('cursor');

mainCont.addEventListener('mousemove', function(e){
    // console.log(e.x);
    cursor.style.left = e.x + "px";
    cursor.style.top = e.y + "px";
})