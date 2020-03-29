function watchAdd() {
    let button = document.querySelector('.add');
    button.addEventListener('click', (event) => {
        event.preventDefault();
        
        let validationField = document.querySelector('.validation');
        let item = document.querySelector('#input');

        if(item.value === "") {
            validationField.style.display = 'inline';
            console.log("Empty");
        }
        else {
            validationField.style.display = 'none';

            let section = document.querySelector('.list');
            section.innerHTML +=
            `
            <li id="${item.value}">
                <div>
                    <label class="name">${item.value}</label><br>
                    <button type="submit" class="check">check</button>
                    <button type="submit" class="delete">delete</button>
                </div>
            </li>
            `;

            console.log("Item added");
        }
        watchCheck();
        watchDelete();
    });
}

function watchCheck() {
    let checkButtons = document.getElementsByClassName('check');
    for(let i = 0; i < checkButtons.length; i++) {
        checkButtons[i].addEventListener('click', (event) => {
            console.log("Item (un)checked");
            
            let parent = checkButtons[i].parentNode;
            if(parent.style.textDecoration != 'line-through')
                parent.style.textDecoration = 'line-through';
            else
                parent.style.textDecoration = 'none';
        });
    }
}

function watchDelete() {
    let deleteButtons = document.getElementsByClassName('delete');
    for(let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener('click', (event) => {
            console.log("Item removed");

            let parentID = deleteButtons[i].parentNode.parentNode.id;

            let deleteItem = document.getElementById(parentID);
            deleteItem.parentNode.removeChild(deleteItem);

            watchCheck();
        });
    }
}

function init() {
    watchAdd();
}

init();