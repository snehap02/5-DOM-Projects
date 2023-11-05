const statuss = document.getElementById("status");
const addBtn = document.getElementById("add");
let initialState = 0;

addBtn.addEventListener('click', function(){
    if(initialState === 0){
        statuss.innerHTML = "FRIENDS";
        initialState = 1;
        addBtn.style.backgroundColor = '#8a8787';
        addBtn.innerHTML = `<i class="fa-solid fa-user-minus"></i> &nbsp;Remove`;
    }else{
        initialState = 0
        statuss.innerHTML = "STRANGER";
        addBtn.innerHTML = `<i class="fa-solid fa-user-plus"></i> &nbsp;Add Friend`;
        addBtn.style.backgroundColor = '#3957ba';
    }
})