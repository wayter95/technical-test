import { Controller, Get, Param, Res } from "@nestjs/common";
import { ApiOkResponse, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Response } from "express";
import { InactiveProductError } from "src/application/use-cases/product/errors/inactive-product";
import { ProductByIdNotFoundError } from "src/application/use-cases/product/errors/product-not-found.error";
import { FindProductByIdUseCase } from "src/application/use-cases/product/find-product-by-id.use-case";
import { ListProductUseCase } from "src/application/use-cases/product/list-product.use-case";
import { Product } from "src/domain/entities/product.entity";

@ApiTags("Produto")
@Controller('product')
export class ProductController {
  constructor(
    private readonly listProductUseCase: ListProductUseCase,
    private readonly findProductByIdUseCase: FindProductByIdUseCase
  ) { }


  @Get(":id")
  @ApiOkResponse({ status: 200, description: "Listar produtos ativos", type: Product })
  @ApiResponse({ status: 500, description: "Erro ao executar" })
  async findById(
    @Param('id') id: string,
    @Res() response: Response,
  ) {
    try {
      const result = await this.findProductByIdUseCase.handle(id);

      return response.status(200).json({
        success: true,
        message: "Server error",
        data: result
      })
    } catch (error) {
      if (
        error instanceof ProductByIdNotFoundError ||
        error instanceof InactiveProductError) {
        return response.status(error.statusCode).json({
          success: false,
          message: error.message
        });
      }

      return response.status(500).json({
        success: false,
        message: "Server error",
        error
      });
    }
  }

  @Get("")
  @ApiOkResponse({ isArray: true, status: 200, description: "Listar produtos ativos", type: Product })
  @ApiResponse({ status: 500, description: "Erro ao executar" })
  async list(
    @Res() response: Response,
  ): Promise<Response> {
    try {
      const result = await this.listProductUseCase.handle();

      return response.status(200).json({
        success: true,
        message: "Server error",
        data: result
      })
    } catch (error) {
      return response.status(500).json({
        success: false,
        message: "Server error",
        error
      })
    }
  }
}