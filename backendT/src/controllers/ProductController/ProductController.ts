import { Request, Response } from "express";
import { ProductServices } from "../../services/Product/ProductServices";
import { Category } from "../../entity/Product";
import { Transaction } from "typeorm";

export class ProductController {
  private productServices = new ProductServices();

  async createProduct(req: Request, res: Response) {
    try {
      const product = await this.productServices.createProduct(req.body);
      res.status(201).json(product);
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "Error creating product" });
    }
  }

  async getAllProducts(req: Request, res: Response) {
    try {
      const product = await this.productServices.getAllProducts();
      res.status(200).json(product);
    } catch (error) {
      console.log(error);
    }
  }

  async getProductById(req: Request, res: Response) {
    try {
      const product = await this.productServices.getProductById(
        Number(req.params.id)
      );
      if (!product) {
        return res
          .status(404)
          .json({ success: false, message: "Product not found" });
      }
      res.status(200).json(product);
    } catch (error) {
      console.log(error);
    }
  }

  async updateProduct(req: Request, res: Response) {
    try {
      const product = await this.productServices.updateProuct(
        Number(req.params.id),
        req.body
      );
      if (!product) {
        return res
          .status(404)
          .json({ success: false, message: "Product not found" });
      }
      return res.status(200).json(product);
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ success: false, message: "Error updating product" });
    }
  }

  async deleteProduct(req: Request, res: Response) {
    try {
      const product = await this.productServices.deleteProduct(
        Number(req.params.id)
      );
      if (!product) {
        return res
          .status(404)
          .json({ success: false, message: "Product not found" });
      }
      return res
        .status(200)
        .json({ success: true, message: "Product deleted" });
    } catch (error) {
      console.log(error);
    }
  }

  async getProductByCategory(req: Request, res: Response) {
    const category = req.params.category as Category;
    if (!Object.values(Category).includes(category)) {
      return res
        .status(404)
        .json({ success: false, message: "Category not found" });
    }
    try {
      const product = await this.productServices.getProductByCategory(category);
      return res.status(200).json(product);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ success: false, message: "Error" });
    }
  }

  async getNewProducts(req: Request, res: Response) {
    try {
      const newProduct = await this.productServices.getNewProducts(8);
      return res.status(200).json(newProduct);
    } catch (error) {
      console.log(error);
    }
  }

  async getNewProductsByCategory(req: Request, res: Response) {
    try {
      const category = req.params.category as Category;
      if (!Object.values(Category).includes(category)) {
        return res
          .status(404)
          .json({ success: false, message: "Category not found" });
      }

      const newProduct = await this.productServices.getNewProductByCategory(
        8,
        category
      );
      return res.status(200).json(newProduct);
    } catch (error) {
      console.log(error);
    }
  }
}
