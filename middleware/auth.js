import jwt from "jsonwebtoken";
import { StatusCodes } from "http-status-codes";
import { createCustomError } from "../errors/custom-error.js";

const authentificationMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw createCustomError(
      "Authentication token is missing",
      StatusCodes.UNAUTHORIZED
    );
  }

  if (!authHeader.startsWith("Bearer ")) {
    throw createCustomError(
      "Authentication token must be Bearer token",
      StatusCodes.UNAUTHORIZED
    );
  }

  const token = authHeader.split(" ")[1];

  if (!token) {
    throw createCustomError("Token not provided", StatusCodes.UNAUTHORIZED);
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { id: decoded.id, username: decoded.username };
    next();
  } catch (error) {
    throw createCustomError(
      error.name === "TokenExpiredError"
        ? "Token has expired"
        : "Invalid or malformed token",
      StatusCodes.UNAUTHORIZED
    );
  }
};

export { authentificationMiddleware };
