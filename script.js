let products = [
	{id: 1, name: 'Curso 1:', price: 10.99, image: 'img/product1.avif'},
	{id: 2, name: 'Curso 2:', price: 20.99, image: 'img/product2.avif'},
	{id: 3, name: 'Curso 3:', price: 30.99, image: 'img/product3.avif'},
	{id: 4, name: 'Curso 4:', price: 40.99, image: 'img/product4.avif'},
	{id: 5, name: 'Curso 5:', price: 50.99, image: 'img/product5.avif'},
	{id: 6, name: 'Curso 6:', price: 60.99, image: 'img/product6.avif'},
	{id: 7, name: 'Curso 7:', price: 70.99, image: 'img/product7.avif'},
	{id: 8, name: 'Curso 8:', price: 80.99, image: 'img/product8.avif'},
	{id: 9, name: 'Curso 9:', price: 90.99, image: 'img/product9.avif'},
];

let cart = [];

function renderProducts() {
	const productGrid = document.querySelector('.product-grid');
	productGrid.innerHTML = '';

	products.forEach((product) => {
		const productDiv = document.createElement('div');
		productDiv.className = 'product';

		productDiv.innerHTML = `
			<img src="${product.image}" alt="${product.name}">
			<h3>${product.name}</h3>
			<p>R$ ${product.price.toFixed(2)}</p>
			<button class="jsbutton">Adicionar ao carrinho</button>
		`;

		productDiv.querySelector('button').addEventListener('click', () => {
			addToCart(product.id);
		});

		productGrid.appendChild(productDiv);
	});
}

function addToCart(productId) {
	const product = products.find((product) => product.id === productId);
	if (product) {
		cart.push(product);
		renderCart();
	}
}

function renderCart() {
	const cartTable = document.querySelector('.cart table tbody');
	cartTable.innerHTML = '';

	cart.forEach((product, index) => {
		const cartRow = document.createElement('tr');
		cartRow.innerHTML = `
			<td>${product.name}</td>
			<td>1</td>
			<td>R$ ${product.price.toFixed(2)}</td>
			<td>R$ ${product.price.toFixed(2)}</td>
			<td><button class="remove-btn" data-index="${index}">Remover</button></td>
		`;
		cartTable.appendChild(cartRow);
	});

	// Botões de remover
	const removeButtons = document.querySelectorAll('.remove-btn');
	removeButtons.forEach((button) => {
		button.addEventListener('click', () => {
			const index = parseInt(button.getAttribute('data-index'));
			removeFromCart(index);
		});
	});

	updateTotal();
}

function removeFromCart(index) {
	cart.splice(index, 1); // remove o item com base no índice
	renderCart();
}

function updateTotal() {
	const total = cart.reduce((acc, product) => acc + product.price, 0);
	document.getElementById('total').textContent = `R$ ${total.toFixed(2)}`;
}


document.getElementById('checkout').addEventListener('click', function() {
    if (cart.length === 0) {
        swal({
            title: "Erro!",
            text: "Carrinho está vazio!",
            icon: "error",
            button: "Fechar",

        });
    } else {
        swal({
            title: "Sucesso!",
            text: "Compras feitas!",
            icon: "success",
            button: "Fechar",

        }).then(() => {
            cart = [];   
            renderCart();

        });
    }
});

renderProducts();

