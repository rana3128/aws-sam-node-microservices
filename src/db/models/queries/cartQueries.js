// Queries for Templates
exports.addToCart = `
    INSERT INTO shop.carts_items (cart_id, product_id, quantity)
    VALUES
        (?, ?, ?);
`; // (cart_id, )

exports.removeFromCart = `
    DELETE FROM shop.carts_items WHERE product_id=? AND cart_id=?;
`;
exports.getCartById = `
    SELECT * FROM shop.carts_items where cart_id=?;
`;
