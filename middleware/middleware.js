const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.headers.authorization;
//   console.log(token);
  if (token) {
    try {
      const decoded = jwt.verify(token.split(" ")[1] || token, "masai");
      if (decoded) {
        // console.log(decoded)
        req.body.postid = decoded.id;
        req.body.postname = decoded.name;
        next();
      } else {
        res.send({ msg: "Please Login first" });
      }
    } catch (error) {
      res.send({ msg: "middleware issue" });
    }
  } else {
    res.send({ msg: "middleware issue else condition" });
  }
};

module.exports = {
  auth,
};
