import { DomainError } from "src/domain/error/domain-error";

export class InactiveProductError extends Error implements DomainError {
  private _statusCode: number;

  constructor(statusCode = 400) {
    super(`Inactive product.`);
    this.name = 'InactiveProduct';
    this._statusCode = statusCode;
  }

  get message() {
    return this.message;
  }

  get statusCode() {
    return this._statusCode;
  }
}