let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.querySelector('#inputField');

let containerDivNewElement = document.createElement('div');
containerDivNewElement.classList.add('containerDivNewElement'),
    toDoContainer.appendChild(containerDivNewElement);

function ajouter() {
    let divNewElement = document.createElement('div');
    divNewElement.classList.add('divNewElement');
    containerDivNewElement.appendChild(divNewElement);

    let newElement = document.createElement('p');
    divNewElement.appendChild(newElement);
    newElement.innerText = inputField.value;
    newElement.classList.add('textNewElement');

    let divSupp = document.createElement('div');
    divSupp.classList.add('divSupp');
    divNewElement.appendChild(divSupp);

    let removeNewElement = document.createElement('p');
    removeNewElement.classList.add('supp');
    removeNewElement.classList.add('remove');
    divSupp.appendChild(removeNewElement);

    let textRemoveNewElement = document.createElement('span');
    textRemoveNewElement.innerText = '-';
    textRemoveNewElement.classList.add('minus');
    removeNewElement.appendChild(textRemoveNewElement);

    let checkNewElement = document.createElement('p');
    checkNewElement.classList.add('supp');
    checkNewElement.classList.add('check');
    divSupp.appendChild(checkNewElement);

    checkFull(checkNewElement);
    removeMinus(removeNewElement);
}

function checkFull(checkNewElement) {
    let checkedElement = document.querySelectorAll('.check');

    for (let i of checkedElement) {
        checkNewElement.addEventListener('click', function () {
            if (this.classList.contains('check')) {
                this.classList.toggle('checked');
            } else if (this.classList.contains('checked')) {
                this.classList.remove('checked');
            }
        });
    }
}


function removeMinus(removeNewElement) {
    let removedElement = document.querySelectorAll('.remove');
    let deletedElement = document.querySelector('.divNewElement')

    for (let i of removedElement) {
        removeNewElement.addEventListener('click', function () {
            deletedElement.remove();
        });
    }
}

addToDoButton.addEventListener('click', function () {
    if (!inputField.value) {
    } else {
        ajouter();
        inputField.value = '';
    }
});

inputField.addEventListener('keypress', function (event) {
    if (event.key == 'Enter' && !inputField.value) {
    } else if (event.key == 'Enter') {
        ajouter();
        inputField.value = '';
    }
});
