let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

let containerDivNewElement = document.createElement('div');
    containerDivNewElement.classList.add('containerDivNewElement'),
    toDoContainer.appendChild(containerDivNewElement);

addToDoButton.addEventListener('click', function () {

    let divNewElement = document.createElement('div');
    divNewElement.classList.add('divNewElement')
    containerDivNewElement.appendChild(divNewElement);

    let newElement = document.createElement('p');
    divNewElement.appendChild(newElement);
    newElement.innerText = inputField.value;
    newElement.classList.add('textNewElement');

    let removeNewElement = document.createElement('p');
    removeNewElement.innerText = '-';
    removeNewElement.classList.add('supp');
    removeNewElement.classList.add('remove');
    divNewElement.appendChild(removeNewElement);

    let checkNewElement = document.createElement('p');
    checkNewElement.classList.add('supp');
    checkNewElement.classList.add('check');
    divNewElement.appendChild(checkNewElement);

    checkFull(checkNewElement);
});

function checkFull(checkNewElement) {
    let checkedElement = document.querySelectorAll('.check');

    for (let i in checkedElement) {
        checkNewElement.addEventListener('click', function () {
            this.classList.toggle('checked');
            if (this.classList.contains('checked')) {
                this.classList.remove('checkedd');
            }
        });
    }
}
