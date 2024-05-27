import { Router } from "express";
import { ProductController } from "../../controllers/ProductController/ProductController";
import { fetchAdmin, fetchUser } from "../../middlewares/authMiddlewareUser";

const productRouter = Router();
const productController = new ProductController();

productRouter.post("/createProduct", fetchAdmin, (req, res) =>
  productController.createProduct(req, res)
);

productRouter.get("/getAllProduct", (req, res) =>
  productController.getAllProducts(req, res)
);

productRouter.get("/getProduct/:id", (req, res) =>
  productController.getProductById(req, res)
);

productRouter.put("/updateProduct/:id", fetchAdmin, (req, res) =>
  productController.updateProduct(req, res)
);

productRouter.delete("/deleteProduct/:id", fetchAdmin, (req, res) =>
  productController.deleteProduct(req, res)
);

productRouter.get("/category/:category", (req, res) =>
  productController.getProductByCategory(req, res)
);

productRouter.get("/getNewProduct", (req, res) =>
  productController.getNewProducts(req, res)
);

productRouter.get("/getNewProductByCategory/:category", (req, res) =>
  productController.getNewProductsByCategory(req, res)
);

export default productRouter;
