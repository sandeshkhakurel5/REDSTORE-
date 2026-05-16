document.addEventListener("DOMContentLoaded", () => {
  fetchProducts();
});

async function fetchProducts() {
  try {
    const { data, error } = await supabaseClient
      .from("products")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;
    console.log(data, error);
    renderProducts(data);
  } catch (error) {
    console.error("Error fetching products:", error.message);
    // Fallback or error message in UI
  }
}

function renderProducts(products) {
  const featuredContainer = document.getElementById("featured-products");
  const latestContainer = document.getElementById("latest-products");

  if (!featuredContainer || !latestContainer) return;

  featuredContainer.innerHTML = "";
  latestContainer.innerHTML = "";

  products.forEach((product) => {
    const productHtml = `
            <div class="col-4">
                <img src="${product.image_url}" alt="${product.name}">
                <h4>${product.name}</h4>
                <div class="rating">
                    ${renderRating(product.rating)}
                </div>
                <p>Rs.${product.price}</p>
                <button class="btn add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;

    if (product.is_featured) {
      featuredContainer.innerHTML += productHtml;
    } else {
      latestContainer.innerHTML += productHtml;
    }
  });
}

function renderRating(rating) {
  let starsHtml = "";
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      starsHtml += '<i class="bi bi-star-fill"></i>';
    } else if (i - 0.5 <= rating) {
      starsHtml += '<i class="bi bi-star-half"></i>';
    } else {
      starsHtml += '<i class="bi bi-star"></i>';
    }
  }
  return starsHtml;
}

async function addToCart(productId) {
  try {
    // Check if item already in cart
    const { data: existingItem, error: fetchError } = await supabaseClient
      .from("cart")
      .select("*")
      .eq("product_id", productId)
      .single();

    if (fetchError && fetchError.code !== "PGRST116") throw fetchError;

    if (existingItem) {
      // Update quantity
      const { error: updateError } = await supabaseClient
        .from("cart")
        .update({ quantity: existingItem.quantity + 1 })
        .eq("id", existingItem.id);
      if (updateError) throw updateError;
    } else {
      // Add new item
      const { error: insertError } = await supabaseClient
        .from("cart")
        .insert([{ product_id: productId, quantity: 1 }]);
      if (insertError) throw insertError;
    }

    alert("Product added to cart!");
  } catch (error) {
    console.error("Error adding to cart:", error.message);
    alert("Could not add to cart. Check Supabase connection.");
  }
}
