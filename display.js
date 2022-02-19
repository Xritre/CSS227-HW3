function first_show(){
    // change content
    let change = document.querySelector('#Show a');
    change.innerHTML = '>>Show details';
    console.log('aaa');
    
    display.removeEventListener('click',first_show);
    display.addEventListener('click',show);
}

function show (){
    // remove hidden
    let extra = document.querySelector('#extra');
    extra.classList.remove('hidden');
    // change content
    let change = document.querySelector('#Show a');
    change.innerHTML = 'v Hide details';
    console.log('aaa');
    // remove click->show
    display.removeEventListener('click',show);
    display.addEventListener('click',Hide);
    
}

function Hide (){
    
    let extra = document.querySelector('#extra');
    extra.classList.add('hidden');
    let change = document.querySelector('#Show a');
    change.innerHTML = '>> Show details';
    display.removeEventListener('click',Hide);
    display.addEventListener('click',show);
    console.log('aaa');
}

let display = document.querySelector('#Show');
display.addEventListener('click',first_show);
