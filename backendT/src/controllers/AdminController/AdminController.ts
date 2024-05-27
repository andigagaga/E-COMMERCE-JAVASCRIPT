import { Request, Response } from "express";
import { AdminServices } from "../../services/admin/AdminServices";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export class AdminController {
  private adminservice = new AdminServices();

  async signup(req: Request, res: Response) {
    try {
      const { username, email, password, role } = req.body;
      const existingAdmin = await this.adminservice.findUserByEmail(email);

      if (existingAdmin) {
        return res.status(400).json({
          success: false,
          errors: "Existing admin found with same email address",
        });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const admin = await this.adminservice.createAdmin({
        username,
        email,
        password: hashedPassword,
        role: role || "admin",
      });

      const token = jwt.sign(
        { admin: { id: admin.id, role: admin.role } },
        "secret_ecom"
      );

      res.json({ success: true, token });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: "Error creating admin" });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const admin = await this.adminservice.findUserByEmail(email);

      if (!admin) {
        return res.status(400).json({
          success: false,
          errors: "Admin not found",
        });
      }

      const isPasswordValid = await bcrypt.compare(password, admin.password);
      if (!isPasswordValid) {
        return res.status(400).json({
          success: false,
          errors: "Invalid email or password",
        });
      }

      const token = jwt.sign(
        { admin: { id: admin.id, role: admin.role } },
        "secret_ecom"
      );
      res.json({ success: true, token });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: "Error logging in" });
    }
  }
}
