import jwt from "jsonwebtoken";

const isAuth = async (req, res, next) => {
  const token = req.cookies.token;
  console.log("Token from cookie:", token);
  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }
  try {
    console.log("here : ", process.env.JWT_SECRET);
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if(!decoded){
        return res.status(401).json({ message: "Token is not valid" });
    }
    req.userId = decoded.id;
    next();
  } catch (error) {
    res.status(501).json({ message: "Server error r " });
  }
};

export default isAuth;
