# RedStore Backend Setup (Supabase)

This project has been upgraded from a static site to a dynamic one using **Supabase** as the backend.

## Features Added
1.  **Dynamic Product Listing**: Products are now fetched from the database instead of being hardcoded.
2.  **Add to Cart**: Users can add products to their cart, which is persisted in the database.
3.  **Cart Management**: View cart items, update quantities, and remove items (CRUD).
4.  **Product Management**: Add new products via the "Products" page.
5.  **SQL Schema**: Provided `setup.sql` to initialize your Supabase tables.

## How to Setup Supabase

1.  **Create a Supabase Project**:
    *   Go to [supabase.com](https://supabase.com/) and create a new project.
2.  **Setup Database**:
    *   Go to the **SQL Editor** in your Supabase dashboard.
    *   Copy and paste the contents of `setup.sql` and run it. This will create the `products` and `cart` tables and seed them with initial data.
3.  **Get Credentials**:
    *   Go to **Project Settings** > **API**.
    *   Copy the **Project URL** and the **anon public key**.
4.  **Update Config**:
    *   Open `supabase-config.js` and replace the placeholder values:
        ```javascript
        const supabaseUrl = 'YOUR_SUPABASE_PROJECT_URL';
        const supabaseKey = 'YOUR_SUPABASE_ANON_KEY';
        ```

## File Structure
- `index.html`: Main landing page (now dynamic).
- `products.html`: All products page + "Add New Product" form.
- `cart.html`: Shopping cart page.
- `products.js`: Logic for fetching and rendering products + Add to Cart.
- `cart.js`: Logic for managing cart items.
- `supabase-config.js`: Supabase connection settings.
- `setup.sql`: Database schema and initial data.

## Usage
- Open `index.html` in your browser.
- Browse products.
- Click "Add to Cart" to save items.
- Go to "Products" page to add your own new listings.
- Go to "Cart" (icon in navbar) to manage your shopping cart.
