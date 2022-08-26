// Queries for Workflow's
exports.getProdList = `
    SELECT id, name, price, category FROM products;
`;

exports.getProductById = `
    SELECT * FROM products WHERE id=?;
`;
