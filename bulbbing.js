function bg_inner(){
    inner.classList.add('inner-box-bg');
    
    console.log('aaa')
}
function bg_outer(){
    outer.classList.add('outer-box-bg');
    
    console.log('aaa')
}

let inner = document.querySelector('.inner-box');
let outer = document.querySelector('.outer-box');
inner.addEventListener('click',bg_inner);
outer.addEventListener('click',bg_outer);