import { ApiProperty } from '@nestjs/swagger';
import { v4 as uuidv4 } from 'uuid';

interface IProductOrderProps {
  id?: string;
  orderId: string;
  amount: number;
  productId: string;
}

export class ProductOrder {
  private readonly _id: string;
  private readonly _orderId: string;
  private readonly _amount: number;
  private readonly _productId: string;

  constructor(
    props: IProductOrderProps,
    id?: string,
  ) {
    this._id = id || uuidv4();
    this._amount = props.amount;
    this._orderId = props.orderId;
    this._productId = props.productId
  }

  @ApiProperty()
  get id(): string {
    return this._id;
  }

  @ApiProperty()
  get amount(): number {
    return this._amount;
  }

  @ApiProperty()
  get orderId(): string {
    return this._orderId;
  }

  @ApiProperty()
  get productId(): string {
    return this._productId;
  }
}