import { DomainError } from "src/domain/error/domain-error";

export class ProductByIdNotFoundError extends Error implements DomainError {
  private _statusCode: number;

  constructor(statusCode = 409) {
    super(`Product not found.`);
    this.name = 'ProductNotFound';
    this._statusCode = statusCode;
  }

  get message() {
    return this.message;
  }

  get statusCode() {
    return this._statusCode;
  }
}