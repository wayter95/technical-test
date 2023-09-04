import { ApiProperty } from '@nestjs/swagger';
import { v4 as uuidv4 } from 'uuid';

interface IAccountProps {
  id?: string;
  fullName: string;
  email: string;
  phone: string;
  password: string;
  isActive?: boolean;
}

export class Account {
  private readonly _id: string;
  private readonly _fullName: string;
  private readonly _email: string;
  private readonly _phone: string;
  private readonly _password: string;
  private readonly _createdAt: Date;
  private readonly _updatedAt: Date;
  private readonly _isActive: boolean;

  constructor(
    props: IAccountProps,
    id?: string,
  ) {
    this._id = id || uuidv4();
    this._fullName = props.fullName;
    this._email = props.email;
    this._phone = props.phone;
    this._password = props.password;
    this._isActive = props.isActive === undefined ? true : props.isActive;
    this._createdAt = new Date();
    this._updatedAt =  new Date();
  }

  @ApiProperty()
  get id(): string {
    return this._id;
  }

  get fullName(): string {
    return this._fullName;
  }

  @ApiProperty()
  get email(): string {
    return this._email;
  }

  @ApiProperty()
  get phone(): string {
    return this._phone;
  }

  @ApiProperty()
  get password(): string {
    return this._password;
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