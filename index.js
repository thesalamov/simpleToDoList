let addToDoButton=document.querySelector('#addToDo');
let toDoContainer=document.querySelector('#toDoContainer');
let inputText=document.querySelector('#inputText');
let clearToDo=document.querySelector('#clearToDo');
addToDoButton.addEventListener('click',function(){
    let paragraph=document.createElement('p');
    paragraph.classList.add('design')
    toDoContainer.appendChild(paragraph);
    paragraph.innerHTML=inputText.value;
    inputText.value="";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration='line-through';
    });

    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    });

    clearToDo.addEventListener('click', function(){
        paragraph.remove();
    })

});

