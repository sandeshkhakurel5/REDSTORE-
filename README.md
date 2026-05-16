# REDSTORE - Athlete's Choice (E-Commerce Site)

## 📌 Project Overview
REDSTORE is a simple, modern, and fully functional e-commerce website designed for sports enthusiasts. It allows users to browse featured products, see the latest arrivals, add items to a shopping cart, and even list new products for sale.

---

## 🛠 Tech Stack

- **Frontend:** HTML5, CSS3, and Vanilla JavaScript
- **Backend:** Supabase
- **Database:** PostgreSQL (managed by Supabase)

---

## ☁️ What is Supabase?

In simple terms, **Supabase** is a "Backend-as-a-Service."

Think of it like a ready-made engine for your car. Instead of building a complex server (like Node.js or Python) and a database from scratch, Supabase gives you a database and a way to talk to it instantly using JavaScript.

It handles:

1. **Storing Data** — Product names, prices, and images
2. **Logic** — Adding items to a cart or fetching products from the database

---

## 🚀 Key Features

1. **Dynamic Product Listing** — All products are fetched from a real database
2. **Add to Cart** — Users can add products to their cart and save them in the database
3. **Cart Management** — View items in the cart, update quantities, or remove items
4. **Add New Products** — Users can dynamically add products through a form on the Products page
5. **Responsive Design** — Includes a sticky footer and responsive layout for all screen sizes

---

## 📂 Project Structure

- `index.html` — Landing page with featured and latest products
- `products.html` — Displays all products and includes the Add Product form
- `about.html` — Information about the REDSTORE story
- `contact.html` — Contact form and company information
- `cart.html` — Shopping cart management page
- `products.js` — Handles product fetching and Add to Cart functionality
- `cart.js` — Manages cart operations such as update and delete
- `supabase-config.js` — Connects the project to the Supabase database
- `setup.sql` — SQL script for creating the required database tables

---

## ⚙️ How to Use This Project

### 1. Setup Supabase

1. Go to Supabase and create a free account and a new project
2. Open the **SQL Editor** in your Supabase dashboard
3. Copy the contents of `setup.sql` and run them in the SQL Editor

This creates the required `Products` and `Cart` tables.

---

### 2. Connect the Code

1. In your Supabase dashboard, go to **Project Settings > API**
2. Copy your **Project URL** and **Anon Public Key**
3. Open `supabase-config.js` and replace the placeholder values:

```javascript
const supabaseUrl = 'YOUR_URL_HERE';
const supabaseKey = 'YOUR_KEY_HERE';
```

### 3. Run the Website

- Open `index.html` in any web browser
- For a better development experience, use the **Live Server** extension in VS Code

---

## 📝 License

This project was created for educational purposes as a college assignment.
