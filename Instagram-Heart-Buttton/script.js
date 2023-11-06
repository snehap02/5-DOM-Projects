const image = document.getElementById('love');
const icon = document.getElementById('heart');
const react = document.getElementById('reactone');

image.addEventListener('dblclick', function(){
    icon.style.transform = 'translate(-50%, -50%) scale(1)';
    icon.style.opacity='0.8';
    setTimeout(function(){
        icon.style.opacity='0';
    },1000);
    setTimeout(function(){
        icon.style.transform = 'translate(-50%, -50%) scale(0)'
    },1000);
})

react.addEventListener('click', function(){
    react.style.color = "red";
    icon.style.transform = 'translate(-50%, -50%) scale(1)';
    icon.style.opacity='0.8';
    setTimeout(function(){
        icon.style.opacity='0';
    },1000);
    setTimeout(function(){
        icon.style.transform = 'translate(-50%, -50%) scale(0)'
    },1000);
})
