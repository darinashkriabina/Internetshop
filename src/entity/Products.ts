import { Entity, PrimaryGeneratedColumn, Column, Timestamp, OneToMany } from "typeorm"
import { Order_items } from "./Order_items"

@Entity()
export class Products {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    shop_id: number

    @Column()
    name: string

    @Column()
    price: number

    @Column()
    status: string

    @Column()
    created_at: Timestamp

    @OneToMany(() => Order_items, (order_items) => order_items.product_id)
    order_items: Order_items
}