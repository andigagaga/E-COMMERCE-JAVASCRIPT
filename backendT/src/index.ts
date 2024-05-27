import { AppDataSource } from "./data-source";
import express from "express";
import { Request, Response } from "express";
import userRouter from "./route/user/userRoutes";
import adminRouter from "./route/admin/adminRoutes";
import productRouter from "./route/Product/ProductRoutes";

AppDataSource.initialize()
  .then(async () => {
    const app = express();
    const port = 5000;

    const router = express.Router();

    app.use(express.json());
    app.use("/api/v1", router);

    app.use("/api/v1", userRouter);
    app.use("/api/v1", adminRouter);
    app.use("/api/v1", productRouter);

    app.get("/", (req: Request, res: Response) => {
      res.send("Express App is running");
    });

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => console.log(error));
