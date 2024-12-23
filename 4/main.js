let box = document.getElementById('box');
let btn = document.getElementsByTagName('button')[0];




btn.onclick = () => {
    let inpt = document.getElementsByClassName('inpp')[0].value;
    let h1 = document.createElement('h1');
    h1.textContent = inpt ;
    box.append(h1);
    console.log(h1.textContent);
    
   
   
}





      
let select = document.getElementById('selectt');
let input = document.getElementById('inputValue'); 
let button = document.getElementById('btn');
let box1 = document.getElementsByClassName('box1')[0]; 


button.onclick = function() {
    let selectedType = select.value; 
    let inputValue = input.value; 
    box1.innerHTML = '';

  
    if (selectedType === 'text') {
    let p = document.createElement('p'); 
        p.textContent = inputValue; 
        box1.append(p); 
 } else if (selectedType === 'img') {
       let img = document.createElement('img'); 
        img.src = inputValue; 
        img.alt = 'Изображение'; 
        img.style.width = '300px'; 
        box1.append(img); 
    }
};





