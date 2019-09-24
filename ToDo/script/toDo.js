var count = 0;

function add() {
  var new_item;
  do{
    new_item = prompt("Add new");
  }while(new_item == "" || new_item.length == 0);
  count++;

  let new_element = document.createElement("li");
  let new_text = document.createTextNode(new_item);
  new_element.appendChild(new_text);
  document.getElementById("list").appendChild(new_element);   
}