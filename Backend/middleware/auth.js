const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
    let token = req.headers["authorization"];

    if (!token) return res.status(401).json({ msg: "Unauthorized" });

    // If token starts with Bearer, remove it
    if (token.startsWith("Bearer ")) {
        token = token.slice(7).trim();  // remove "Bearer "
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.id;
        next();
    } catch (err) {
        console.log(err);
        res.status(401).json({ msg: "Invalid token" });
    }
};
