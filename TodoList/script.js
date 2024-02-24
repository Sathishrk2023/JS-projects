const input = document.getElementById('input');
const button = document.getElementById('btn');
const element = document.getElementById('display')

window.onload = () =>{
  todos = JSON.parse(localStorage.getItem('todos')) || [];
  todos.forEach(todo => addItem(todo));
}
let todos = [];
function addItem(todo){
  const para = document.createElement('p');
  para.innerText = todo;
  element.appendChild(para)
  input.value = "";

  para.addEventListener('click',()=>{
    para.style.color = 'red';
    para.style.textDecoration='line-through'
  })
  para.addEventListener('dblclick',()=>{
    element.removeChild(para)
    let index = todos.indexOf(para.innerHTML)
    todos.splice(index,1)
    localStorage.setItem('todos',JSON.stringify(todos));
  })
}

button.addEventListener('click',() =>{
    todos.push(input.value);
    addItem(input.value)
    localStorage.setItem('todos',JSON.stringify(todos));

})
