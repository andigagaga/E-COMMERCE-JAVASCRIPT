import { Router } from "express";
import { AdminController } from "../../controllers/AdminController/AdminController";

const adminRouter = Router();
const adminController = new AdminController();

adminRouter.post("/admin/signup", (req, res) =>
  adminController.signup(req, res)
);
adminRouter.post("/admin/login", (req, res) => adminController.login(req, res));

export default adminRouter;
