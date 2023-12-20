import { Entity, Column } from "typeorm"

@Entity()
export class Order_items {

    @Column()
    order_id: number

    @Column()
    product_id: number

    @Column()
    quantity: number
}