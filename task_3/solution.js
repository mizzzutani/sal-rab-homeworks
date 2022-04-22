function renderCartItem(item) {
    const product = item;
let itemCountText = `${product.count} × ${product.price} ₽ = ${product.count * product.price} ₽`;
    // Конец решения задания №3.1.

    return `<div class="cart-item"><div>${product.title}</div><div>${itemCountText}</div></div>`;
}
