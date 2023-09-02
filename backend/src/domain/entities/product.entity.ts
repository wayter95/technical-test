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
  private readonly _updateAt: Date;
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
    this._updateAt =  new Date();
    this._isActive = true;
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get description(): string {
    return this._description;
  }

  get value(): number {
    return this._value;
  }

  get freightValue(): number {
    return this._freightValue;
  }

  get discountPercentage(): number {
    return this._discountPercentage;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  get updateAt(): Date {
    return this._updateAt;
  }

  get isActive(): boolean {
    return this._isActive;
  }
}