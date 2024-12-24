const menuItems = document.querySelectorAll('.menu-item');
const categories = document.querySelectorAll('.product-category');

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        const category = item.getAttribute('data-category');
        
        // Sembunyikan semua kategori
        categories.forEach(cat => cat.style.display = 'none');
        
        // Tampilkan kategori yang dipilih
        document.getElementById(category).style.display = 'block';
    });
});

let cart = [];

function updateCart() {
    console.log("Keranjang saat ini:", cart);
}

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const name = button.dataset.name;
        const price = button.dataset.price;

        cart.push({ name, price });
        alert(`${name} ditambahkan ke keranjang.`);
        updateCart();
    });
});
