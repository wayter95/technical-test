import { ApiProperty } from '@nestjs/swagger';
import { v4 as uuidv4 } from 'uuid';

interface IOrderProps {
  id?: string;
  accountId: string;
  isActive?: boolean;
}

export class Order {
  private readonly _id: string;
  private readonly _accountId: string;
  private readonly _createdAt: Date;
  private readonly _updatedAt: Date;
  private readonly _isActive: boolean;

  constructor(
    props: IOrderProps,
    id?: string,
  ) {
    this._id = id || uuidv4();
    this._accountId = props.accountId;
    this._isActive = props.isActive === undefined ? true : props.isActive;
    this._createdAt = new Date();
    this._updatedAt = new Date();
  }

  @ApiProperty()
  get id(): string {
    return this._id;
  }

  @ApiProperty()
  get accountId(): string {
    return this._accountId;
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

