const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearButton = document.getElementById('clear');

const addItem = (event) =>{
    event.preventDefault();
    const newItem = itemInput.value;
    // Validate input
    if(itemInput.value === ''){
        alert('Please add an item');
        return;
    }
    // Create list item
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(newItem));

    const button = createButton('remove-item btn-link text-red')
    li.appendChild(button);
    itemList.appendChild(li);
    itemInput.value = '';
};

const createButton = (classes) => {
    const button = document.createElement('button');
    button.className = classes;
    button.appendChild(createIcon('fa-solid fa-xmark'))
    return button;
}
const createIcon = (classes) => {
    const icon = document.createElement('i');
    icon.className = classes
    return icon;
}
const removeItem = (e) => {
    if(e.target.parentElement.classList.contains('remove-item')){
        e.target.parentElement.parentElement.remove();
    }
}
const clearItems = (e) => {
    while(itemList.firstChild){
        itemList.firstChild.remove();
    }
}


// Event Listeners
itemForm.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
itemList.addEventListener('click', removeItem);
clearButton.addEventListener('click', clearItems);