const item = document.querySelector('#item');
const toDoBox = document.querySelector('#todo-box');

item.addEventListener {
    "keyup",
    function(event){
        console.log(event.key);
    }
}