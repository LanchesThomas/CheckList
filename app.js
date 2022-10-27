input.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        // Ajout nouvelle ligne

        let saisie = document.getElementById('input').value;
        let productList = document.getElementById('product-list');
        let newProduct = document.createElement('li');
        let textSaisie = document.createTextNode(saisie);
        newProduct.appendChild(textSaisie);
        productList.appendChild(newProduct);
        newProduct.classList.add('product');
    }
});

const icon = '<span class="check"><i class="fa-solid fa-check"></i></span>';
let tabLi = document.getElementsByClassName('product');

for (let li of tabLi) {
    li.addEventListener('click', function () {
        this.classList.toggle('active');
        if (this.classList.contains('active')) {
            this.innerHTML = this.innerText + icon;
        } else {
            this.innerHTML = this.innerText;
        }
    });
}

