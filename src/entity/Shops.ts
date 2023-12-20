import { Entity, PrimaryGeneratedColumn, Column, Timestamp, OneToMany } from "typeorm"
import { Products } from './Products'

@Entity()
export class Shops {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    shop_name: string

    @Column()
    country_code: number

    @Column()
    created_at: Timestamp

    @OneToMany(() => Products, (products) => products.shop_id)
    products: Products
}