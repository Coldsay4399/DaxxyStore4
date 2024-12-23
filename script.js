// Simpan produk di keranjang
let cart = [];
let totalPrice = 0;

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.dataset.name;
        const productPrice = parseInt(button.dataset.price);

        // Menambahkan produk ke keranjang
        cart.push({ productName, productPrice });
        updateCart();
    });
});

// Mengupdate tampilan keranjang
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    totalPrice = 0;

    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${item.productName} - Rp ${item.productPrice} <button onclick="removeItem(${index})">Hapus</button>`;
        cartItems.appendChild(li);
        totalPrice += item.productPrice;
    });

    document.getElementById('total-price').textContent = totalPrice;
}

// Menghapus produk dari keranjang
function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}

// Menampilkan modal keranjang
document.getElementById('view-cart-btn').addEventListener('click', () => {
    document.getElementById('cart-modal').style.display = 'flex';
});

// Menutup modal keranjang
document.getElementById('close-cart-btn').addEventListener('click', () => {
    document.getElementById('cart-modal').style.display = 'none';
});

// Tombol checkout
document.getElementById('checkout-btn').addEventListener('click', () => {
    const orderDetails = cart.map(item => `${item.productName}: Rp ${item.productPrice}`).join('\n');
    const total = `Total: Rp ${totalPrice}`;
    const message = `Pesanan dari DaxxyStore:\n\n${orderDetails}\n\n${total}`;

    const phone = "6285947515940"; // Nomor tujuan
    const whatsappURL = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, '_blank');
});