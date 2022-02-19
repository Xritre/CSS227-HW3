// sort[] is keep items from table[]
let sort = [];
// table[] each turn, 1 items will get out 
let table = [1,2,3,4,5,6,7,8,9];
let turn = 1;

function add(event){
        let t1 = document.querySelector('#first');
        let t2 = document.querySelector('#second');
        let t3 = document.querySelector('#third');
        let t4 = document.querySelector('#forth');
        let t5 = document.querySelector('#fifth');
        let t6 = document.querySelector('#sixth');
        let t7 = document.querySelector('#seventh');
        let t8 = document.querySelector('#eight');
        let t9 = document.querySelector('#nine');
        let result = document.querySelector('h3')
        //player turn -> 1,3,5..
        if(turn %2 ==1  )
        {
            // if(event.target.textContent === '')
            // {
                event.target.textContent = 'x'; 
                table_check();
                turn++;
                //After click on other empty tiles
                result.textContent = ''; 
            // }
            // if click on played tiles . Messagage appeear!
            // else
            // {
            //     result.textContent = 'Please Choose other tiles';
            // }
            
        } 
        
        // check length did it change 
        console.log(table.length);
        if(table.length!==0 && turn%2==0 )
        {
           
                random_x_o();

                table_check();    
                turn++;  
            
        }
              
        // start  result check
        if(turn>=3)
            {
                check_result();
            }
          
    }


// for random O 
function random_x_o(){
     let random =Math.floor(Math.random() * table.length); 
     let t1 = document.querySelector('#first');
    let t2 = document.querySelector('#second');
    let t3 = document.querySelector('#third');
    let t4 = document.querySelector('#forth');
    let t5 = document.querySelector('#fifth');
    let t6 = document.querySelector('#sixth');
    let t7 = document.querySelector('#seventh');
    let t8 = document.querySelector('#eight');
    let t9 = document.querySelector('#nine');
// Connect values 1,2,3... to tiles t1,t2,t3
    if(table[random]===1 && t1.innerHTML !=='x' )
     {
         t1.innerHTML = 'o';
         console.log(array[t]) 
     }  
     else if(table[random]===2 && t2.innerHTML !=='x')
     {
         t2.innerHTML = 'o';
     } 
     else if(table[random]===3 && t3.innerHTML !=='x')
     {
         t3.innerHTML = 'o';
     } 
     else if(table[random]===4 && t4.innerHTML !=='x')
     {
         t4.innerHTML = 'o';
     }    
     else if(table[random]===5 && t5.innerHTML !=='x')
     {
         t5.innerHTML = 'o';
     }  
     else if(table[random]===6 && t6.innerHTML !=='x')
     {
         t6.innerHTML = 'o';
     } 
     else if(table[random]===7 && t7.innerHTML !=='x')
     {
         t7.innerHTML = 'o';
     } 
     else if(table[random]===8 && t8.innerHTML !=='x')
     {
         t8.innerHTML = 'o';
     } 
     else if(table[random]===9 && t9.innerHTML !=='x')
     {
         t9.innerHTML = 'o';
     } 
}


function table_check()
{
    let t1 = document.querySelector('#first');
    let t2 = document.querySelector('#second');
    let t3 = document.querySelector('#third');
    let t4 = document.querySelector('#forth');
    let t5 = document.querySelector('#fifth');
    let t6 = document.querySelector('#sixth');
    let t7 = document.querySelector('#seventh');
    let t8 = document.querySelector('#eight');
    let t9 = document.querySelector('#nine');
    let swap = 0;
// swap item that found to Last table[length] -> kick out -> sort[] recieve    
    for(i=0;i<=table.length-1;i++)
    {
        if(table[i] === 1 && t1.innerHTML !== ''  )
        {
             swap = table[table.length-1];
             table[table.length-1] = table[i];
             table[i] = swap;
             sort[turn-1] = table.pop();
             break;
        }
        else if(table[i] === 2 && t2.innerHTML !== ''  )
        {
             swap = table[table.length-1];
             table[table.length-1] = table[i];
             table[i] = swap;
             sort[turn-1] = table.pop();
             break;
        }
        else if(table[i] === 3 && t3.innerHTML !== ''  )
        {
             swap = table[table.length-1];
             table[table.length-1] = table[i];
             table[i] = swap;
             sort[turn-1] = table.pop();
             break;
        }
        else if(table[i] === 4 && t4.innerHTML !== ''  )
        {
             swap = table[table.length-1];
             table[table.length-1] = table[i];
             table[i] = swap;
             sort[turn-1] = table.pop();
             break;
        }
        else if(table[i] === 5 && t5.innerHTML !== ''  )
        {
             swap = table[table.length-1];
             table[table.length-1] = table[i];
             table[i] = swap;
             sort[turn-1] = table.pop();
             break;
        }
        else if(table[i] === 6 && t6.innerHTML !== ''  )
        {
             swap = table[table.length-1];
             table[table.length-1] = table[i];
             table[i] = swap;
             sort[turn-1] = table.pop();
             break;
        }
        else if(table[i] === 7 && t7.innerHTML !== ''  )
        {
             swap = table[table.length-1];
             table[table.length-1] = table[i];
             table[i] = swap;
             sort[turn-1] = table.pop();
             break;
        }
        else if(table[i] === 8 && t8.innerHTML !== ''  )
        {
             swap = table[table.length-1];
             table[table.length-1] = table[i];
             table[i] = swap;
             sort[turn-1] = table.pop();
             break;
        }
        else if(table[i] === 9 && t9.innerHTML !== ''  )
        {
             swap = table[table.length-1];
             table[table.length-1] = table[i];
             table[i] = swap;
             sort[turn-1] = table.pop();
             break;
        }
    }
    // Check if found in T1,T2 -> values is 1,2
    console.log('t' + sort[turn-1]);
    // Check length if it gets reduce?
    console.log(table.length);
}
 //Check if win/draw   
