exports.addUser = `
    INSERT INTO shop.users (email, password)
    VALUES (?, ?);
`;

exports.removeUser = `
    DELETE FROM shop.users WHERE email=?;
`;
exports.getUser = `
    SELECT * FROM shop.users WHERE email=?;
`;