import { StatusCodes } from "http-status-codes";
import { createCustomError } from "../errors/custom-error.js";
import jwt from "jsonwebtoken";

const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throw createCustomError("Please provide username and password", 400);
  }

  const id = new Date().getDate();

  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.status(StatusCodes.OK).json({ msg: "user created", token });
};

const dashboard = async (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw createCustomError("Invalid token", 401);
  }

  const token = authHeader.split(" ")[1];

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  if (!decoded) {
    throw createCustomError("Invalid token", 401);
  }

  const luckyNumber = Math.floor(Math.random() * 100);

  res.status(StatusCodes.OK).json({
    msg: `Hello, ${decoded.username}`,
    secret: `Your lucky number is ${luckyNumber}`,
  });
};

export { login, dashboard };