function check_result()
{
    let t1 = document.querySelector('#first');
    let t2 = document.querySelector('#second');
    let t3 = document.querySelector('#third');
    let t4 = document.querySelector('#forth');
    let t5 = document.querySelector('#fifth');
    let t6 = document.querySelector('#sixth');
    let t7 = document.querySelector('#seventh');
    let t8 = document.querySelector('#eight');
    let t9 = document.querySelector('#nine');
    let result = document.querySelector('h3')
    // Vertical Check
    if(t1.innerHTML !== '' && t4.innerHTML !== '' && t7.innerHTML !== '' && 
        t1.innerHTML === t4.innerHTML && t1.innerHTML === t7.innerHTML && t4.innerHTML === t7.innerHTML)
        {
                    result.innerHTML = t1.innerHTML + '  Win!';
                    play.removeEventListener('click',add);
                }

        
    else if(t2.innerHTML !== '' && t5.innerHTML !== '' && t8.innerHTML !== '' &&
            t2.innerHTML === t5.innerHTML && t2.innerHTML === t8.innerHTML && t5.innerHTML === t8.innerHTML)
    {        
                result.innerHTML = t2.innerHTML + ' Win!';
                play.removeEventListener('click',add);
            
    }
    
    else if(t3.innerHTML !== '' && t6.innerHTML !== '' && t9.innerHTML !== '' &&
            t3.innerHTML === t6.innerHTML && t3.innerHTML === t9.innerHTML && t6.innerHTML === t9.innerHTML)
    {
                result.innerHTML = t3.innerHTML + ' Win!';
                play.removeEventListener('click',add);
    }

    // Horizontal Check
    else if(t1.innerHTML !== '' && t2.innerHTML !== '' && t3.innerHTML !== '' &&
            t1.innerHTML === t2.innerHTML && t1.innerHTML === t3.innerHTML && t2.innerHTML === t3.innerHTML)
    {      
                result.innerHTML = t1.innerHTML + ' Win!'; 
                play.removeEventListener('click',add);             
    }

    else if(t4.innerHTML !== '' && t5.innerHTML !== '' && t6.innerHTML !== '' &&
            t4.innerHTML === t5.innerHTML && t4.innerHTML === t6.innerHTML && t5.innerHTML === t6.innerHTML)
    {      
                result.innerHTML = t4.innerHTML + ' Win!';   
                play.removeEventListener('click',add);           
    }
    else if(t7.innerHTML !== '' && t8.innerHTML !== '' && t9.innerHTML !== '' &&
            t7.innerHTML === t8.innerHTML && t7.innerHTML === t9.innerHTML && t8.innerHTML === t9.innerHTML)
    {      
                result.innerHTML = t7.innerHTML + ' Win!';  
                play.removeEventListener('click',add);            
    }

    // Diagonal Check
    else if(t1.innerHTML !== '' && t5.innerHTML !== '' && t9.innerHTML !== '' &&
            t1.innerHTML === t5.innerHTML && t1.innerHTML === t9.innerHTML && t5.innerHTML === t9.innerHTML)
    {      
                result.innerHTML = t1.innerHTML + ' Win!';
                play.removeEventListener('click',add);              
    }
    else if(t3.innerHTML !== '' && t5.innerHTML !== '' && t7.innerHTML !== '' &&
            t3.innerHTML === t5.innerHTML && t3.innerHTML === t7.innerHTML && t5.innerHTML === t7.innerHTML)
    {      
                result.innerHTML = t3.innerHTML + ' Win!';  
                play.removeEventListener('click',add);           
    }
    else if(table.length===0)
        {
            result.innerHTML = "It's Draw!";
            
        }
}



// Click on table
let play = document.querySelector('table');
play.addEventListener('click',add);

