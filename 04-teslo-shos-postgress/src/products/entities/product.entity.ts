import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductImage } from './products-image.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', {
    unique: true,
  })
  title: string;
  @Column('float', {
    default: 0,
  })
  price: number;
  @Column({
    type: 'varchar',
    nullable: true,
  })
  description: string;

  @Column('varchar', {
    unique: true,
  })
  slug: string;

  @Column('int', {
    default: 0,
  })
  stock: number;

  @Column('json')
  sizes: string[];

  @Column('json')
  tags: string[];

  @Column('varchar')
  gender: string;

  @OneToMany(
    () => ProductImage, //regreso yn product image.
    (ProductImage) => ProductImage.product, //enlazo
    { cascade: true, eager: true },
  )
  images?: ProductImage[];

  @BeforeInsert()
  checkSlugInsert() {
    if (!this.slug) this.slug = this.title;

    this.slug = this.slug
      .toLowerCase()
      .replaceAll(' ', '_')
      .replaceAll("'", '');

    if (this.title) {
      this.title = this.title.toLowerCase();
    }
    if (this.description) {
      this.description = this.description.toLowerCase();
    }
  }

  @BeforeUpdate()
  checkUpdate() {
    if (!this.slug) this.slug = this.title;
    this.slug = this.slug
      .toLowerCase()
      .replaceAll(' ', '_')
      .replaceAll("'", '');
  }
}
