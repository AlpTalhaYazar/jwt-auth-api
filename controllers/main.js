import { StatusCodes } from "http-status-codes";

const login = async (req, res) => {
  res.send("Login route");
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);

  res.status(StatusCodes.OK).json({
    msg: `Hello, John Doe!`,
    secret: `Your lucky number is ${luckyNumber}`,
  });
};

export { login, dashboard };