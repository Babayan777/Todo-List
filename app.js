var elements = [];


window.onload = function(){
    if(JSON.parse(localStorage.getItem('todo-elements')) != null){
        elements = JSON.parse(localStorage.getItem('todo-elements'));
        console.log("elements:" + elements);
        display();
    }
}


function addElement(){
        if(document.querySelector('.inp').value.trim() == ""){
            let modal = document.querySelector('.modal-container');
            modal.style.display = "flex";
        }
        if(document.querySelector('.inp').value.trim() != ""){
        elements.push(document.querySelector('.inp').value.trim());
        if(localStorage.getItem('todo-elements') == null){
            localStorage.setItem('todo-elements',JSON.stringify(elements));
        }
        else{
            localStorage.setItem('todo-elements',JSON.stringify(elements));
        }
        console.log(localStorage.getItem('todo-elements'));
        display();
        document.querySelector('.inp').value = "";
    }
}

document.querySelector('.modal-close').addEventListener("click",function(){
    let modal = document.querySelector('.modal-container');
    modal.style.display = "none";
})


function display(){
    document.querySelector('.newItemArea').innerHTML = "";
    for(var i = 0; i < elements.length; i++){
        document.querySelector('.newItemArea').innerHTML += 
        `
        <div class="newItem"><div class="itemName"><h2>${elements[i]}</h2></div><div class="itemIcons"><i class="fas fa-check" onclick="line(${i})"></i><i class="fas fa-trash-alt" onclick="del(${i})"></i></div></div>
        `
    }
}


function del(index){
    elements.splice(index, 1);
    if(localStorage.getItem('todo-elements') == null){
        localStorage.setItem('todo-elements',JSON.stringify(elements));
    }
    else{
        localStorage.setItem('todo-elements',JSON.stringify(elements));
    }
    display();
}


function line(index){
    if(elements[index].includes("<del>")){
        elements[index] = elements[index].replace("<del>","");
        elements[index] = elements[index].replace("</del>","");
    }
    
    else{
        elements[index] = `<del>${elements[index]}</del>`;
    }
    if(localStorage.getItem('todo-elements') == null){
        localStorage.setItem('todo-elements',JSON.stringify(elements));
    }
    else{
        localStorage.setItem('todo-elements',JSON.stringify(elements));
    }
    display();
}
