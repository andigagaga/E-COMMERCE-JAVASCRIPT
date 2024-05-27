import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

// Extend Request interface locally
interface CustomRequest extends Request {
  user?: any;
}

export const fetchUser = (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("auth-token");
  if (!token) {
    return res
      .status(401)
      .send({ error: "Please authenticate using a valid token" });
  }

  try {
    const data = verify(token, "secret_ecom") as { user: { id: string } };
    req.user = data.user;
    next();
  } catch {
    return res
      .status(401)
      .send({ error: "Please authenticate using a valid token" });
  }
};

export const fetchAdmin = (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("auth-token");
  if (!token) {
    return res
      .status(401)
      .send({ error: "Please authenticate using a valid token" });
  }

  try {
    const data = verify(token, "secret_ecom") as {
      admin: { id: string; role: string };
    };
    if (data.admin.role !== "admin") {
      return res.status(401).send({ error: "Unauthorized" });
    }
    req.user = data.admin.role;
    next();
  } catch (error) {
    return res
      .status(401)
      .send({ error: "Please authenticate using a valid token" });
  }
};
