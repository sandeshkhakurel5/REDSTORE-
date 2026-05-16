document.addEventListener("DOMContentLoaded", () => {
  fetchCartItems();
});

async function fetchCartItems() {
  try {
    const { data, error } = await supabaseClient.from("cart").select(`
                id,
                quantity,
                products (
                    id,
                    name,
                    price,
                    image_url
                )
            `);

    if (error) throw error;

    renderCartItems(data);
  } catch (error) {
    console.error("Error fetching cart items:", error.message);
  }
}

function renderCartItems(items) {
  const cartContainer = document.getElementById("cart-items");
  if (!cartContainer) return;

  cartContainer.innerHTML = "";
  let subtotal = 0;

  items.forEach((item) => {
    const product = item.products;
    const itemSubtotal = product.price * item.quantity;
    subtotal += itemSubtotal;

    cartContainer.innerHTML += `
            <tr>
                <td>
                    <div class="cart-info">
                        <img src="${product.image_url}" alt="${product.name}">
                        <div>
                            <p>${product.name}</p>
                            <small>Price: Rs.${product.price}</small>
                            <br>
                            <a href="#" onclick="removeFromCart(${item.id})">Remove</a>
                        </div>
                    </div>
                </td>
                <td><input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${item.id}, this.value)"></td>
                <td>Rs.${itemSubtotal}</td>
            </tr>
        `;
  });

  const tax = subtotal * 0.18; // 18% tax
  const total = subtotal + tax;

  document.getElementById("subtotal").innerText = `Rs.${subtotal.toFixed(2)}`;
  document.getElementById("tax").innerText = `Rs.${tax.toFixed(2)}`;
  document.getElementById("total").innerText = `Rs.${total.toFixed(2)}`;
}

async function updateQuantity(itemId, quantity) {
  try {
    const { error } = await supabaseClient
      .from("cart")
      .update({ quantity: parseInt(quantity) })
      .eq("id", itemId);

    if (error) throw error;
    fetchCartItems();
  } catch (error) {
    console.error("Error updating quantity:", error.message);
  }
}

async function removeFromCart(itemId) {
  if (!confirm("Are you sure you want to remove this item?")) return;
  try {
    const { error } = await supabaseClient
      .from("cart")
      .delete()
      .eq("id", itemId);

    if (error) throw error;
    fetchCartItems();
  } catch (error) {
    console.error("Error removing item:", error.message);
  }
}
