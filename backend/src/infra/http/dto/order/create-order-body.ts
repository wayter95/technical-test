import { ApiProperty } from "@nestjs/swagger";
import { ArrayMinSize, IsArray, IsNotEmpty, IsNumber, IsString, Min, isNotEmpty } from "class-validator";

class ProductOrderProps {
  @ApiProperty()
  @IsNumber()
  @Min(1)
  amount: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  id: string;
}

export class CreateOrderBodyDTO {
  @ApiProperty()
  @IsNotEmpty()
  accountId: string
  
  @ApiProperty({ type: [ProductOrderProps] })
  @IsNotEmpty()
  @IsArray()
  @ArrayMinSize(1)
  products: ProductOrderProps[];
}