// Navigasi kategori
document.querySelectorAll('.menu-item').forEach((button) => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        document.querySelectorAll('.product-category').forEach((section) => {
            section.style.display = 'none';
        });
        document.getElementById(category).style.display = 'block';
    });
});

// Keranjang belanja
let cart = [];
const cartList = document.getElementById('cart-list');
const totalPriceEl = document.getElementById('total-price');

// Tambah ke keranjang
document.querySelectorAll('.add-to-cart').forEach((button) => {
    button.addEventListener('click', () => {
        const name = button.getAttribute('data-name');
        const price = parseInt(button.getAttribute('data-price'));
        cart.push({ name, price });
        updateCart();
    });
});

// Perbarui keranjang
function updateCart() {
    cartList.innerHTML = '';
    let totalPrice = 0;

    cart.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - Rp ${item.price}`;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Hapus';
        removeButton.addEventListener('click', () => {
            cart.splice(index, 1);
            updateCart();
        });
        listItem.appendChild(removeButton);
        cartList.appendChild(listItem);
        totalPrice += item.price;
    });

    totalPriceEl.textContent = `Total: Rp ${totalPrice}`;
}

// Checkout
document.getElementById('checkout').addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Keranjang belanja kosong!');
    } else {
        const orderText = cart
            .map((item) => `${item.name} - Rp ${item.price}`)
            .join('\n');
        const message = `Pesanan Anda:\n\n${orderText}\n\nTotal: Rp ${cart.reduce(
            (sum, item) => sum + item.price,
            0
        )}`;
        const whatsappUrl = `https://wa.me/6285947515940?text=${encodeURIComponent(
            message
        )}`;
        window.open(whatsappUrl, '_blank');
    }
});
