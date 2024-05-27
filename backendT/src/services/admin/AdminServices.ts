import { Repository } from "typeorm";
import { User } from "../../entity/User";
import { AppDataSource } from "../../data-source";

export class AdminServices {
  private adminRepository: Repository<User>;

  constructor() {
    this.adminRepository = AppDataSource.getRepository(User);
  }

  async createAdmin(adminDetails: Partial<User>): Promise<User> {
    try {
      const admin = this.adminRepository.create(adminDetails);
      await this.adminRepository.save(admin);
      return admin;
    } catch (error) {
      console.log(error);
      throw new Error("Database error");
    }
  }

  async findUserByEmail(email: string): Promise<User | undefined> {
    try {
      return await this.adminRepository.findOne({ where: { email } });
    } catch (error) {
      console.log(error);
      throw new Error("Database error");
    }
  }

  async findAdminById(id: number): Promise<User | null> {
    return this.adminRepository.findOneBy({ id: id });
  }
}
