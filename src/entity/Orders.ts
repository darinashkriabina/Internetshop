import { Entity, PrimaryGeneratedColumn, Column, Timestamp, OneToMany } from "typeorm"
import { Order_items } from "./Order_items"

@Entity()
export class Orders {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    user_id: number

    @Column()
    status: string

    @Column()
    created_at: Timestamp

    @OneToMany(() => Order_items, (order_items) => order_items.order_id)
    order_items: Order_items
    

}
