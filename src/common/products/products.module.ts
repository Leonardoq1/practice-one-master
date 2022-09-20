/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm/dist";
import { ProductsController } from "./products.controller";
import { ProductsEntity } from "./products.entity";
import { ProductsService } from "./products.service";

@Module({
    imports: [TypeOrmModule.forFeature([ProductsEntity])],
    providers: [ProductsService],
    controllers: [ProductsController]
})

export class ProductsModule{}
