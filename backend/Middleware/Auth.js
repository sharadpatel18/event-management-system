const jwt = require("jsonwebtoken");

const Authentication = (req, res, next) => {
  try {
    const auth = req.headers["authorization"];
    if (!auth) {
      res.status(403).json({
        message: "unauthorized , jwt token is require",
        success: false,
      });
    }
    try {
      const decode = jwt.verify(auth, process.env.SCRETE_KEY);
      req.user = decode;
      next();
    } catch (error) {
      console.log(error);
      return res
        .status(401)
        .json({ message: "unauthorized , jwt token is require" });
    }
  } catch (error) {
    res.status(503).json({
        message: "internal server error",
        success: false,
      });
      console.log(error);
  }
};

module.exports = { Authentication };
