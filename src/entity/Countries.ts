import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Shops } from './Shops';
import { Users } from './Users';

@Entity()
export class Countries {

    @PrimaryGeneratedColumn()
    code: number

    @Column()
    name: string

    @Column()
    continent_name: string

    @OneToMany(() => Shops, (shops) => shops.country_code)
    shops: Shops
    
    @OneToMany(() => Users, (users) => users.country_code)
    users: Users
}

