-- Table for products
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    image_url TEXT,
    rating DECIMAL(2, 1) DEFAULT 0,
    is_featured BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Table for cart items
CREATE TABLE cart (
    id SERIAL PRIMARY KEY,
    product_id INTEGER REFERENCES products(id),
    quantity INTEGER DEFAULT 1,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Initial data for products
INSERT INTO products (name, price, image_url, rating, is_featured) VALUES
('Red Printed T-shirt', 850, 'images/product-1.jpg', 4.5, true),
('HRX Shoes', 2500, 'images/product-2.jpg', 5.0, true),
('Unisex Joggers', 1250, 'images/product-3.jpg', 3.5, true),
('Puma T-Shirt', 950, 'images/product-4.jpg', 3.0, true),
('Jordan', 1150, 'images/product-5.jpg', 3.0, false),
('Puma Black T-shirt', 2500, 'images/product-6.jpg', 4.0, false),
('HRX Socks', 1250, 'images/product-7.jpg', 2.5, false),
('Fossil Watch', 9500, 'images/product-8.jpg', 4.0, false);
