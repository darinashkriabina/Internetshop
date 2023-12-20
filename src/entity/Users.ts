import { Entity, PrimaryGeneratedColumn, Column, Timestamp, OneToMany } from "typeorm"
import { Orders } from './Orders'

@Entity()
export class Users {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    full_name: string

    @Column()
    email: string

    @Column()
    country_code: number

    @Column()
    created_at: Timestamp

    @OneToMany(() => Orders, (orders) => orders.user_id)
    orders: Orders
}