const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1]; // ndan me hapesira dhe ben access index 1 qe esht token (bearer token)
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        req.userData = decoded;
        next();
    } catch (error) {
        res.status(401).json({
            message: 'Auth Failed'
        });
    }
};