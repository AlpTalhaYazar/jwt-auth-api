import jwt from "jsonwebtoken";
import { StatusCodes } from "http-status-codes";
import { createCustomError } from "../errors/custom-error.js";

const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throw createCustomError(
      "Please provide username and password",
      StatusCodes.BAD_REQUEST
    );
  }

  const id = new Date().getDate();

  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.status(StatusCodes.OK).json({ msg: "user created", token });
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);

  res.status(StatusCodes.OK).json({
    msg: `Hello, ${req.user.username}`,
    secret: `Your lucky number is ${luckyNumber}`,
  });
};

export { login, dashboard };
