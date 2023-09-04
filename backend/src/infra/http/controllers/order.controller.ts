import { Body, Controller, Post, Res, UseGuards } from "@nestjs/common";
import { CreateOrderUseCase } from "src/application/use-cases/order/create-order.use-case";
import { CreateOrderBodyDTO } from "../dto/order/create-order-body";
import { Response } from "express";
import { ApiOkResponse, ApiResponse } from "@nestjs/swagger";
import { JWTAuthGuard } from "../auth/jwt-auth-guard";
import { CurrentUser } from "../auth/current-user";
import { Order } from "src/domain/entities/order.entity";

@Controller("order")
export class OrderController {
  constructor(private readonly createOrderUseCase: CreateOrderUseCase) { }

  @Post("")
  @UseGuards(JWTAuthGuard)
  @ApiOkResponse({ status: 201, description: 'Pedido criado com sucesso' })
  @ApiResponse({ status: 400, description: 'Dados invalidos ou inexistentes' })
  @ApiResponse({ status: 409, description: 'Conflitos' })
  async create(
    @Body() body: CreateOrderBodyDTO,
    @Res() response: Response,
    @CurrentUser() user: { accountId: string },
  ) {
    const { products } = body;

    const result = await this.createOrderUseCase.handle({ accountId: user.accountId, products })

    if (result instanceof Order) {
      return response.status(201).send()
    }

    return response.status(result.statusCode).json({
      success: false,
      message: result.message
    });
  }
}