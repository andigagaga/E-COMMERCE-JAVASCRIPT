import { MoreThanOrEqual, Repository } from "typeorm";
import { Category, Product } from "../../entity/Product";
import { AppDataSource } from "../../data-source";
import { subDays } from "date-fns";

export class ProductServices {
  private productRepository: Repository<Product>;

  constructor() {
    this.productRepository = AppDataSource.getRepository(Product);
  }

  async createProduct(productDetails: Partial<Product>): Promise<Product> {
    try {
      const product = this.productRepository.create(productDetails);
      await this.productRepository.save(product);
      return product;
    } catch (error) {
      console.log(error);
    }
  }

  async getAllProducts(): Promise<Product[]> {
    try {
      return this.productRepository.find();
    } catch (error) {
      console.log(error);
    }
  }

  async getProductById(id: number): Promise<Product | null> {
    try {
      return this.productRepository.findOne({ where: { id } });
    } catch (error) {
      console.log(error);
    }
  }

  async updateProuct(
    id: number,
    productDetails: Partial<Product>
  ): Promise<Product | null> {
    try {
      await this.productRepository.update({ id }, productDetails);
      const updateProduct = await this.productRepository.findOne({
        where: { id },
      });
      return updateProduct;
    } catch (error) {
      console.log(error);
    }
  }

  async deleteProduct(id: number): Promise<boolean> {
    try {
      const result = await this.productRepository.delete(id);
      return result.affected > 0;
    } catch (error) {}
  }

  async getProductByCategory(category: Category): Promise<Product[]> {
    try {
      return await this.productRepository.find({ where: { category } });
    } catch (error) {
      console.log(error);
    }
  }

  async getNewProducts(limit: number): Promise<Product[]> {
    try {
      const thirtyDaysAgo = subDays(new Date(), 30);
      return this.productRepository.find({
        where: { created_at: MoreThanOrEqual(thirtyDaysAgo) },
        order: { created_at: "DESC" },
        take: limit,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async getNewProductByCategory(
    limit: number,
    category: Category
  ): Promise<Product[]> {
    try {
      const getNewProductByCategory = subDays(new Date(), 30);
      return this.productRepository.find({
        where: {
          category,
          created_at: MoreThanOrEqual(getNewProductByCategory),
        },
        order: { created_at: "DESC" },
        take: limit,
      });
    } catch (error) {
      console.log(error);
    }
  }
}
