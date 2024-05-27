import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

export enum Category {
  Men = "men",
  Women = "women",
  Kids = "kid",
}

@Entity("products")
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  image: string;

  @Column({
    type: "enum",
    enum: Category,
  })
  category: Category;

  @Column()
  new_price: number;

  @Column()
  old_price: number;

  @Column()
  stock: number;

  @Column()
  description: string;

  @Column()
  tag: string;

  @Column()
  information: string;

  @CreateDateColumn({ type: "datetime" })
  created_at: Date;

  @UpdateDateColumn({ type: "datetime" })
  updated_at: Date;

  @Column({ default: true })
  available: boolean;
}
