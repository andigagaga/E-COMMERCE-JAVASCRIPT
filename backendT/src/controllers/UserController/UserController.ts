import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { UserService } from "../../services/user/UserServices";

export class UserController {
  private userService = new UserService();

  async signup(req: Request, res: Response) {
    try {
      const { username, email, password, role } = req.body;
      const existingUser = await this.userService.findUserByEmail(email);

      if (existingUser) {
        return res.status(400).json({
          success: false,
          errors: "Existing user found with same email address",
        });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await this.userService.createUser({
        username,
        email,
        password: hashedPassword,
        role: role || "user",
      });
      const token = jwt.sign(
        { user: { id: user.id, role: user.role } },
        "secret_ecom"
      );

      res.json({ success: true, token });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: "Error creating user" });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const user = await this.userService.findUserByEmail(email);

      if (!user) {
        return res.status(400).json({
          success: false,
          errors: "User not found",
        });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        return res.status(400).json({
          success: false,
          errors: "Invalid email or password",
        });
      }

      const token = jwt.sign({ user: { id: user.id } }, "secret_ecom");
      res.json({ success: true, token });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: "Error logging in" });
    }
  }
}
