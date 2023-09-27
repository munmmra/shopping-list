const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');

const addItem = (event) =>{
    event.preventDefault();

    const newItem = itemInput.value;

    // Validat input
    if(itemInput.value === ''){
        alert('Please add an item');
        return;
    }

    // console.log('success');

    // Create list item
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(newItem));

    console.log(li);

    const button = createButton('remove-item btn-link text-red')
    console.log(button);

    li.appendChild(button);
    console.log(li);

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


// Event Listeners
itemForm.addEventListener('submit', addItem);
