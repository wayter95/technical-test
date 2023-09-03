import { Controller, Get, Res } from "@nestjs/common";
import { ApiOkResponse, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Response } from "express";
import { ListProductUseCase } from "src/application/use-cases/product/list-product.use-case";
import { Product } from "src/domain/entities/product.entity";

@ApiTags("Produto")
@Controller('product')
export class ProductController {
  constructor(private readonly listProductUseCase: ListProductUseCase) { }

  @Get("")
  @ApiOkResponse({isArray: true, status: 200, description: "Listar produtos ativos", type: Product })
  @ApiResponse({status: 500, description: "Erro ao executar"})
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