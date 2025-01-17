import { ApiProperty } from '@nestjs/swagger';
import { v4 as uuidv4 } from 'uuid';

interface IProductProps {
  id?: string;
  name: string;
  description: string;
  photoUrl: string;
  value: number;
  freightValue: number;
  discountPercentage: number;
  isActive?: boolean;
}

export class Product {
  private readonly _id: string;
  private readonly _name: string;
  private readonly _description: string;
  private readonly _photoUrl: string;
  private readonly _value: number;
  private readonly _freightValue: number;
  private readonly _discountPercentage: number;
  private readonly _createdAt: Date;
  private readonly _updatedAt: Date;
  private readonly _isActive: boolean;

  constructor(
    props: IProductProps,
    id?: string,
  ) {
    this._id = id || uuidv4();
    this._name = props.name;
    this._description = props.description;
    this._photoUrl = props.photoUrl;
    this._value = props.value;
    this._freightValue = props.freightValue;
    this._discountPercentage =props.discountPercentage;
    this._isActive = props.isActive === undefined ? true : props.isActive;
    this._createdAt = new Date();
    this._updatedAt =  new Date();
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
  get photoUrl(): string {
    return this._photoUrl;
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