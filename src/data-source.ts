import "reflect-metadata"
import { DataSource } from "typeorm"
import { Orders } from "./entity/Orders"
import { Order_items } from "./entity/Order_items"
import { Countries } from "./entity/Countries"
import { Products } from "./entity/Products"
import { Shops } from "./entity/Shops"
import { Users } from "./entity/Users"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "darina2929",
    database: "InternetShop",
    synchronize: false,
    logging: false,
    entities: [Users, Shops, Products, Countries, Order_items, Orders],
    migrations: ['src/migration/**/*.ts'],
    subscribers: [],
})
