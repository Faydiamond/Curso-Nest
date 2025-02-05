import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './product.entity';

@Entity() //db
export class ProductImage {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  url: string;

  @ManyToOne(() => Product, (product) => product.images, {
    onDelete: 'CASCADE',
  }) //devuelvo del tipo producto
  product: Product;
}
