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
    removeNewElement.innerText = '-';
    removeNewElement.classList.add('supp');
    removeNewElement.classList.add('remove');
    divSupp.appendChild(removeNewElement);

    let checkNewElement = document.createElement('p');
    checkNewElement.classList.add('supp');
    checkNewElement.classList.add('check');
    divSupp.appendChild(checkNewElement);

    checkFull(checkNewElement);
}

function checkFull(checkNewElement) {
    let checkedElement = document.querySelectorAll('.check');

    for (let i of checkedElement) {
        checkNewElement.addEventListener('click', function () {
            this.classList.toggle('checked');
            if (this.classList.contains('checked')) {
                this.classList.remove('checkedd');
            }
        });
    }
}

addToDoButton.addEventListener('click', function () {
    ajouter();
});

inputField.addEventListener('keypress', function (event) {
    if (event.key == 'Enter') {
        ajouter();
    }
});
