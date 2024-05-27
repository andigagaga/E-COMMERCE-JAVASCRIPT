import { Repository } from "typeorm";
import { User } from "../../entity/User";
import { AppDataSource } from "../../data-source";

export class UserService {
  private userRepository: Repository<User>;

  constructor() {
    this.userRepository = AppDataSource.getRepository(User);
  }

  async createUser(userDetails: Partial<User>): Promise<User> {
    try {
      const user = this.userRepository.create(userDetails);
      await this.userRepository.save(user);
      return user;
    } catch (error) {
      console.error("Error creating user:", error);
      throw new Error("Database error");
    }
  }

  // mencari pengguna berdasarkan email
  async findUserByEmail(email: string): Promise<User | undefined> {
    try {
      return await this.userRepository.findOne({ where: { email } });
    } catch (error) {
      console.error("Error finding user by email:", error);
      throw new Error("Database error");
    }
  }

  async findUserById(id: number): Promise<User | null> {
    return this.userRepository.findOneBy({ id });
  }
}
