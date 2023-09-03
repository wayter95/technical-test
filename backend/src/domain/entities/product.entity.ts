import { ApiProperty, ApiResponse } from '@nestjs/swagger';
import { v4 as uuidv4 } from 'uuid';

interface ProductProps {
  id?: string;
  name: string;
  description: string;
  value: number;
  freightValue: number;
  discountPercentage: number;
}

export class Product {
  private readonly _id: string;
  private readonly _name: string;
  private readonly _description: string;
  private readonly _value: number;
  private readonly _freightValue: number;
  private readonly _discountPercentage: number;
  private readonly _createdAt: Date;
  private readonly _updatedAt: Date;
  private readonly _isActive: boolean;

  constructor(
    props: ProductProps,
    id?: string,
  ) {
    this._id = id || uuidv4();
    this._name = props.name;
    this._description = props.description;
    this._value = props.value;
    this._freightValue = props.freightValue;
    this._discountPercentage =props.discountPercentage;
    this._createdAt = new Date();
    this._updatedAt =  new Date();
    this._isActive = true;
  }

  @ApiProperty()
  get id(): string {
    return this._id;
  }

  @ApiProperty()
  get name(): string {
    return this._name;
  }

  @ApiProperty()
  get description(): string {
    return this._description;
  }

  @ApiProperty()
  get value(): number {
    return this._value;
  }

  @ApiProperty()
  get freightValue(): number {
    return this._freightValue;
  }

  @ApiProperty()
  get discountPercentage(): number {
    return this._discountPercentage;
  }

  @ApiProperty()
  get createdAt(): Date {
    return this._createdAt;
  }

  @ApiProperty()
  get updatedAt(): Date {
    return this._updatedAt;
  }

  @ApiProperty()
  get isActive(): boolean {
    return this._isActive;
  }
}